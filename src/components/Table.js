import React, { useState, useEffect } from 'react';
import Addfile from './Addfile';
import Search from './Search';

const Table = () => {
  const [localData, setLocalData] = useState([]);
  const [searchData, setSearchData] = useState([]);

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

  // function to be passed to delete onclick

  const delClick = () => {
    let filtered = localData.filter((data) => !data.select);
    localStorage.setItem('formData', JSON.stringify(filtered));
    setLocalData(filtered)
  }

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

  const getData = (query) => {
    const filteredData = localData.filter(element => {
      return element.fname.toLowerCase().includes(query.toLowerCase())
    })
    setSearchData(filteredData)
  }

  const getTableBody = () => {
    const toRender = searchData.length > 0 ? [...searchData] : localData ? [...localData] : [];
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
      <button
        type="button"
        disabled={localData.length === 0}
        className="btn btn-outline-danger m-3"
        onClick={delClick}
      >Delete</button>
      <Addfile setLocalData={setLocalData} />
      <Search getData={getData} />
      <table className="table table-striped">
        <thead className="bg-dark text-light">
          <tr>
            <th scope="col"></th>
            <th scope="col">#</th>
            <th scope="col" onClick={() => sorting("fname")}>Firstname</th>
            <th scope="col" onClick={() => sorting("lname")}>Lastname</th>
            <th scope="col">SuperheroName</th>
            <th scope="col">Email</th>
            <th scope="col">Gender</th>
            <th scope="col">Age</th>
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
