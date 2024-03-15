import axios from "axios";
axios.defaults.headers.common['X-Jsio-Token'] = '8e133d679ef62bcde2fa7f28ad5494ba';
export default class TaskServ {
  static async getAll(limit = 10, page = 1) {
    const respons = await axios.get('https://jsonplaceholder.typicode.com/posts', {
      params: {
        _limit: limit,
        _page: page
      }
    });
    return respons;
  }
}