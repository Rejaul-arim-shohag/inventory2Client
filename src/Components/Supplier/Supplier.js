import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { DeleteSupplier, ReadSuppliers } from '../../apiServices/allApi';
import Swal from 'sweetalert2';
const Supplier = () => {
    const navigate = useNavigate()
    const handleNavigateToCreate = () => {
        navigate("/suppliers/new")
    };
    const [suppliers, setSupplier] = useState([])
    useEffect(() => {
        ReadSuppliers()
            .then((result) => {
                setSupplier(result);
            })
    }, [])
    const handleDeleteSupplier = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        },
        
        ).then((result) => {
            if (result.isConfirmed) {
                DeleteSupplier(id)
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
                setSupplier(suppliers => {
                    const filteredNotes = suppliers.filter((supplier) => {
                        return supplier.SupplierID !== id;
                    });
                    return [...filteredNotes];
                });
            }
        })
    }
    const handleNavigateToUpdate=(id)=>{
        navigate("/suppliers/edit/"+id)
    }
    return (
        <div>
            <div className="create mx-3 mt-2">
                <div className="h3">Supplier</div>
                <button onClick={handleNavigateToCreate} className="btn btn-primary">New Supplier</button>
            </div>
            <div className="supplierList">
                <h2 className="text-center">suppliers List</h2>
                <div className="container table-responsive">
                    <table className="table">
                        <thead>
                            <tr className="text-center">
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Address</th>
                                <th>Purchase Amount</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            {
                                suppliers.map((item, i) => {
                                    return (
                                        <tr key={item.SupplierID}>
                                            <td >{item.Name}</td>
                                            <td>{item.Phone}</td>
                                            <td>{item.Address}</td>
                                            <td>{item.totalPurchase}</td>
                                            <td>
                                                <button onClick={()=>handleDeleteSupplier(item.SupplierID)} className="btn btn-danger  mx-1">Delete</button>
                                                <button onClick={()=>handleNavigateToUpdate(item.SupplierID)} className="btn btn-primary mx-1">Edit</button>
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

export default Supplier;