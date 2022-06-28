import React, { useEffect, useState } from 'react';
import { deleteSell, readSell } from '../../apiServices/allApi';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const SellList = () => {
    const [sells, setSells] = useState([]);
    let navigate = useNavigate()
    useEffect(() => {
        readSell()
            .then((result) => {
                setSells(result);
            })
    }, [])

    const handleDeleteSell = (SellID) => {
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
                deleteSell(SellID)
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )

                setSells(sells => {
                    const filteredNotes = sells.filter((sellsItem) => {
                        return sellsItem.SellID !== SellID;
                    });
                    return [...filteredNotes];
                });


            }
        })
    }
    const handleNavigateToDetail = (sellId) => {
        navigate("/sell/sellProduct/"+sellId)
    }
    return (
        <div>
            <div className="container table-responsive">
                <table className="table">
                    <thead>
                        <tr className="text-center">
                            <th>Customer</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>CustomerID</th>
                            <th>SellID</th>
                            <th>GrandTotal</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {
                            sells.map((item, i) => {
                                return (
                                    <tr key={item.SellID}>
                                        <td className="text-left">{item.CustomerName}</td>
                                        <td>{item.CustomerEmail}</td>
                                        <td>{item.CustomerPhone}</td>
                                        <td>{item.CustomerID}</td>
                                        <td>{item.SellID}</td>
                                        <td>{item.GrandTotal} TK</td>
                                        <td>
                                            {/* <button onClick={() => handleNavigateToDetail(item.SellID)} className="btn btn-primary mx-1">Detail</button> */}
                                            <button onClick={() => handleDeleteSell(item.SellID)} className="btn btn-danger mx-1">Delete</button>
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

export default SellList;