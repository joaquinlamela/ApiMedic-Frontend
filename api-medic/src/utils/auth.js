import jwt_decode from "jwt-decode";
import { setHeaders, axiosInstance } from "../config/axios";

let instance = null;

export default class Auth {
  constructor() {
    if (!instance) {
      this.getAuthToken = this.getAuthToken.bind(this);
      this.setAuthToken = this.setAuthToken.bind(this);

      this.refreshUserToken = this.refreshUserToken.bind(this);
      this.refresherAction = this.refresherAction.bind(this);

      this.isAuthenticated = this.isAuthenticated.bind(this);
      this.isTokenExpired = this.isTokenExpired.bind(this);
      this.decodeToken = this.decodeToken.bind(this);

      this.logout = this.logout.bind(this);

      this.storage = window.localStorage;
      this.refresher = null;

      instance = this;
    }
    return instance;
  }

  static getInstance() {
    if (instance === null) {
      instance = new Auth();
    }
    return instance;
  }

  getAuthToken() {
    return this.storage.getItem("token");
  }

  setAuthToken(newToken) {
    setHeaders(newToken);
    this.storage.setItem("token", newToken);
    return newToken;
  }

  refreshUserToken() {
    axiosInstance({
      method: "post",
      url: "/auth/refresh/",
      data: { token: this.getAuthToken() },
    })
      .then((response) => {
        this.setAuthToken(response.data.token);
      })
      .catch(() => {
        clearInterval(this.refresher);
        this.storage.clear();
        window.location.replace("/login");
      });
  }

  isAuthenticated() {
    const res = !this.isTokenExpired();
    if (!res) {
      this.cleanStorage();
    }
    return res;
  }

  isAdmin() {
    const decoded = this.decodeToken();
    if (decoded && decoded.isAdmin) {
      return true;
    }
    return false;
  }

  emailUserAuthenticated() {
    const decoded = this.decodeToken();
    if (decoded && decoded.email) {
      return decoded.email;
    }
    return "";
  }

  isTokenExpired() {
    const decoded = this.decodeToken();
    if (!decoded || typeof decoded.exp === "undefined") {
      return true;
    }
    const d = new Date(0);
    d.setUTCSeconds(decoded.exp);
    if (d === null) {
      return true;
    }
    return new Date().valueOf() > d.valueOf();
  }

  decodeToken() {
    const token = this.getAuthToken();
    let decoded;
    try {
      decoded = jwt_decode(token);
    } catch (err) {
      decoded = null;
    }
    return decoded;
  }

  logout() {
    this.cleanStorage();
    clearInterval(this.refresher);
  }

  cleanStorage() {
    this.storage.removeItem("token");
  }

  refresherAction() {
    if (this.isAuthenticated()) {
      this.refreshUserToken();
    }
  }
}

Auth.getInstance();
