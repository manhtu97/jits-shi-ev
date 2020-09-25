import Api from "@src/api";
export default {
  getUsageHistory(data) {
    return Api().get("/api/get-usage-history", { params: data });
  },
  getDetailUsageUser(data) {
    return Api().get("api/get-detail-user", {params: data});
  },
  getTimeDataLatest() {
    return Api().get('api/get-data-latest');
  }
};
