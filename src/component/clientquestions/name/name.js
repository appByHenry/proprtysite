/**
 * just HTML and class name
 *
 **/

import React from 'react';
import PropTypes from 'prop-types';
import './name.css';

function Name(props){
    return (
        <div className="each-ip-div">
            <div className="ip-label heading-style"><span>Name</span> <span className="required">*</span> </div>
            <div className="ip-div-style">
                <input className="ip-style side-by-side" type="text" name="fname" placeholder="First name"></input>
                <input className="ip-style left-margin side-by-side" type="text" name="lname" placeholder="Last name"></input>
            </div>
        </div>
    );
}

Name.propTypes = {
    labelName: PropTypes.any,
};

export default Name;

