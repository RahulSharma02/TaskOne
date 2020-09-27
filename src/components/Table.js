import React, { useState, useEffect } from 'react';
import '../App.css';
import Addfile from './Addfile';
import Search from './Search';
import DeleteModal from './DeleteModal';

const Table = () => {
  const [localData, setLocalData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  // setting localstorage data to a hook
  useEffect(() => {
    const superh_data = JSON.parse(localStorage.getItem('formData'));
    if (superh_data) {
      setLocalData(superh_data.map(d => {
        return {
          select: d.select,
          id: d.id,
          fname: d.fname,
          lname: d.lname,
          sname: d.sname,
          email: d.email,
          gender: d.gender,
          age: d.age
        }
      })
      )
    }
  }, [])


  // function to sort the firstname
  const sorting = (key) => {
    const newArr = [...localData].sort((a, b) => {
      const val1 = a[key].toUpperCase();
      const val2 = b[key].toUpperCase();
      if (val1 < val2) {
        return -1;
      }
      return 1;
    })
    setLocalData(newArr)

  }
  // function to search data

  const getData = (query) => {
    setSearchQuery(query)
    const keys = [
      "fname",
      "lname",
      "sname",
      "email",
      "gender",
      "age",
    ]
    const filteredData = localData.map(element => {
      const data = keys.find(key => {
        return element[key].toLowerCase().includes(query.toLowerCase())
      })

      return data && element
    })

    const filData = filteredData.filter(d => d)
    setSearchData(filData)
  }

  const getTableBody = () => {
    const toRender = searchQuery.length > 0 ? [...searchData] : localData ? [...localData] : [];
    if (searchQuery.length > 0 && searchData.length === 0) {
      return <p>No data Found!</p>
    }
    return toRender.map((d, index) => (
      <tr key={index}>
        <td>
          <input type="checkbox" name="name1"
            id={index} checked={d.select}

            onChange={(event) => {
              let checked = event.target.checked;
              setLocalData(localData.map(data => {
                if (d.id === data.id) {
                  d.select = checked;
                }
                return data;
              }))
            }} />&nbsp;
         </td>
        <th scope="row" key={index}>{index + 1}</th>
        <td>{d.fname}</td>
        <td>{d.lname}</td>
        <td>{d.sname}</td>
        <td>{d.email}</td>
        <td>{d.gender}</td>
        <td>{d.age}</td>
      </tr>
    ))
  }

  return (
    <div className="container-fluid">
      <DeleteModal localData={localData} setLocalData={setLocalData} />
      <Addfile setLocalData={setLocalData} />
      <Search getData={getData} />
      <table className="table table-striped">
        <thead className="bg-dark text-light">
          <tr className="cursor">
            <th scope="col"></th>
            <th scope="col">#</th>
            <th scope="col" onClick={() => sorting("fname")}>Firstname</th>
            <th scope="col" onClick={() => sorting("lname")}>Lastname</th>
            <th scope="col" onClick={() => sorting("sname")}>SuperheroName</th>
            <th scope="col" onClick={() => sorting("email")}>Email</th>
            <th scope="col" onClick={() => sorting("gender")}>Gender</th>
            <th scope="col" onClick={() => sorting("age")}>Age</th>
          </tr>
        </thead>
        <tbody>
          {getTableBody()}
        </tbody>
      </table>
    </div>
  )
}

export default Table;
