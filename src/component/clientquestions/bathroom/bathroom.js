import React, { Component } from 'react';

class Bathroom extends Component {
    render(){
        return(
            <div className="each-ip-div sidebyside-div">
                <div className="ip-label heading-style">
                    <span>Bathrooms</span>
                    <span className="required">*</span>
                </div>
                <div className="ip-div-style">
                    <div className="inline-display stack-mobile">
                        <input type="checkbox"  value="2" />
                        <div className="chk-row">
                            <label className="lbl-spacing">2+</label>
                        </div>

                    </div>
                    <div className="inline-display left-margin stack-mobile">
                        <input type="checkbox"  value="3" />
                        <div className="chk-row">
                            <label className="lbl-spacing"> 3+</label>
                        </div>

                    </div>

                    <div className=" left-margin stack-mobile always-stack">
                        <input type="checkbox"  value="other" />
                        <div className="chk-row">
                            <label className="lbl-spacing other-label"> Other </label>
                        </div>
                        <input className="ip-style left-margin other" type="text" name="other" placeholder="Other" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Bathroom;