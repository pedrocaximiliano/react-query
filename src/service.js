import axios from "axios";
import { BASE_URL } from "./constants";

const getService = async () => {
    return await axios.get(BASE_URL).then((res) => res.data)
};

export default getService;