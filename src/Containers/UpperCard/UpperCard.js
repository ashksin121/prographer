import React from 'react';
import Grid from '@material-ui/core/Grid';
import DropDown from '../../Components/Selects/Selects';
import DatePicker from '../../Components/DatePicker/DatePicker';
import NavTabs from '../../Components/NavTabs/NavTabs';
import './UpperCard.css';

function UpperCard() {
    return (
        <div className="UpperCard">
            <div className="DropDownArea">
                <Grid container justify="space-between" alignItems="stretch">
                    <DropDown />
                    <DatePicker pickerLabel="From Date" />
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