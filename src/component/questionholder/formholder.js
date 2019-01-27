
import React, { Component } from 'react';
import Name from '../clientquestions/name/name';
import Address from '../clientquestions/Address/address';
import Phone from '../clientquestions/Phone/phone';
import Email from '../clientquestions/email/email';
import PriceRange from '../clientquestions/price/price';
import BuyHome from '../clientquestions/buyhome/buyhome';
import CityPreference from '../clientquestions/cityPreference/citypreference';
import AreaSize from '../clientquestions/areapreference/areapreference';
import Bedroom from '../clientquestions/bedroom/bedroom';
import Bathroom from '../clientquestions/bathroom/bathroom';
import LotSize from '../clientquestions/lotsize/lotsize';
import GarageSize from '../clientquestions/garagesize/garagesize';
import FormalDining from '../clientquestions/formaldining/formaldining';
import FormalLiving from '../clientquestions/formalliving/formalliving';
import School from '../clientquestions/school/school';
import HomeDirection from '../clientquestions/homedirection/homedirection';
import Submitbutton from '../clientquestions/submitbtn/submitbtn';
import Extrapreference from '../clientquestions/extrapreference/extrapreference';

class FormHolder extends Component {
    render(){
        return (
            <div className="formsHolderDiv" >
                <div className="header-style">
                    <span className="page-heading">Contact Form and Client Preferences</span>
                </div>
                <Name/>
                <Address></Address>
                <Phone/>
                <Email/>
                <PriceRange/>
                <BuyHome/>
                <CityPreference/>
                <AreaSize/>
                <Bedroom/>
                <Bathroom/>
                <LotSize/>
                <GarageSize/>
                <FormalDining/>
                <FormalLiving/>
                <School/>
                <HomeDirection/>
                <Extrapreference/>
                <Submitbutton/>

            </div>

        );
    }
}
export default FormHolder;