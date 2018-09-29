import axios from "axios";

export default {
  getArticles: function(query) {
    return axios.get("/api/articles", { params: { q: query } });
  }
};
