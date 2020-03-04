import React from 'react';
import Grid from '@material-ui/core/Grid';
import DropDown from '../../Components/Selects/Selects';
import DatePicker from '../../Components/DatePicker/DatePicker';
import NavTabs from '../../Components/NavTabs/NavTabs';
import NormalCard from '../../Components/Cards/NormalCard';
import './UpperCard.css';

function UpperCard() {
    return (
        <div className="UpperCard">
            <div className="DropDownArea">
                <Grid container justify="space-between">
                    <DropDown style={{marginBottom: 0, paddingBottom: 0, position: "absolute", bottom: 0}} />
                    <DatePicker pickerLabel="From Date" />
                    <NormalCard style={{marginBottom: 0, paddingBottom: 0}} />
                    <DatePicker pickerLabel="To Date" />
                </Grid>
            </div>
            <br />
            <div className="TabArea">
                <NavTabs />
            </div>
        </div>
    )
}

export default UpperCard;