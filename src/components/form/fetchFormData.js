import { useStorage } from '@vueuse/core';
import db from '../../firebase/init';
import { doc, getDoc } from "firebase/firestore";
import { ref } from 'vue';

export async function useFetchFormData() {
  const formData = ref({});
  const reportId = useStorage('report-id', "");

  if (reportId.value) {
    console.log("here!");
    const reportRef = doc(db, 'reports', reportId.value);
    const reportSnap = await getDoc(reportRef);

    if (reportSnap.exists()) {
      formData.value = reportSnap.data();
      console.log(formData.value);
    } else {
      console.log("Couldn't retrieve report! :(");
    }
  }

  return { reportId, formData };
}