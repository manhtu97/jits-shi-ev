import Api from "@src/api";
// const headers = {
//   "Content-Type": "application/json"
// };
export default {
  getPredictMonth(data) {
    return Api().get("api/get-predict-month",{params: data});
  }
};