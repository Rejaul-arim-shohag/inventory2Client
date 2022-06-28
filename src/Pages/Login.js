import React, { useRef, useState } from 'react';
import { FcPositiveDynamic } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../apiServices/allApi';
import { errorToast } from '../helper/validationHelper';
const Login = () => {
    const navigate=useNavigate()
    let email = useRef();
    let password = useRef();
    const handleLogin=()=>{
    const userEmail = email.value;
    const userPassword = password.value;
        loginUser(userEmail,userPassword)
        .then((result)=>{
            if(result){
                const token = result[0].data.token;
                // console.log(token)
                localStorage.setItem("token", JSON.stringify(token))
                navigate("/dashboard");
                window.location.reload();
            } else{
                errorToast("Invalid emil address or Password")
            }
        })
   }
    return (
        <div className="my-5">
            <div className="custom_container p-2">
                <h2 className="text-center"><FcPositiveDynamic /> INVENTORY</h2>
                <div className="col-md-12 p-2">
                    <label>Email</label>
                    <input ref={(input)=>email=input} type="text" className="form-control my-1" placeholder='Enter Your Email' />
                </div>
                <div className="col-md-12 p-2">
                    <label>Password</label>
                    <input ref={(input)=>password=input} type="text" className="form-control my-1" placeholder='Enter Your Password' />
                </div>
                <div className="col-md-12 p-2">
                   <button onClick={handleLogin} className="btn btn-primary w-100">LOGIN</button>
                </div>
            </div>
        </div>
    );
};

export default Login;