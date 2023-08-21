import { useState } from "react";
import { Header, Content, Footer } from "../components";
import DebounceInput from "../services/DebounceInput";

import axios from "../services/CustomAxios";

const Login = () => {
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");    

    const handleLogin = async (e : any) => {
        e.preventDefault();
        try {
            const response = await axios.post("login", {email, password});
            if(response.status == 200) {
                localStorage.setItem("token", response.data.token);
                location.href = "../";
            }
        } catch (error) {
            console.log(error);
            
        }
    }
    
  return <>
            <Header/>
            <Content>
                <div className="d-flex justify-content-between container py-5">
                    <div className="login-form d-flex flex-column col-5">
                        <div className="login-form-header text-center mb-3">
                            <b>Bạn đã có tài khoản IVY</b>
                        </div>
                        <div className="login-form-header text-center mb-3">
                            Nếu bạn đã có tài khoản, hãy đăng nhập để tích lũy điểm thành viên và nhận được những ưu đãi tốt hơn!
                        </div>
                        <div className="login-form px-5">
                            <form id="login-form" onSubmit={(e) => handleLogin(e)}>
                                <div className="form-outline mb-3">
                                    <input type="email" 
                                        id="email" 
                                        className="form-control p-3" 
                                        placeholder="Email/SĐT" 
                                        onChange={(e) => DebounceInput(setEmail, e.target.value, 300)} 
                                        required
                                    />
                                </div>

                                <div className="form-outline mb-3">
                                    <input type="password" 
                                        id="password" 
                                        className="form-control p-3" 
                                        placeholder="Mật khẩu" 
                                        onChange={(e) => DebounceInput(setPassword, e.target.value, 300)} 
                                        required
                                    />
                                </div>

                                <div className="form-check mb-3">
                                    <input type="checkbox" id="save-password-btn" className="form-check-input" />
                                    <label className="form-check-label text-secondary">Save password</label>
                                </div>
                                <button type="submit" className="btn btn-lg w-100 btn-dark mb-3">Đăng nhập</button>
                                <div className="d-flex w-100 gap-1">Don't have account? <a className="text-decoration-none" href="">create one!</a></div>
                            </form>
                        </div>
                    </div>
                    <div className="register col-5">
                        <div className="register-content">
                            <div className="login-form-header text-center mb-3">
                                <b>Bạn đã có tài khoản IVY</b>
                            </div>
                        </div>
                        <p className="text-center mb-0">Nếu bạn chưa có tài khoản trên ivymoda.com, hãy sử dụng tùy chọn này để truy cập biểu mẫu đăng ký.</p>
                        <p className="text-center mb-4">Bằng cách cung cấp cho IVY moda thông tin chi tiết của bạn, quá trình mua hàng trên ivymoda.com sẽ là một trải nghiệm thú vị và nhanh chóng hơn!</p>
                        <a href="" className="btn w-100 btn-lg btn-dark">Đăng ký</a>
                    </div>
                </div>
            </Content>
            <Footer/>
        </>;
};
export default Login;