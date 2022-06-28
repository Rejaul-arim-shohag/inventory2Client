import React, {useRef} from 'react';
import {CreateNewCustomer} from '../../apiServices/allApi';
import { useNavigate } from "react-router-dom";
import { errorToast,  successToast } from '../../helper/validationHelper';
const CreateCustomer = () => {
    let navigate = useNavigate()
    let name, phone, email, address = useRef();
    const handleSaveNewCustomer=()=>{
        const nameValue = name.value;
        const phoneValue= phone.value;
        const emailValue = email.value;
        const addressValue = address.value;
        CreateNewCustomer(nameValue,phoneValue, emailValue, addressValue)
        .then((result)=>{
            if(result){
                successToast("Customer added successfully");
                navigate("/customers")
            } else{
                errorToast("Customer add Fail")
            }
        })
    }

    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 p-2">
                        <label>Customer Name</label>
                        <input ref={(input)=>name=input} type="text" className="form-control" />
                    </div>
                    <div className="col-md-6 p-2">
                        <label>Phone</label>
                        <input ref={(input)=>phone=input} type="text" className="form-control" />
                    </div>
                    <div className="col-md-6 p-2">
                        <label>Email</label>
                        <input ref={(input)=>email=input} type="text"  className="form-control" />
                    </div>
                    <div className="col-md-6 p-2">
                        <label>Address</label>
                        <input ref={(input)=>address=input} type="text" className="form-control" />
                    </div>
                </div>
                <br />
                <div className="row customerSaveBtn">
                    <div className="col-md-4 p-2">
                        <button onClick={handleSaveNewCustomer} className="btn btn-primary w-100">Save</button>
                    </div>
                </div>
            </div>
    
        </div>
    );
};

export default CreateCustomer;