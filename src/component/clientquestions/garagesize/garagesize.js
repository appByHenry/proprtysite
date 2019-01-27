import React, { Component } from 'react';

class GarageSize extends Component {
    render(){
        return(
            <div className="each-ip-div sidebyside-div">
                <div className="ip-label heading-style">Number of Garages</div>
                <div className="ip-div-style">
                    <div className="inline-display stack-mobile">
                        <input type="checkbox"  value="2car" />
                        <div className="chk-row">
                            <label className="lbl-spacing">2 Car</label>
                        </div>

                    </div>
                    <div className="inline-display left-margin stack-mobile">
                        <input type="checkbox"  value="3car" />
                        <div className="chk-row">
                            <label className="lbl-spacing">3 Car</label>
                        </div>

                    </div>

                    <div className="always-stack left-margin stack-mobile">
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

export default GarageSize;