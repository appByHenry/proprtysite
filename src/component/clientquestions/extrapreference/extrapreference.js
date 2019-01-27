import React, { Component } from 'react';

var sampleData = "Any additional questions are welcome.";
class Extrapreference extends Component {
    render() {
        return (
            <div className="notesDetails">
                <div className="heading-style">
                    <label>Any other preferences or details to be considered</label>
                </div>
                <div className="txtarea-div">
                    <textarea className="txt-area-style" rows="4" placeholder={sampleData}>
                    </textarea>
                </div>
            </div>
        )
    }
}

export default Extrapreference;
