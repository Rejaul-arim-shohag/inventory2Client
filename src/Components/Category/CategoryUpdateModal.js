import React, { useEffect, useState, useRef } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { readCategoryById, updateCategory } from '../../apiServices/allApi';
import { errorToast, isEmpty, successToast } from '../../helper/validationHelper';
const CategoryUpdateModal = (props) => {
    const { show, onClose, name, id } = props;
    console.log(name, id)
    let categoryName = useRef();
    let updatedCategory = useRef();
    // console.log(name)
    useEffect(()=>{
        readCategoryById(id)
        .then((result)=>{
            categoryName.value=result.data.data[0].Name;           
        })
    }, [])

    const handleUpdate = ()=>{
        const name = updatedCategory.value
        updateCategory(id, name)
        .then((result)=>{
            if(result){
                successToast("Category Update successfully")
            } else{
                errorToast("Category Update failed")
            }
        })

    }
    return (
        <div>
            <Modal show={show} onHide={onClose}>
                <Modal.Header closeButton>                   
                    <Modal.Title>update category name</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input ref={(input)=>updatedCategory=input} defaultValue={categoryName.value} className="form-control" type="text" name="" id="" />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={onClose}>
                        Close
                    </Button>
                    <Button onClick={handleUpdate} variant="primary"> 
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default CategoryUpdateModal;