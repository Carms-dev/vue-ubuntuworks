import { useStorage } from '@vueuse/core';
import db from '../../firebase/init';
import { doc, getDoc, serverTimestamp, updateDoc, addDoc, collection } from "firebase/firestore";
import { ref } from 'vue';

const reportId = useStorage('report-id', "");
const reportData = useStorage('report-data', {});
const formData = ref({});

let formDataSnap = ref("");
const emit = () => {};

export async function useFetchFormData(moduleName) {
  if (reportId.value) {
    const reportRef = doc(db, 'reports', reportId.value);
    const reportSnap = await getDoc(reportRef);

    if (reportSnap.exists()) {
      reportData.value = reportSnap.data();
      // Take stringified "snapshot" of OG form data retrieved to compare upon later
      formDataSnap.value = JSON.stringify(formData.value);
    } else {
      console.log("Couldn't retrieve report! :(");
      // remove report id value so new doc can be created
      // TODO: refactor this... maybe just create a new doc ref each time?
      reportId.value = "";
    }
  } else {
    reportData.value = {};
  }

  if (reportData.value.hasOwnProperty(moduleName)) {
    formData.value = reportData.value[moduleName];
  } else {
    formData.value = {};
    reportData.value[moduleName] = formData.value;
  }

  return { reportId, formData, formDataSnap };
}


export async function useReportAddOrUpdate(moduleName) {
  const report = { [moduleName]: formData.value };
  console.log('Report:', report);

  if (JSON.stringify(report) !== formDataSnap.value) {
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
  }
}