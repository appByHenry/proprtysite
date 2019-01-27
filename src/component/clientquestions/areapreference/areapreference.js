import React, { Component } from 'react';

class AreaSize extends Component {
    render(){
        return(
            <div className="each-ip-div sidebyside-div">
                <div className="ip-label heading-style">
                    <span>Square Footage Preference</span>
                    <span className="required">*</span>
                </div>
                <div className="ip-div-style">
                    <div className=" stack">
                        <input type="checkbox"  value="2" />
                        <div className="chk-row">
                            <label className="lbl-spacing">Under 2000 Sq. Ft</label>
                        </div>

                    </div>
                    <div className=" left-margin stack">
                        <input type="checkbox"  value="2-3" />
                        <div className="chk-row">
                            <label className="lbl-spacing"> 2000 - 5000 Sq. Ft</label>
                        </div>

                    </div>
                    <div className=" left-margin stack">
                        <input type="checkbox"  value="25-3" />
                        <div className="chk-row">
                            <label className="lbl-spacing">2500 - 3000 Sq. Ft</label>
                        </div>

                    </div>
                    <div className=" left-margin stack">
                        <input type="checkbox"  value="3" />
                        <div className="chk-row">
                            <label className="lbl-spacing"> 3000+ Sq. Ft</label>
                        </div>

                    </div>
                    <div className=" left-margin stack">
                        <input type="checkbox"  value="nice2have" />
                        <div className="chk-row">
                            <label className="lbl-spacing"> Nice To Have</label>
                        </div>

                    </div>
                    <div className=" left-margin stack always-stack">
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

export default AreaSize;