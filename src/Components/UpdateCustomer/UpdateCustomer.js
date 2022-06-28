import React, { useEffect, useRef, useState } from 'react';
import { useParams,useNavigate  } from 'react-router-dom';
import { errorToast, isEmpty, successToast } from '../../helper/validationHelper';
import { readCustomerByID, updateCustomer } from '../../apiServices/allApi';
const UpdateCustomer = () => {
    let navigate = useNavigate();
    let {customerId} = useParams();
    const [customer, setCustomer]=useState({})
    let customerName, phone, email, address = useRef();
    useEffect(()=>{
        readCustomerByID(customerId)
        .then((result)=>{
            setCustomer(result)
        })
    }, [])
   
    const handleUpdateCustomer=(customerId)=>{
        updateCustomer(customerId,customerName.value,phone.value,email.value,address.value)
        .then((result)=>{
            if(result){
                successToast("Edit success");
                navigate("/customers")
                
            } else{
                errorToast("Edit failed")
            }
        })
    }
    return (
        <div>         
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 p-2">
                        <label>Customer Name</label> 
                        <input defaultValue={customer ?.CustomerName} ref={(input)=>customerName=input} type="text" className="form-control" />
                    </div>
                    <div className="col-md-6 p-2">
                        <label>Phone</label>
                        <input defaultValue={customer ?.Phone} ref={(input)=>phone=input} type="text" className="form-control" />
                    </div>
                    <div className="col-md-6 p-2">
                        <label>Email</label>
                        <input defaultValue={customer ?.Email} ref={(input)=>email=input} type="text"  className="form-control" />
                    </div>
                    <div className="col-md-6 p-2">
                        <label>Address</label>
                        <input defaultValue={customer ?.Address} ref={(input)=>address=input} type="text" className="form-control" />
                    </div>
                </div>
                <br />
                <div className="row customerSaveBtn">
                    <div className="col-md-4 p-2">
                        <button onClick={()=>handleUpdateCustomer(customerId)} className="btn btn-primary w-100">Update</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateCustomer;