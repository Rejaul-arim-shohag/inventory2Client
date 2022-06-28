import React, { useEffect, useRef, useState } from 'react';
import { createExpense, readExpenseTypes } from '../../apiServices/allApi';
import { errorToast, isEmpty, successToast } from '../../helper/validationHelper';

const ExpenseListCreate = () => {
    const [expenseType, setExpenseType] = useState([]);
    const [selectedType, setSelectedType]=useState(0);
   let expenseAmount, expenseNote = useRef();
    useEffect(() => {
        readExpenseTypes()
            .then((result) => {
                setExpenseType(result)
            })
    }, [])

    const handleSaveExpense=()=>{
        console.log(selectedType, expenseAmount.value, expenseNote.value)
        if(isEmpty(selectedType)){
            errorToast("Type is required")
        } else if(isEmpty(expenseAmount.value)){
            errorToast("Expense amount is required")
        } else{
            createExpense(selectedType,expenseAmount.value, expenseNote.value)
            .then((result)=>{
                if(result){
                    successToast("Expense Create Success")
                } else{
                    errorToast("Expense Create Fail")
                }
            })
        }
    }
    return (
        <div className="container">
            <div className="col-md-6 mx-auto mt-5">
                <h5 className="text-center">create your expense</h5>
                <div> 
                    <div className="input-group mb-3 p-2">
                        <select onChange={(e)=>setSelectedType(e.target.value)} className="custom-select form-control" id="inputGroupSelect02">
                        <option hidden >Choose expense type...</option>
                            {
                                expenseType.map((item, index) => {
                                   return(
                                    <option value={item.TypeID}>{item.Name}</option>
                                   )
                                    
                                })
                            }
                           
                        </select>
                        <div className="input-group-append">
                            <label className="input-group-text" htmlFor="inputGroupSelect02">Select</label>
                        </div>
                    </div>
                    <div className="p-2">
                        <label>Expense Amount</label>
                        <input ref={(input)=>expenseAmount=input} type="text" className="form-control" />
                    </div>
                    <div className=" p-2">
                        <label>Note</label>
                        <textarea ref={(input)=>expenseNote=input} className="form-control" rows="5"></textarea>
                    </div>
                    <div className="p-2">
                        <button onClick={handleSaveExpense} className='btn btn-primary w-100'>Save</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExpenseListCreate;