import axios from "./axiosinstance";
import { APIs } from './endpoints'


export const login = async (payload) => {
    try {
        const response = await axios.post(`${APIs.login.endPoint}`, payload, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        return response
    } catch (err) {
        return err.response
    }
}

export const getPropertyFilterListAll = async () => {
    try {
        const response = await axiosClient.post(`${APIs.propertyFilter.endPoint}`);
        return response.data;
    } catch (err) {
        return err.response;
    }
};
