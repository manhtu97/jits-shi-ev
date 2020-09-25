import Api from "@src/api";

export default {
  getOverviewArea(idCity) {
    return Api().get("/api/overview-area?idCity=" + idCity);
  },
  getOverviewOfYear(data) {
    return Api().get("api/overview-of-year", {params: data});
  },
};
