import axios from "axios";
import jwtService from "./JwtService";
import environment from "../environement/environment";

export default class BookService {
  static async getBeacons() {
    try {
      return await axios.get(`${environment.config.apiUrl}/beacon`, {
        headers: { token: jwtService.getToken() }
      });
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Adds new beacon
   * @param Object beacon - {beacon_name, beacon_token}
   */
  static async addNewBeacon(beacon) {
    try {
      const res = await axios.post(
        `${environment.config.apiUrl}/beacon`,
        beacon,
        {
          headers: { token: jwtService.getToken() }
        }
      );
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  }
}
