import React, { useEffect, useState } from 'react';
import { deleteRetrun, readReturn } from '../../apiServices/allApi';
import Swal from 'sweetalert2';

const Return = () => {
    const [returns, setReturn]=useState([]);
    useEffect(()=>{
        readReturn()
        .then((result)=>{
            setReturn(result)
        })
    },[])

    const handleDelete=(id)=>{
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
                deleteRetrun(id)
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
                setReturn(returns => {
                    const filteredNotes = returns.filter((item)=>{
                        return item.ReturnID !== id;
                    });
                    return [...filteredNotes];
                });
            }
        })
    }
    return (
        <div>
           <div className="container table-responsive">
           <table className="table">
                            <thead>
                                <tr className="text-center">
                                    <th>CustomerName</th>
                                    <th>CustomerID</th>
                                    <th>Phone</th>
                                   
                                    <th>ReturnID</th>
                                    <th>GrandTotal</th>
                                    <th>Address</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody className="text-center">
                                {
                                    returns.map((item, i) => {
                                        return (
                                            <tr key={item.ReturnID}>
                                                <td className="text-left">{item.CustomerName}</td>
                                                <td>{item.CustomerID}</td>
                                                <td>{item.CustomerPhone}</td>
                                                
                                                <td>{item.ReturnID}</td>
                                                <td>{item.GrandTotal} TK</td> 
                                                <td>{item.CustomerAddress}</td>                                              
                                                <td> 
                                                   <button onClick={()=>handleDelete(item.ReturnID)} className="btn btn-danger">Delete</button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
           </div>
        </div>
    );
};

export default Return;