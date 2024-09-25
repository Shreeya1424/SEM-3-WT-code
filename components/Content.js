import React from "react";

function Content() {
  return (
    <>
      <div class="card" style={{ width: "18rem;" }}>

        {/* <img src="..." class="card-img-top" alt="..." /> */}

        <div class="card-body">
          <h1 class="card-title"> CONTENT </h1>
          <p class="card-text"><Outlet/></p>
        </div>
        
      </div>
    </>
  )
}

export default Content;