import React, { Component } from 'react';

class FormalLiving extends Component {
    render(){
        return(
            <div className="each-ip-div sidebyside-div">
                <div className="ip-label heading-style">Formal Living Room Preferred</div>
                <div className="ip-div-style">
                    <div className="inline-display stack-mobile">
                        <input type="checkbox"  value="yes" />
                        <div className="chk-row">
                            <label className="lbl-spacing">Yes</label>
                        </div>

                    </div>
                    <div className="inline-display left-margin stack-mobile">
                        <input type="checkbox"  value="no" />
                        <div className="chk-row">
                            <label className="lbl-spacing">No</label>
                        </div>

                    </div>
                    <div className="inline-display left-margin stack-mobile">
                        <input type="checkbox"  value="no" />
                        <div className="chk-row">
                            <label className="lbl-spacing">Nice To Have</label>
                        </div>

                    </div>
                    <div className="left-margin stack-mobile always-stack">
                        <input type="checkbox"  value="other" />
                        <div className="chk-row">
                            <label className="lbl-spacing other-label"> Other </label>
                        </div>

                        <input className="ip-style left-margin other" type="text" name="other" placeholder="Other"></input>
                    </div>

                </div>
            </div>
        )
    }
}

export default FormalLiving;