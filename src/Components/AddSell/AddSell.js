import React, { useRef, useState } from 'react';
import { createSell } from '../../apiServices/allApi';
import { errorToast, isEmpty, successToast } from "../../helper/validationHelper"
const AddSell = () => {
    let customerID,sellID,vatTax,otherCost,discount,grandTotal,productID,Qty,price,total, note= useRef();
    const [productPrice, setProductPrice]=useState(0);
    const [quantity, setQuantity]=useState(1);
    const [VatTax, setvatTax]=useState(0);
    const [Discount, setDiscount]=useState(0);
    const [OtherCost, setOtherCost]=useState(0);

    const totalProductPrice = productPrice*quantity;
    const GrandTotal = parseInt(totalProductPrice)+parseInt(VatTax)+parseInt(OtherCost)-parseInt(Discount);
    const handleAddSell=()=>{
       let CustomerID = customerID.value;
       let SellID = sellID.value;
       let VatTax = vatTax.value;
       let OtherCost = otherCost.value;
       let Discount = discount.value;
       let GrandTotal = grandTotal.value;
       let ProductID = productID.value;
       let Quantity = Qty.value;
       let Price = price.value;
       let Total = total.value;
       let Note = note.value;
      if(isEmpty(CustomerID)){
        errorToast("Customer-ID is Required")
      } else if(isEmpty(SellID)){
        errorToast("Sell-ID is Required")
      }else if(isEmpty(VatTax)){
        errorToast("VatTax is Required")
      }else if(isEmpty(OtherCost)){
        errorToast("OtherCost is Required")
      }else if(isEmpty(Discount)){
        errorToast("Discount is Required")
      }else if(isEmpty(GrandTotal)){
        errorToast("GrandTotal is Required")
      }else if(isEmpty(ProductID)){
        errorToast("ProductID is Required")
      }else if(isEmpty(Quantity)){
        errorToast("Quantity is Required")
      }else if(isEmpty(Price)){
        errorToast("Price is Required")
      }else if(isEmpty(Total)){
        errorToast("Total is Required")
      }else if(isEmpty(Note)){
        errorToast("Note is Required")
      } else{
        createSell(CustomerID,SellID,VatTax,OtherCost,Discount,GrandTotal,ProductID,Quantity,Price,Total,Note)
        .then((result)=>{
            if(result){
                successToast("Sell Create success")
            } else{
                errorToast("Sell Create Fail")
            }
        })
      }
    }
    return (
        <div>
            <div className="container">
                <p className="text-center mt-2">ADD NEW SELL</p>
                <div className="row mx-5">
                    <div className="col-md-6">
                        <label>CustomerID</label>
                        <input ref={(input)=>customerID=input} type="text" className="form-control" />
                    </div>
                    <div className="col-md-6">
                        <label>SellID</label>
                        <input ref={(input)=>sellID=input} type="text" className="form-control" />
                    </div>
                    <div className="col-md-6">
                        <label>VatTax</label>
                        <input onChange={(e)=>setvatTax(parseInt(e.target.value))} ref={(input)=>vatTax=input} type="text" className="form-control" />
                    </div>
                    <div className="col-md-6">
                        <label>Other-Cost</label>
                        <input onChange={(e)=>setOtherCost(parseInt(e.target.value))} ref={(input)=>otherCost=input} type="text" className="form-control" />
                    </div>
                    <div className="col-md-6">
                        <label>Discount</label>
                        <input onChange={(e)=>setDiscount(parseInt(e.target.value))} ref={(input)=>discount=input} type="text" className="form-control" />
                    </div>
                    
                    <div className="col-md-6">
                        <label>ProductID</label>
                        <input ref={(input)=>productID=input} type="text" className="form-control" />
                    </div>
                    <div className="col-md-6">
                        <label>Price</label>
                        <input onChange={(e)=>setProductPrice(parseInt(e.target.value))} ref={(input)=>price=input} type="text" className="form-control" />
                    </div> 
                    <div className="col-md-6">
                        <label>quantity</label>
                        <input defaultValue={1} min={1} onChange={(e)=>setQuantity(parseInt(e.target.value))} ref={(input)=>Qty=input} type="number" className="form-control" />
                    </div>
                    
                    <div className="col-md-6">
                        <label>Total Product Price</label>
                        <input value={totalProductPrice} ref={(input)=>total=input} type="text" className="form-control" />
                    </div>
                    <div className="col-md-6">
                        <label>GrandTotal</label>
                        <input value={GrandTotal} ref={(input)=>grandTotal=input} type="text" className="form-control" />
                    </div>
                    <div className="col-md-12">
                        <label>Note</label>
                        <input ref={(input)=>note=input} type="text" className="form-control" />
                    </div>                
                    <div className="col-md-6 mx-auto mt-4">
                       <button onClick={handleAddSell} className="btn btn-primary w-100">Save</button>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default AddSell;