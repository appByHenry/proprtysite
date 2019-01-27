import React, { Component } from 'react';

class HomeDirection extends Component{
    render(){
        return(
            <div className="each-ip-div sidebyside-div">
                <div className="ip-label heading-style">Home Direction</div>
                <div className="ip-div-style">
                    <input className="ip-style general-txt full-width hd-margin" type="text" name="phone" placeholder="Home Direction"></input>
                </div>
            </div>
        )
    }
}
export default HomeDirection;