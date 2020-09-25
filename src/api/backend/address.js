import Api from "@src/api";
// const headers = {
//   "Content-Type": "application/json",
// };
export default {
  getDataPrefecture() {
    return Api().get("api/get-prefecture");
  },
  getDataCity(idPrefecture) {
    return Api().get("api/get-city?idPrefecture=" + idPrefecture);
  },
  getDataDistrict(idCity) {
    return Api().get("api/get-district?idCity=" + idCity);
  },
  getPostalCode(idDistrict) {
    return Api().get("api/get-postal-code?idDistrict=" + idDistrict);
  },
  getUserCode(params) {
    return Api().get("api/get-customer", {params: params});
  }
};
