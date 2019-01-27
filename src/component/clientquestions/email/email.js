import React, { Component } from 'react';

class Email extends Component{
    render(){
        return(
            <div className="each-ip-div sidebyside-div email-div">
                <div className="ip-label heading-style">
                    <span>Email</span>
                    <span className="required">*</span>
                </div>
                <div className="ip-div-style">
                    <input className="ip-style full-width" type="text" name="email" placeholder="Email Address"></input>
                </div>
            </div>
        )
    }
}
export default Email;