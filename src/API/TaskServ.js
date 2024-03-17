// import axios from "axios";
// export default class TaskServ {
//   static async getAll(limit = 10, page = 1) {
//     const respons = await axios.get('https://jsonplaceholder.typicode.com/posts', {
//       params: {
//         _limit: limit,
//         _page: page
//       }
//     });
//     return respons;
//   }
// }
import { collection, getDocs, limit, query } from "firebase/firestore";
import { db } from '../firebase';
export default class TaskServ {
    static async getAll(lim = 10) {
    const fireResp = await collection(db, "bd_task")
    const responsis = await getDocs(query(fireResp, limit(lim)))
    const respons = []
    responsis.forEach((num) => {
      respons.push({...num.data(), id: num.id})
    });
    return [respons, responsis, fireResp];
  }
}