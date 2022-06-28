import React, { useEffect, useState } from 'react';
import { deleteExpenseType, readExpenseTypes } from '../../apiServices/allApi';
import CreateExpenseModal from './CreateExpenseModal';
import Swal from 'sweetalert2';
const Expense = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [expenseTypes, setExpenseType]=useState([]);
    useEffect(()=>{
        readExpenseTypes()
        .then((result)=>{
            setExpenseType(result)
        })
    },[]);

    const DeleteExpenseType=(id)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        },   
        ).then((result) => {
           
            if (result.isConfirmed) {
                deleteExpenseType(id)
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
                setExpenseType(expenseTypes => {
                    const filteredNotes = expenseTypes.filter((expense) => {
                        return expense.TypeID !== id;
                    });
                    return [...filteredNotes];
                });
            }
        })
    }
    return (
        <div>
           <div className="create mx-3 mt-2">
                <div className="h3"><h5>Expense</h5></div>
                <button onClick={handleShow} className="btn btn-primary">New Expense Type</button>
            </div>
            <CreateExpenseModal show={show} handleClose={handleClose} handleShow={handleShow}/>
            <div className="expenseTypeList mt-2">
                <h6 className="text-center">EXPENSE TYPES</h6>
                <div className="container table-responsive">
                    <table className="table">
                        <thead>
                            <tr className="text-center">
                                <th>Expense Type Name</th>
                                <th>Type ID</th>
                                <th>Total Amount</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            {
                                expenseTypes.map((item, i) => {
                                    return (
                                        <tr key={item.TypeID}>
                                            <td >{item.Name}</td>
                                            <td>{item.TypeID}</td>
                                            <td>{item.amountOfExpense}</td>
                                            <td>
                                                <button onClick={()=>DeleteExpenseType(item.TypeID)} className="btn btn-danger  mx-1">Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Expense;<h1>This is expense</h1>