import React, { useState } from "react";
import Modal from 'react-modal';
// import Dataentry from './Dataentry';

export default function Addfile({setLocalData) {
  const [openModal, setOpenModal] = useState(false);

  const id  = Math.random();


  //  state for forms

  const [inputData, setInputData] = useState({

    id:id,
    select:false,
    fname: "",
    lname: "",
    sname: "",
    email: "",
    gender: "",
    age: ""

  });

  // const [storeData, setStoreData] = useState();


  // array to be pushed into local storage

  // for handling Input values

  const onInpChange = (e) => {
    const { name, value } = e.target;

    setInputData((preValue) => {

      return {
        ...preValue,
        [name]: value,
      }
    })
  }

  //  for handling submit

  const onDataSubmit = (e) => {
    e.preventDefault();
    //    setStoreData(inputData)
    localData();
    setInputData({
      id:id,
      select:false,
      fname: "",
      lname: "",
      sname: "",
      email: "",
      gender: "",
      age: ""

    })
  }

  //  pushing data to local storage

  const localData = () => {
    const formData = localStorage.getItem("formData");
    console.log("Formdata", formData)
    if (!formData) {
      const newData = [];
      newData.push(inputData)
      localStorage.setItem("formData", JSON.stringify(newData))
    } else {
      const updatedData = JSON.parse(formData);
      updatedData.push(inputData);
      console.log("UpdatedData", updatedData)
      localStorage.setItem("formData", JSON.stringify(updatedData))
    }
    setOpenModal(false)
     const localSdata = JSON.parse(localStorage.getItem('formData')) ;
     setLocalData(localSdata)
  }

  // useEffect (()=>{
  //     localData();

  // },[storeData])




  return (
    <>
      <button type="button" className="btn btn-outline-info m-3"
        onClick={() => { setOpenModal(true) }}>Add Record</button>

      <Modal isOpen={openModal}>
        <h2>Enter Data</h2>

        <form onSubmit={onDataSubmit}>
          <div className="md-form mb-5">
            <input type="text" id="Form-fname" class="form-control validate" name="fname"
              value={inputData.fname} onChange={onInpChange} />
            <label data-error="wrong" data-success="right" htmlFor="Form-fname">FirstName</label>
          </div>

          <div className="md-form mb-5">
            <input type="text" id="Form-lname" class="form-control validate" name="lname"
              value={inputData.lname} onChange={onInpChange} />
            <label data-error="wrong" data-success="right" htmlFor="Form-lname">LastName</label>
          </div>

          <div className="md-form mb-5">
            <input type="text" id="Form-sname" class="form-control validate" name="sname"
              value={inputData.sname} onChange={onInpChange} />
            <label data-error="wrong" data-success="right" htmlFor="Form-sname">SuperheroName</label>
          </div>

          <div className="md-form mb-5">
            <input type="Email" id="Form-email" class="form-control validate" name="email"
              value={inputData.email} onChange={onInpChange} />
            <label data-error="wrong" data-success="right" htmlFor="Form-email">Email</label>
          </div>

          <div className="md-form mb-5">
            <input type="text" id="Form-gender" class="form-control validate" name="gender"
              value={inputData.gender} onChange={onInpChange} />
            <label data-error="wrong" data-success="right" htmlFor="Form-gender">Gender</label>
          </div>

          <div className="md-form mb-5">
            <input type="text" id="Form-age" class="form-control validate" name="age"
              value={inputData.age} onChange={onInpChange} />
            <label data-error="wrong" data-success="right" htmlFor="Form-age">Age</label>
          </div>

          <button type="submit" className="btn btn-outline-success m-3"
          >Submit</button>


        </form>
       
      </Modal>
    </>
  );
}
