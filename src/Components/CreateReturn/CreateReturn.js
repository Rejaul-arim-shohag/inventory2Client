import React, { useRef, useState } from 'react';
import { createReturn } from '../../apiServices/allApi';
import { errorToast, successToast } from '../../helper/validationHelper';

const CreateReturn = () => {
    let CustomerID,ReturnID,ReturnCharges,GrandTotal,Note,ProductID,Qty,Cost,Total =useRef();
    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState(0);
    const [returnCharge, setreturnCharge] = useState(0);
    const returnProductAmount = price*quantity;
    const grandTotalAmount = returnProductAmount+returnCharge;
    const handleCreateReturn=()=>{
        createReturn(
            CustomerID.value,
            ReturnID.value,
            ReturnCharges.value,
            GrandTotal.value,
            Note.value,
            ProductID.value,
            Qty.value,
            Cost.value,
            Total.value
            )
            .then((result)=>{
                if(result){
                    successToast("return created success")
                } else{
                    errorToast("return created failed")
                }
            })
    }
    return (
        <div>
            <div className="container">
                <h5 className="my-4">Create Your Return</h5>
                <div className="row">
                    <div className="col-md-6">
                        <label>CustomerID</label>
                        <input ref={(input)=>CustomerID=input} type="text" className="form-control" />
                    </div>
                    <div className="col-md-6">
                        <label>ProductID</label>
                        <input ref={(input)=>ProductID=input} type="text" className="form-control" />
                    </div>
                    <div className="col-md-6">
                        <label>ReturnID</label>
                        <input ref={(input)=>ReturnID=input} type="text" className="form-control" />
                    </div>
                    <div className="col-md-6">
                        <label>ReturnCharges</label>
                        <input onChange={(e)=>setreturnCharge(parseInt(e.target.value))} ref={(input)=>ReturnCharges=input} type="text" className="form-control" />
                    </div>
                    <div className="col-md-6">
                        <label>Price</label>
                        <input  onChange={(e)=>setPrice(parseInt(e.target.value))} ref={(input)=>Cost=input} type="text" className="form-control" />
                    </div>
                    <div className="col-md-6">
                        <label>Qty</label>
                        <input onChange={(e)=>setQuantity(parseInt(e.target.value))} ref={(input)=>Qty=input} type="number" min={1} className="form-control" />
                    </div>
                    <div className="col-md-6">
                        <label>Total</label>
                        <input value={returnProductAmount} ref={(input)=>Total=input} type="text" className="form-control" />
                    </div>
                    <div className="col-md-6">
                        <label>GrandTotal</label>
                        <input value={grandTotalAmount} ref={(input)=>GrandTotal=input} type="text" className="form-control" />
                    </div>
                    <div className="col-md-12">
                        <label>Note</label>
                        <input placeholder="Product's problem" ref={(input)=>Note=input} type="text" className="form-control" />
                    </div>
                    <div className="col-md-6 mt-4">
                        <button onClick={handleCreateReturn} className="btn btn-primary w-100">Save</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateReturn;