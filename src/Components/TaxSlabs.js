import React, { Component } from "react";
import Typography from '@material-ui/core/Typography';



class TaxSlabs extends Component {



    render() {
        return (
            <div>
                <Typography variant="h4">
                    Income Tax Slabs
                </Typography>
                <Typography variant="subtitle1">As per Federal Budget 2019-2020 presented by Government of Pakistan, following slabs and income tax rates will be applicable for salaried persons for the year 2019-2020:</Typography>
                <ol>
                    <li><Typography variant="body1">Where the taxable salary income does not exceed Rs. 600,000 the rate of income tax is 0%.</Typography></li>
                    <li><Typography variant="body1">Where the taxable salary income exceeds Rs. 600,000 but does not exceed Rs. 1,200,000 the rate of income tax is 5% of the amount exceeding Rs. 600,000.</Typography></li>
                    <li><Typography variant="body1">Where the taxable salary income exceeds Rs. 1,200,000 but does not exceed Rs. 1,800,000 the rate of income tax is Rs. 30,000 + 10% of the amount exceeding Rs. 1,200,000.</Typography></li>
                    <li><Typography variant="body1">Where the taxable salary income exceeds Rs. 1,800,000 but does not exceed Rs. 2,500,000 the rate of income tax is Rs. 90,000 + 15% of the amount exceeding Rs. 1,800,000.</Typography></li>
                    <li><Typography variant="body1">Where the taxable salary income exceeds Rs. 2,500,000 but does not exceed Rs. 3,500,000 the rate of income tax is Rs. 195,000 + 17.5% of the amount exceeding Rs. 2,500,000.</Typography></li>
                    <li><Typography variant="body1">Where the taxable salary income exceeds Rs. 3,500,000 but does not exceed Rs. 5,000,000 the rate of income tax is Rs. 370,000 + 20% of the amount exceeding Rs. 3,500,000.</Typography></li>
                    <li><Typography variant="body1">Where the taxable salary income exceeds Rs. 5,000,000 but does not exceed Rs. 8,000,000 the rate of income tax is Rs. 670,000 + 22.5% of the amount exceeding Rs. 5,000,000.</Typography></li>
                    <li><Typography variant="body1">Where the taxable salary income exceeds Rs. 8,000,000 but does not exceed Rs. 12,000,000 the rate of income tax is Rs. 1,345,000 + 25% of the amount exceeding Rs. 8,000,000.</Typography></li>
                    <li><Typography variant="body1">Where the taxable salary income exceeds Rs. 12,000,000 but does not exceed Rs. 30,000,000 the rate of income tax is Rs. 2,345,000 + 27.5% of the amount exceeding Rs. 12,000,000.</Typography></li>
                    <li><Typography variant="body1">Where the taxable salary income exceeds Rs. 30,000,000 but does not exceed Rs. 50,000,000 the rate of income tax is Rs. 7,295,000 + 30% of the amount exceeding Rs. 30,000,000.</Typography></li>
                    <li><Typography variant="body1">Where the taxable salary income exceeds Rs. 50,000,000 but does not exceed Rs. 75,000,000 the rate of income tax is Rs. 13,295,000 + 32.5% of the amount exceeding Rs. 50,000,000.</Typography></li>
                    <li><Typography variant="body1">Where the taxable salary income exceeds Rs. 75,000,000 the rate of income tax is Rs. 21,420,000 + 35% of the amount exceeding Rs. 75,000,000.</Typography></li>
                </ol>
            </div>
        )
    }
}

export default TaxSlabs;