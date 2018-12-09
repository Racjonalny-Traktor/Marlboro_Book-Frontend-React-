import axios from "axios";
import environment from "../environment/environment";

export default class AuthorService {
  static async getBooks() {
    try {
      return await axios.get(`${environment.config.apiUrl}/actions/book`);
    } catch (error) {
      console.error(error);
    }
  }
}
