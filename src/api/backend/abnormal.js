import Api from "@src/api";
const headers = {
  "Content-Type": "application/json"
};
export default {
  getAbnormality(data) {
    return Api().get("api/get-abnormality",{params: data});
  },
  sendEmailNotify(data) {
    return Api(headers).post('api/send-email-notify',data);
  },
  checkRestorationUser(data) {
    return Api(headers).post('api/restoration-user',data).catch(err => console.log(err));
  },
  getTimeDataLatest() {
    return Api().get('api/get-data-latest');
  }
};
