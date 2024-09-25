import React from "react";
import { Outlet } from "react-router-dom";

function Layout(){
    return(
<>
<div className="container">
    <div className="row">
        <div className="col-2 border border-primary">
            Logo
        </div>
        <div className="col border border-primary">
           Menu
        </div>
    </div>

<div className="row">
    <div className="col-3 border border-primary">
        Sidebar
    </div>
    <div className="col border border-primary">
        {/* <link to="/Logo">logo</link>&nbps;
        <link to="/Menu">menu</link>&nbps;
        <link to="/Separator">seprator</link>&nbps; */}
    <Outlet />
    </div>
</div>


<div className="row">
    <div className="col border border-primary">Footer</div>
</div>



</div>
</>
    )

}

export default Layout;