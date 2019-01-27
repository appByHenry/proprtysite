import React, { Component } from 'react';

class LotSize extends Component {
    render(){
        return(
            <div className="each-ip-div sidebyside-div">
                <div className="ip-label heading-style">
                    <span>Lot Size Preference</span>
                    <span className="required">*</span>
                </div>
                <div className="ip-div-style">
                    <div className=" stack">
                        <input type="checkbox"  value="5000" />
                        <div className="chk-row">
                            <label className="lbl-spacing">Under 5000 Sq. Ft</label>
                        </div>

                    </div>
                    <div className=" stack left-margin">
                        <input type="checkbox"  value="500010000" />
                        <div className="chk-row">
                            <label className="lbl-spacing"> 5000 - 10000 Sq. Ft</label>
                        </div>

                    </div>
                    <div className="left-margin stack">
                        <input type="checkbox"  value="10000" />
                        <div className="chk-row">
                            <label className="lbl-spacing">Greater Than 10000 Sq. Ft</label>
                        </div>

                    </div>

                    <div className="always-stack stack left-margin">
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

export default LotSize;