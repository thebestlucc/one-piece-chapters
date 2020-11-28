import axios from "axios";
import { CHAPTERS_BASE_URL } from "../helpers/config";

export default axios.create({
  baseURL: CHAPTERS_BASE_URL,
});