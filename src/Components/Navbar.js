import React from 'react'

const Navbar=()=> {
    return (
        <div className="container-fluid">
        <nav className="nav">
            <div className="h5 text-secondary d-none d-sm-block">Orders</div>
            <div className="main">
                <div className="form-group has-search">
                    <span className="fa fa-search form-control-feedback"></span>
                    <input type="text" className="form-control" placeholder="Search Order"/>
                </div>
            </div>
        </nav>
        <div className="row status">
            <div className="col highlight extra-pad-space"><span className="status-active pl-1 pr-0">All</span></div>
            <div className="col text-secondary extra-pad-space">Pending</div>
            <div className="col text-secondary extra-pad-space">Shipped</div>
            <div className="col text-secondary">Delivered</div>
            <div className="col text-secondary d-none d-sm-block">Return</div>
        </div>
       </div>
    )
}
export default Navbar;
