import axios from "axios";
const KEY = "AIzaSyBmr7-oNiqNKCc2tEpxRM1T_xHmze7niLE";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
