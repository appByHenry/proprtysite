import React, { Component } from 'react';

class PriceRange extends Component{
    render(){
        return(
            <div className="each-ip-div">
                <div className="ip-label heading-style">
                    <span>Price Range</span>
                    <span className="required">*</span>
                </div>
                <div className="ip-div-style">
                    <input className="ip-style half-width" type="text" name="price" placeholder="Aprox Price Range"></input>
                </div>
            </div>
        )
    }
}
export default PriceRange;