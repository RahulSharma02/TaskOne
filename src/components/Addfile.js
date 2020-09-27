import React, { useState } from "react";
import Modal from 'react-modal';
import validate from '../validate';
import '../components/addFile.css'


export default function Addfile({ setLocalData }) {
  const [openModal, setOpenModal] = useState(false);
  const [errors, setErrors] = useState({});

  const id = Math.random();


  //  state for forms

  const [inputData, setInputData] = useState({

    id: id,
    select: false,
    fname: "",
    lname: "",
    sname: "",
    email: "",
    gender: "Other",
    age: ""

  });



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

    const valData = validate(inputData)

    setErrors(valData)
    //    setStoreData(inputData)
    if (Object.keys(valData).length === 0) {


      localData();
      setInputData({
        id: id,
        select: false,
        fname: "",
        lname: "",
        sname: "",
        email: "",
        gender: "Other",
        age: ""

      })
    }

  }

  //  pushing data to local storage

  const localData = () => {
    const formData = localStorage.getItem("formData");

    if (!formData) {
      const newData = [];
      newData.push(inputData)
      localStorage.setItem("formData", JSON.stringify(newData))
    } else {
      const updatedData = JSON.parse(formData);
      updatedData.push(inputData);

      localStorage.setItem("formData", JSON.stringify(updatedData))
    }
    setOpenModal(false)

    const localSdata = JSON.parse(localStorage.getItem('formData'));
    setLocalData(localSdata)

  }
  const { fname, lname, email, sname, gender, age } = inputData
  return (
    <>
      <button type="button" className="btn btn-outline-info m-3"
        onClick={() => { setOpenModal(true) }}>Add Record</button>

      <Modal isOpen={openModal} ariaHideApp={false}>

        <h2>Enter Data</h2>

        <form onSubmit={onDataSubmit} className="form-inputs">
          <div className="md-form mb-5">
            <label data-error="wrong" data-success="right" htmlFor="Form-fname">FirstName</label>
            <input type="text" id="Form-fname" className="form-control validate" name="fname" required
              value={fname} onChange={onInpChange} />
            {errors.fname && <p>{errors.fname}</p>}
          </div>

          <div className="md-form mb-5">
            <label data-error="wrong" data-success="right" htmlFor="Form-lname">LastName</label>
            <input type="text" id="Form-lname" className="form-control validate" name="lname" required
              value={lname} onChange={onInpChange} />
            {errors.lname && <p>{errors.lname}</p>}

          </div>

          <div className="md-form mb-5">
            <label data-error="wrong" data-success="right" htmlFor="Form-sname">SuperheroName</label>
            <input type="text" id="Form-sname" className="form-control validate" name="sname" required
              value={sname} onChange={onInpChange} />
            {errors.sname && <p>{errors.sname}</p>}
          </div>

          <div className="md-form mb-5">
            <label data-error="wrong" data-success="right" htmlFor="Form-email">Email</label>
            <input type="Email" id="Form-email" className="form-control validate" name="email" required
              value={email} onChange={onInpChange} />
            {errors.email && <p>{errors.email}</p>}
          </div>


          <div className="md-form mb-5">
            <label>
              Gender :
            </label>

            <select value={gender} onChange={onInpChange} className="form-control validate" required
              name="gender" id="Form-gender" >

              <option value="Other">Other</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>

            </select>


          </div>


          <div className="md-form mb-5">
            <label data-error="wrong" data-success="right" htmlFor="Form-age">Age</label>
            <input type="number" id="Form-age" className="form-control validate" name="age" required
              value={age} onChange={onInpChange} />
            {errors.age && <p>{errors.age}</p>}
          </div>

          <button type="submit" className="btn btn-outline-success m-3"
          >Submit</button>


        </form>
      </Modal>
    </>
  );
}
