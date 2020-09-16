import React,{useState} from 'react';
import Delete from './Delete';
import Addfile from './Addfile';
import Search from './Search';

const Table = () => {
  const [localData,setLocalData] = useState();

  // fetching data from local storage
  const superh_data = JSON.parse(localStorage.getItem('formData'));
  console.log("data",superh_data)

  




  // function to be passed to delete onclick

  const delClick = () =>{
    localStorage.removeItem('formData');


  }

  const Click = (e) =>{
    const val = e.target.id;
console.log("im clicked" ,val)

  }


  return(
<div className ="container-fluid">
 <Delete delData ={delClick}/>
 <Addfile/>
 <Search/>
<table className="table table-striped">
  <thead className ="bg-dark text-light">
    <tr>
     <th scope="col"></th>
      <th scope="col">#</th>
      <th scope="col">Firstname</th>
      <th scope="col">Lastname</th>
      <th scope="col">SuperheroName</th>
      <th scope="col">Email</th>
      <th scope="col">Gender</th>
      <th scope="col">Age</th>
    </tr>
  </thead>
  <tbody>


    
   {superh_data.map((data,index) =>{
     return(
    <tr>
    <td><input type="checkbox" name="name1" onClick = {Click} id ={index}/>&nbsp;</td>
      <th scope="row">{index+1}</th>
    
      <td>{data.fname}</td>
      <td>{data.lname}</td>
      <td>{data.sname}</td>
      <td>{data.email}</td>
      <td>{data.gender}</td>
      <td>{data.age}</td>
    </tr>
     )
   })}
  </tbody>
</table>
</div> 
 )
}
export default Table;
