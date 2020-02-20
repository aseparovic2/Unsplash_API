import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 8b18ef7fb3a891e654e84b905a58c62a02b89518d479f87f7f67f98024783ef8"
  }
});
