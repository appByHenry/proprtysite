import React, { Component } from 'react';

class SwimmingPool extends Component {
    render(){
        return(
            <div className="each-ip-div">
                <div className="ip-label heading-style">Swimming Pool Preference</div>
                <div className="ip-div-style">
                    <div className="inline-display">
                        <div className="chk-row">
                            <label>Yes</label>
                        </div>
                        <input type="checkbox"  value="yes" />
                    </div>
                    <div className="inline-display left-margin">
                        <div className="chk-row">
                            <label>No</label>
                        </div>
                        <input type="checkbox"  value="no" />
                    </div>
                    <div className="inline-display left-margin">
                        <input type="checkbox"  value="no" />
                        <div className="chk-row">
                            <label>Nice To Have</label>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}

export default SwimmingPool;