import React, { Component } from 'react';

class CityPreference extends Component {
    render(){
        return(
            <div className="each-ip-div sidebyside-div">
                <div className="ip-label heading-style">
                    <span>Preferred Cities/ Areas</span>
                    <span className="required">*</span>
                </div>
                <div className="ip-div-style">
                    <div className=" stack">
                        <input type="checkbox"  value="Folsom" />
                        <div className="chk-row">
                            <label className="lbl-spacing">Folsom</label>
                        </div>

                    </div>
                    <div className=" left-margin stack">
                        <input type="checkbox"  value="Eldorado_Hills" />
                        <div className="chk-row">
                            <label className="lbl-spacing">Eldorado Hills</label>
                        </div>

                    </div>
                    <div className=" left-margin stack">
                        <input type="checkbox"  value="Rancho_Cordova" />
                        <div className="chk-row">
                            <label className="lbl-spacing">Rancho Cordova</label>
                        </div>

                    </div>
                    <div className=" left-margin stack">
                        <input type="checkbox"  value="Roseville_Rocklin" />
                        <div className="chk-row">
                            <label className="lbl-spacing"> Roseville, Rocklin </label>
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

export default CityPreference;