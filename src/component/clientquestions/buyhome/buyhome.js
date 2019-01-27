import React, { Component } from 'react';

class BuyHome extends Component {
    render(){
        return(
            <div className="each-ip-div">
                <div className="ip-label heading-style">
                    I am ready to buy home within
                </div>
                <div className="ip-div-style">
                    <div className="inline-display stack-mobile">
                        <input type="checkbox"  value="now" />
                        <div className="chk-row">
                            <label className="lbl-spacing">Now</label>
                        </div>

                    </div>
                    <div className="inline-display left-margin stack-mobile">
                        <input type="checkbox"  value="one3months" />
                        <div className="chk-row">
                            <label className="lbl-spacing"> 1-3 Months</label>
                        </div>

                    </div>
                    <div className="inline-display left-margin stack-mobile">
                        <input type="checkbox"  value="three6months" />
                        <div className="chk-row">
                            <label className="lbl-spacing">3-6 Months</label>
                        </div>
                    </div>
                    <div className="inline-display left-margin stack-mobile">
                        <input type="checkbox"  value="sixplusmonths" />
                        <div className="chk-row">
                            <label className="lbl-spacing"> 6+ Months </label>
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

export default BuyHome;