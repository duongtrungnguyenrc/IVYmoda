import axios from "./CustomAxios";

const CheckLogin = async () => {
    try {
        const response = await axios.post("checkLogin", { token: localStorage.getItem("token") });
        return response.status === 200;
    } catch (error) {
        return false;
    }
};
export default CheckLogin;