import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteExpense, readExpense } from '../../apiServices/allApi';
import Swal from 'sweetalert2';

const ExpenseList = () => {
    let navigate = useNavigate();
    const [expenses, setExpense] = useState([])
    const handleNavigateToCreateExpense=()=>{
        navigate("/expenseCreate")
    }
    const handleNavigateToUpdate=(id)=>{
        navigate("/expenseEdit/"+id)
    }
    useEffect(()=>{
        readExpense()
        .then((result)=>{
            setExpense(result)
        })
    }, [])
    const handleDeleteExpense=(expenseId)=>{
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
                deleteExpense(expenseId)
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
                setExpense(expenses => {
                    const filteredNotes = expenses.filter((expense) => {
                        return expense.ExpenseID !== expenseId;
                    });
                    return [...filteredNotes];
                });
            }
        })
    }
    return (
        <div>
            <div className="container p-3">
                <div className="create mx-3 mt-2">
                    <div className="h3">
                        <h5>EXPENSE</h5>
                    </div>
                    <button onClick={handleNavigateToCreateExpense} className="btn btn-primary">New Expense</button>
                </div>
                
                <div className="expenseTypeList mt-2">
                    <h6 className="text-center">ALL EXPENSES</h6>
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
                                    expenses.map((item, i) => {
                                        return (
                                            <tr key={item.ExpenseID}>
                                                <td >{item.Amount}</td>
                                                <td>{item.TypeID}</td>
                                                <td>{item.Note}</td>
                                                <td>
                                                    <button onClick={()=>handleDeleteExpense(item.ExpenseID)} className="btn btn-danger mx-1">Delete</button>
                                                    <button onClick={()=>handleNavigateToUpdate(item.ExpenseID)} className="btn btn-primary mx-1">Edit</button>
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
        </div>
    );
};

export default ExpenseList;