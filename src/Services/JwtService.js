export default class JwtService {
  static getToken() {
    return window.localStorage.getItem('user_token');
  }

  static setToken(token) {
    return window.localStorage.setItem('user_token', token);
  }

  static removeToken() {
    window.localStorage.removeItem('user_token');
  }
}