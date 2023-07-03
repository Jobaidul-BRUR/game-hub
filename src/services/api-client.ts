import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: '4f8b8a706ea94906a91dc28527a32718',
  }
});

export default apiClient;