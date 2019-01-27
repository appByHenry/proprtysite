import React, { Component } from 'react';

class School extends Component{
    render(){
        return(
            <div className="each-ip-div sidebyside-div">
                <div className="ip-label heading-style">School Preference</div>
                <div className="ip-div-style">
                    <input className="ip-style general-txt full-width" type="text" name="phone" placeholder="School Preference"></input>
                </div>
            </div>
        )
    }
}
export default School;