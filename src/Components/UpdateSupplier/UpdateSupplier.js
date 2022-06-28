import React, { useEffect, useRef } from 'react';
import {useNavigate, useParams } from 'react-router-dom';
import { readSupplierById, updateSupplier } from '../../apiServices/allApi';
import { isEmpty,successToast, errorToast } from '../../helper/validationHelper';
const UpdateSupplier = () => {
    let navigate = useNavigate();
    let { supplierId } = useParams();
    let supplierName, phone, email, address = useRef();
    useEffect(()=>{
        readSupplierById(supplierId)
        .then((result)=>{
            supplierName.value = result.Name;
            phone.value = result.Phone;
            email.value = result.Email;
            address.value = result.Address;
            console.log(result)
        })    
    },[supplierName,phone,email,address])

    const handleSaveEdit=()=>{
        let supplier_name=supplierName.value;
        let supplier_phone = phone.value;
        let supplier_email = email.value; 
        let supplier_address = address.value;
        if (isEmpty(supplier_name)) {
            errorToast("Supplier-Name is Required")
        }else if (isEmpty(supplier_phone)) {
            errorToast("phone number is Required")
        }
        else if (isEmpty(supplier_email)) {
            errorToast("email is Required")
        }
        else if (isEmpty(supplier_address)) {
            errorToast("address is Required")
        } else{
            updateSupplier(supplierId,supplier_name,supplier_phone,supplier_email, supplier_address)
            .then((result)=>{
                if(result){
                    successToast("saved success")
                    navigate("/suppliers")
                } else{
                    errorToast("saved Failed")
                }
            })
        }
    }
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 p-2">
                        <label>Supplier Name</label>
                        <input ref={(input)=>supplierName=input} type="text" className="form-control" />
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
                        <button onClick={handleSaveEdit} className="btn btn-primary w-100">Save</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateSupplier;