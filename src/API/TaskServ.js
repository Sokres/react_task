import axios from "axios";
export default class TaskServ {
  static async getAll(limit = 10, page = 1) {
    try {
      const respons = await axios.get('https://666039765425580055b2e20a.mockapi.io/task', {
      });
      console.log(respons.data);
      return respons;
    }
    catch (e) {
      console.log(e);
    }

  }
  static async addTask(task) {
    try {
      const deletTask = await axios.post(
        `https://666039765425580055b2e20a.mockapi.io/task/`,
        { ...task }
      );
      console.log(deletTask.data);
      return deletTask;
    } catch (e) {
      console.log(e);
    }
  }
  static async delet(task) {
    try {
      const deletTask = await axios.delete(
        `https://666039765425580055b2e20a.mockapi.io/task/${task}`,
        {}
      );
      console.log(deletTask.data);
      return deletTask;
    } catch (e) {
      console.log(e);
    }
  }
}
// import { collection, getDocs, limit, query } from "firebase/firestore";
// import { db } from '../firebase';
// export default class TaskServ {
//     static async getAll(lim = 10) {
//     const fireResp = await collection(db, "bd_task")
//     const responsis = await getDocs(query(fireResp, limit(lim)))
//     const respons = []
//     responsis.forEach((num) => {
//       respons.push({...num.data(), id: num.id})
//     });
//     return [respons, responsis, fireResp];
//   }
// }