import React from 'react'
import Productcard from './Productcard'
import Orderdata from './Orderdata'

const Order = () => {
    return (
        <div className="container-fluid mb-5  ">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row ">
                        {
                       
                            Orderdata.map((val, ind) => {
                                return (
                                    <Productcard
                                        Pro_name={val.Pro_name}
                                        Color={val.Color}
                                        Quantity={val.Quantity}
                                        Price={val.Price}
                                        Status={val.Status}
                                        Delivery_date={val.Delivery_date}
                                    />
                                )
                            })
                     
                            
                        }
                        
                    </div>
                </div>
            </div>
         </div>
    )
}
export default Order;
