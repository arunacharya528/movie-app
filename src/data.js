import axios from "axios";

export const apiURL = process.env.REACT_APP_YTS_API_URL

export const getData = (endpoint, otherCredentials = {}) => {
    let credentials = {
        method: 'GET',
        url: `${apiURL}${endpoint}`,
    };
    return axios({ ...credentials, ...otherCredentials })
}