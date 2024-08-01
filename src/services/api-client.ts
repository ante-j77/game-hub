import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "478ff540d32a47b982482d262352e441",
  },
});
