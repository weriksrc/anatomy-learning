import BaseServiceHttp from "../baseService";

class UserHttp extends BaseServiceHttp {
  constructor(id) {
    const resource = "/forgot-my-password";
    const relationship = {
      forgotMyPasswordCode: "code"
    };
    const baseURL = process.env.VUE_APP_ROOT_API;
    super(id, resource, relationship, baseURL);
  }
}

export default (id) => new UserHttp(id);
