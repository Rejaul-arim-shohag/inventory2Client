import React, { useRef, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { createExpenseType } from '../../apiServices/allApi';
import { errorToast, successToast } from '../../helper/validationHelper';

const CreateExpenseModal = ({show,handleClose}) => {
    let navigate = useNavigate();
    let expenseType = useRef();
    const handleSaveExpenseType=()=>{
        createExpenseType(expenseType.value)
        .then((result)=>{
            if(result==true){
                successToast("Expense-type Create Success")
               window.location.reload(false)
            } else{
                errorToast("Expense-type create fail")
            }
        })
        // handleClose()
    }
    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                    <h6>Expense Type</h6>
                    <input ref={(input)=>expenseType=input} className="form-control" type="text" />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button onClick={handleSaveExpenseType} variant="primary">
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default CreateExpenseModal;