import React, { useState, useEffect } from "react";
import Modal from 'react-modal';
import '../App.css';

export default function Addfile({ localData, setLocalData }) {
    const [openModal, setOpenModal] = useState(false);
    const [delArray, setDelArray] = useState([]);

    useEffect(() => {
        const del = localData.filter(obj => obj.select)
        console.log("Del", del)
        setDelArray(del)
    }, [localData])

    // function to delete 
    const delClick = () => {
        let filtered = localData.filter((data) => !data.select);
        localStorage.setItem('formData', JSON.stringify(filtered));
        setLocalData(filtered)
        setOpenModal(false)

    }
    return (
        <>
            <button
                type="button"
                disabled={delArray.length === 0}
                className="btn btn-outline-danger m-3"
                onClick={() => { setOpenModal(true) }}
            >Delete</button>

            <Modal isOpen={openModal} ariaHideApp={false} className="Modal">
                <h2>Are You Sure?</h2>

                <form>

                    <button type="button" className="btn btn-outline-danger m-3"
                        onClick={delClick}
                    >Delete</button>

                    <button type="submit" className="btn btn-outline-info m-3"
                        onClick={() => { setOpenModal(false) }}
                    >No</button>


                </form>
            </Modal>
        </>
    );
}
