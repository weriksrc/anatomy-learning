import BaseServiceHttp from "./baseService";

class UserHttp extends BaseServiceHttp {
  constructor(id) {
    const resource = "/question";
    const relationship = {};
    const baseURL = process.env.VUE_APP_ROOT_API;
    super(id, resource, relationship, baseURL);
  }
}

export default (id) => new UserHttp(id);
