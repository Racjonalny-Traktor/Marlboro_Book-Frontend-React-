import axios from "axios";
import environment from "../environment/environment";

export default class AuthorService {
  static async getBooks() {
    try {
      console.log(`${environment.config.apiUrl}/actions/book`);
      return await axios.get(`${environment.config.apiUrl}/actions/book`);
    } catch (error) {
      console.error(error);
    }
  }
  static async deleteBook(id) {
    try {
      console.log(id, `${environment.config.apiUrl}/actions/book`);
      return await axios.delete(`${environment.config.apiUrl}/actions/book`, {
        data: {
          id: id
        }
      });
    } catch (error) {
      console.error(error);
    }
  }

  // static async addNewBeacon(beacon) {
  //   try {
  //     const res = await axios.post(
  //       `${environment.config.apiUrl}/action/books`,
  //       beacon,
  //       {
  //         headers: { token: jwtService.getToken() }
  //       }
  //     );
  //     console.log(res);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
}
