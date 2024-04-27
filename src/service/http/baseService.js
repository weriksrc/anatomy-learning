import Http from "./http";
import Vue from "vue";
const instance = new Vue();

export default class BaseServiceHttp {
  uri = "";
  endpoint = "";
  _http;
  requests = {
    show: {
      action: "buscar",
      method: "get",
    },
    store: {
      action: "salvar",
      method: "post",
    },
    update: {
      action: "atualizar",
      method: "put",
    },
    delete: {
      action: "apagar",
      method: "delete",
    },
  };

  constructor(id = "", resource, relationship = "", baseURL) {
    this.id = id ? `/${id}` : "";
    this.resource = resource;
    this.relationship = relationship;
    this._http = new Http(baseURL);
    this.generateRelationships();
    this.assignMethodsHTTP();
  }

  http() {
    return this._http;
  }
  getURI() {
    this.uri = `${this.resource}${this.id}${this.endpoint}`;
    return this.uri;
  }

  getRelationship(relation = "", _id = "") {
    _id = _id ? `/${_id}` : "";
    this.endpoint = relation ? `${this.endpoint}/${relation}${_id}` : "";
    return this;
  }

  generateRelationships() {
    Object.keys(this.relationship).map((key) => {
      Object.assign(BaseServiceHttp.prototype, {
        [key]: (_id) => {
          this.getRelationship(this.relationship[key], _id);
          return this;
        },
      });
    });
  }

  assignMethods(base, index) {
    return Object.assign(BaseServiceHttp.prototype, {
      [index]: this.generateRequests(base, index),
    });
  }

  error(verb, msg) {
    instance.$toast.error(msg || `Erro ao ${verb} ${this.resource}`);
  }

  success(verb, msg) {
    instance.$toast.success(msg || `Sucesso ao ${verb}`);
  }

  checkSetup(setup) {
    if (!("useCache" in setup)) setup["useCache"] = false;
    return setup;
  }

  hasQueryString(httpMethod, data) {
    if (httpMethod === "get") return { params: { ...data } };
    return data;
  }

  async createMethodHTTP(data, settings, config = {}, setup = {}) {
    data = this.hasQueryString(settings.method, data);
    Object.assign(data, this.checkSetup(setup));

    try {
      let res = await this.http()[settings.method](this.getURI(), data);
      if (config?.notification)
        this.success(settings.action, config?.message?.success);
      return res;
    } catch (err) {
      let msgError = config?.message?.error || err?.response?.data?.message;
      this.error(settings.action, msgError);
      console.log(err);
    }
  }

  assignMethodsHTTP() {
    let commomRequests = Object.keys(this.requests);
    commomRequests.map((req) => {
      return Object.assign(BaseServiceHttp.prototype, {
        [req]: (base, config, setup) => {
          return this.createMethodHTTP(base, this.requests[req], config, setup);
        },
      });
    });
  }
}