import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "46b7b7eee3634fcbbd414b79d360c975",
  },
});
