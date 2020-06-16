// import the library version of axios
import axios from "axios";

// create a version of axios with useful defaults
export default axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        // make sure we get JSON back
        Accept: "application/json",

        /**
         * Authorization: "Bearer ...",
         */


    },
});
