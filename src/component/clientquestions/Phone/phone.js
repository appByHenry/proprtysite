import React, { Component } from 'react';

class Phone extends Component{
    render(){
        return(
            <div className="each-ip-div sidebyside-div">
                <div className="ip-label heading-style">Phone</div>
                <div className="ip-div-style">
                    <input className="ip-style full-width" type="text" name="phone" placeholder="Phone Number"></input>
                </div>
            </div>
        )
    }
}
export default Phone;