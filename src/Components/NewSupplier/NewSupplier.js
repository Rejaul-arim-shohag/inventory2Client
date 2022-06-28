import React, { useRef } from 'react';
import { CreateSupplier } from '../../apiServices/allApi';
import { errorToast, successToast } from '../../helper/validationHelper';
import { useNavigate } from "react-router-dom";
const NewSupplier = () => {
    let name, phone, email, address = useRef();
    let navigate =useNavigate();
    const handleCreateNewSupplier=()=>{
        CreateSupplier(name.value, phone.value, email.value, address.value)
        .then((result)=>{
            if(result){
                successToast("Supplier create success");
                navigate("/suppliers")
            } else{
                errorToast("Supplier Create Fail")
            }
        })
    }
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 p-2">
                        <label>Supplier Name</label>
                        <input ref={(input)=>name=input} type="text" className="form-control" />
                    </div>
                    <div className="col-md-6 p-2">
                        <label>Phone</label>
                        <input ref={(input)=>phone=input} type="text" className="form-control" />
                    </div>
                    <div className="col-md-6 p-2">
                        <label>Email</label>
                        <input ref={(input)=>email=input} type="text" className="form-control" />
                    </div>
                    <div className="col-md-6 p-2">
                        <label>Address</label>
                        <input ref={(input)=>address=input} type="text" className="form-control" />
                    </div>
                </div>
                <br />
                <div className="row customerSaveBtn">
                    <div className="col-md-4 p-2">
                        <button onClick={handleCreateNewSupplier} className="btn btn-primary w-100">Save</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default NewSupplier;