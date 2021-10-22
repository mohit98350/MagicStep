import React from 'react'
import { FaSistrix } from "react-icons/fa";

const Navbar = () => {

    const setActiveLink = e => {
        // const links = document.getElementsByTagName("a");
        const links = document.getElementsByClassName("active");


        Array.from(links).forEach(el => el.classList.remove("active"));
        e.target.classList.add("active");
    };

    return (
        <div className="container-fluid">
            <nav className="nav">
                <div className=" h5 d-none d-sm-block">Orders</div>

                <div className="main">
                    <div className="form-group has-search">
                        <span className="form-control-feedback"><FaSistrix size={20} /></span>
                        <input type="text" className="form-control" placeholder="Search Order" />
                    </div>
                </div>
            </nav>
            {/* <div className="row status">
            <div className="col highlight extra-pad-space "><span className="status-active pl-1 pr-0">All</span></div>
              <div className="col extra-pad-space">Pending</div> 
            <div className="col extra-pad-space">Shipped</div>
            <div className="col extra-pad-space">Delivered</div>
            <div className="col extra-pad-space">Patched</div>
            <div className="col extra-pad-space">On the Way</div>
            <div className="col extra-pad-space d-none d-sm-block">Return</div>

          
             

        </div> */}
            <div class="scrollmenu ">
                <ul >
                    <li  ><a href="#" ><span className="active pl-1 pr-0" onClick={setActiveLink}>All</span></a></li>
                    <li><a href="#" ><span onClick={setActiveLink}>Shipped</span></a></li>
                    <li><a href="#"><span onClick={setActiveLink}>Delivered</span></a></li>
                    <li><a href="#"><span onClick={setActiveLink}>Return</span></a></li>
                </ul>
            </div>


        </div>
    )
}
export default Navbar;
