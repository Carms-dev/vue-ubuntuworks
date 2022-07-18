import { useStorage } from '@vueuse/core';
import db from '../../firebase/init';
import { doc, getDoc, serverTimestamp, updateDoc } from "firebase/firestore";
import { ref } from 'vue';

const reportId = useStorage('report-id', "");
const formData = ref({});

export async function useFetchFormData() {
  if (reportId.value) {
    console.log("here!");
    const reportRef = doc(db, 'reports', reportId.value);
    const reportSnap = await getDoc(reportRef);

    if (reportSnap.exists()) {
      formData.value = reportSnap.data();
      console.log(formData.value);
    } else {
      console.log("Couldn't retrieve report! :(");
      // remove report id value so new doc can be created
      // TODO: refactor this... maybe just create a new doc ref each time?
      reportId.value = "";
    }
  }

  return { reportId, formData };
}


export async function useReportAddOrUpdate() {
  const report = formData.value;

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