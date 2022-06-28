import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { readExpenseById, readExpenseTypes, updateExpenseList } from '../../apiServices/allApi';
import { errorToast, successToast } from '../../helper/validationHelper';

const ExpenseUpdate = () => {
    const { expenseID } = useParams();
    let amount, note = useRef();
    const [expenseType, setExpenseType] = useState([]);
    const [selectedType, setSelectedType] = useState(0);
    
    useEffect(() => {
        readExpenseTypes()
            .then((result) => {
                setExpenseType(result)
            })

        readExpenseById(expenseID)
            .then((result) => {
                amount.value = result.Amount;
                note.value = result.Note
            })
    }, []);

    // const handleUpdateExpense = (expenseID)=>{
    //     const UpdatedAmount = amount.value;
    //     const upDatedNote = note.value;
    //     updateExpenseList(expenseID,selectedType,UpdatedAmount,upDatedNote)
    //     .then((result)=>{
    //         if(result){
    //             successToast("EDit success")
    //         } else{
    //             errorToast("Edti failed")
    //         }
    //     })
    // }
    return (
        <div>
            <div className="col-md-6 mx-auto mt-5">
                <h5 className="text-center">Edit your expense</h5>
                <h5>Not Completed</h5>
                <div>
                    <div className="input-group mb-3 p-2">
                        <select onChange={(e) => setSelectedType(e.target.value)} className="custom-select form-control" id="inputGroupSelect02">
                            <option hidden >Choose expense type...</option>
                            {
                                expenseType.map((item, index) => {
                                    return (
                                        <option key={item.TypeID} value={item.TypeID}>{item.Name}</option>
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
                        <input ref={(input) => amount = input} type="text" className="form-control" />
                    </div>
                    <div className=" p-2">
                        <label>Note</label>
                        <textarea ref={(input) => note = input} className="form-control" rows="5"></textarea>
                    </div>
                    <div className="p-2">
                        <button className='btn btn-primary w-100'>Save</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExpenseUpdate; <h1>Expense Update</h1>