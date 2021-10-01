import React from 'react'

const Productcard = ({
    Pro_name,
    Color,
    Quantity,
    Price,
    Status,
    Delivery_date
}) => {
    return (
        <div>
            <div className="container-fluid">
                <div class="row card-view">
                        <div className="col-sm-12 col-md-12 ">
                            <div className=" card-display">
                                <div className="row">
                                    <div className="col-4">
                                        <img src="./img/71E5zB1qbIL 7.png" width="100px" height="100px" />
                                    </div>
                                    <div className="col-4 padi-cg">
                                        <div>{Pro_name}</div>
                                        <div className="text-secondary">{Color}</div>
                                        <div className="text-secondary">{Quantity}</div>
                                    </div>
                                    <div className="col-4">
                                        <div>{Price}</div>
                                        <div>{Price}</div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <div className="alert alert-danger" role="alert">
                                            {Status}
                                        </div>
                                    </div>
                                    <div className="col-6">{Delivery_date}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  


    )
}

export default Productcard
