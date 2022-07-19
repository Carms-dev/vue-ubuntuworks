import { useStorage } from '@vueuse/core';
import db from '../../firebase/init';
import { doc, getDoc, serverTimestamp, updateDoc, addDoc, collection } from "firebase/firestore";
import { computed, ref, watch } from 'vue';

const reportId = useStorage('report-id', "");
const formData = ref({});
let formDataSnap = ref("");

export async function useFetchFormData() {
  if (reportId.value) {
    const reportRef = doc(db, 'reports', reportId.value);
    const reportSnap = await getDoc(reportRef);

    if (reportSnap.exists()) {
      formData.value = reportSnap.data();
      // Take stringified "snapshot" of OG form data retrieved to compare upon later
      formDataSnap.value = JSON.stringify(formData.value);
    } else {
      console.log("Couldn't retrieve report! :(");
      // remove report id value so new doc can be created
      // TODO: refactor this... maybe just create a new doc ref each time?
      reportId.value = "";
    }
  }

  return { reportId, formData, formDataSnap };
}


export async function useReportAddOrUpdate() {
  const report = formData.value;

  if (JSON.stringify(report) === formDataSnap.value) {
    console.log("Nuffin' to do guv.");
    return;
  }

  try {
    if (!reportId.value) {
      // If no id stored, create new report
      report.created = serverTimestamp();
      const reportRef = await addDoc(collection(db, "reports"), report);
      console.log("Report written with ID", reportRef.id);
      reportId.value = reportRef.id;
    } else {
      report.last_modified = serverTimestamp();
      const reportRef = doc(db, "reports", reportId.value);
      await updateDoc(reportRef, report);
      console.log("Updated report with ID", reportId);
    }
    // router.push(
    //   // TODO: factor in proper module redirection
    //   `/reports/${reportId}/modules/audio_visual`
    // );
  }
  catch(error) {
    console.error('Error writing report', error);
  }
}