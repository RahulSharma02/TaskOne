import React from "react";

export default function Delete({delData}) {
  return (
    <>
      <button type="button" className="btn btn-outline-danger m-3" onClick ={delData}>Delete</button>
     
    </>
  );
}
