import React, { useState, useEffect } from 'react';
import Delete from './Delete';
import Addfile from './Addfile';
import Search from './Search';

const Table = () => {
  const [localData, setLocalData] = useState([]);
  // const [checkedBox, setCheckedBox] = useState([]);
  // const [sort, setSort] = useState();
  const [searchData, setSearchData] = useState([]);
  // fetching data from local storage
  // setting localstorage data to a hook
  useEffect(() => {
    const superh_data = JSON.parse(localStorage.getItem('formData'));

    // console.log("data",superh_data)
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
  }, [])




  // function to be passed to delete onclick

  let arrayDel = [];
  const delClick = () => {
    localData.map((data) => (
      data.select && arrayDel.push(data.id)
    )

    );

    const filtered = localData.filter(item => arrayDel.find(id => id !== item.id))
    console.log("Filtered", filtered)
    localStorage.setItem('formData', JSON.stringify(filtered));
    setLocalData(filtered)
    console.log("im del array", arrayDel)

   

  }

  // function to sort the firstname


  

  // function to sort the firstname


  const sorting = () => {

    localData.map((data) => {
      console.log('localdata', localData)
      var res = [...localData].sort((a, b) => {

        const val1 = a.fname.toUpperCase();
        const val2 = b.fname.toUpperCase();
        console.log('fnaema', a.fname)
        console.log('fnaemb', b.fname)
        if (val1 < val2) {
          return -1;
        }
        
          return 1;
        


        // return 0;
        // setLocalData(res)
        // //  const fres = res.sort((a,b)=> a<b)
        // console.log('im res', res)
        // //  console.log('im fres',fres)
      }
      )
      return setLocalData(res)
    })
  }


  // function to test sorting
  const sorting1 = () => {
    console.log(localData)
    const sort = localData.sort((a, b) => a < b)


    console.log('m sort', sort)
  }

  const getData = (query) => {
    // data from previous file state retrieved from local storage

    const filteredData = localData.filter(element => {
      console.log(element, "===", query)
      return element.fname.toLowerCase().includes(query.toLowerCase())

    })

    setSearchData(filteredData)

  }

  const getTableBody = () => {
    const toRender= searchData.length > 0 ? [...searchData] : localData ? [...localData] : [];
    return toRender.map((d, index) =>  (
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
      <Delete delData={delClick} />
      <Addfile />
      <Search getData={getData} />
      <table className="table table-striped">
        <thead className="bg-dark text-light">
          <tr>
            <th scope="col"></th>
            <th scope="col">#</th>
            <th scope="col" onClick={sorting}>Firstname</th>
            <th scope="col" onClick={sorting1}>Lastname</th>
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
