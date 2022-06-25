import React, { Component } from "react";
import "./App.css";
import Appbar from "./Components/Appbar";
import Footer from "./Components/Footer";
import TaxSlabs from "./Components/TaxSlabs";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import Fab from "@material-ui/core/Fab";
import tax from "./assets/images/tax.jpg";
import taxFree from "./assets/images/tax_free.jpg";
import stop from "./assets/images/limit.jpg";

class App extends Component {
  constructor() {
    super();

    this.state = {
      value: '',
      Monthly_Income: "",
      Monthly_Tax: "",
      Salary_After_Tax: "",
      Yearly_Income: "",
      Yearly_Tax: "",
      Yearly_Income_After_Tax: "",
      taxSlabStatus: false,
      limit: false
    };
    this.calcTax = this.calcTax.bind(this);
    this.validateChk = this.validateChk.bind(this);
  }

  currencyFormat(num) {
    return "Rs " + num.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

  calcTax(e) {
    const income = Number(e.target.value);
    var flag = false;

    const re = /^[0-9\b]+$/;
    if (e.target.value === '' || re.test(e.target.value)) {
      flag = true;
    }
    if (flag) {
      if (income > 0 && income <= (600000 / 12)) {
        this.setState({
          value: income,
          limit: false,
          Monthly_Income: this.currencyFormat(parseFloat(income).toFixed(2)),
          Monthly_Tax: "",
          Salary_After_Tax: this.currencyFormat(parseFloat(income).toFixed(2)),
          Yearly_Income: this.currencyFormat(parseFloat(income * 12).toFixed(2)),
          Yearly_Tax: "",
          Yearly_Income_After_Tax: this.currencyFormat(
            parseFloat(income * 12).toFixed(2)
          )
        });
      } else if (income > (600000 / 12) && income <= (1200000 / 12)) {
        let flag = income * 12 - 600000;
        this.setState({
          value: income,
          limit: false,
          Monthly_Income: this.currencyFormat(parseFloat(income).toFixed(2)),
          Monthly_Tax: this.currencyFormat(
            parseFloat(((flag / 100) * 2.5) / 12).toFixed(2)
          ),
          Salary_After_Tax: this.currencyFormat(
            parseFloat(income - (((flag / 100) * 2.5) / 12)).toFixed(2)
          ),
          Yearly_Income: this.currencyFormat(parseFloat(income * 12).toFixed(2)),
          Yearly_Tax: this.currencyFormat(
            parseFloat((flag / 100) * 2.5).toFixed(2)
          ),
          Yearly_Income_After_Tax: this.currencyFormat(
            parseFloat(income * 12 - (flag / 100) * 2.5).toFixed(2)
          )
        });
      } else if (income > 100000 && income <= 200000) {
        let flag = income * 12 - 1200000;
        this.setState({
          value: income,
          limit: false,
          Monthly_Income: this.currencyFormat(parseFloat(income).toFixed(2)),
          Monthly_Tax: this.currencyFormat(
            parseFloat(((flag / 100) * 12.5) / 12 + 1250).toFixed(2)
          ),
          Salary_After_Tax: this.currencyFormat(
            parseFloat(income - (((flag / 100) * 12.5) / 12 + 1250)).toFixed(2)
          ),
          Yearly_Income: this.currencyFormat(parseFloat(income * 12).toFixed(2)),
          Yearly_Tax: this.currencyFormat(
            parseFloat((flag / 100) * 12.5 + 15000).toFixed(2)
          ),
          Yearly_Income_After_Tax: this.currencyFormat(
            parseFloat(income * 12 - ((flag / 100) * 12.5 + 15000)).toFixed(2)
          )
        });
      } else if (income > 200000 && income <= 300000) {
        let flag = income * 12 - 2400000;
        this.setState({
          value: income,
          limit: false,
          Monthly_Income: this.currencyFormat(parseFloat(income).toFixed(2)),
          Monthly_Tax: this.currencyFormat(
            parseFloat(((flag / 100) * 20) / 12 + 13750).toFixed(2)
          ),
          Salary_After_Tax: this.currencyFormat(
            parseFloat(income - (((flag / 100) * 20) / 12 + 13750)).toFixed(2)
          ),
          Yearly_Income: this.currencyFormat(parseFloat(income * 12).toFixed(2)),
          Yearly_Tax: this.currencyFormat(
            parseFloat((flag / 100) * 20 + 165000).toFixed(2)
          ),
          Yearly_Income_After_Tax: this.currencyFormat(
            parseFloat(income * 12 - ((flag / 100) * 20 + 165000)).toFixed(2)
          )
        });
      } else if (income > 300000 && income <= 500000) {
        let flag = income * 12 - 3600000;
        this.setState({
          value: income,
          limit: false,
          Monthly_Income: this.currencyFormat(parseFloat(income).toFixed(2)),
          Monthly_Tax: this.currencyFormat(
            parseFloat(((flag / 100) * 25) / 12 + 33750).toFixed(2)
          ),
          Salary_After_Tax: this.currencyFormat(
            parseFloat(income - (((flag / 100) * 25) / 12 + 33750)).toFixed(2)
          ),
          Yearly_Income: this.currencyFormat(parseFloat(income * 12).toFixed(2)),
          Yearly_Tax: this.currencyFormat(
            parseFloat((flag / 100) * 25 + 405000).toFixed(2)
          ),
          Yearly_Income_After_Tax: this.currencyFormat(
            parseFloat(income * 12 - ((flag / 100) * 25 + 405000)).toFixed(2)
          )
        });
      } else if (income > 500000 && income <= 1000000) {
        let flag = income * 12 - 6000000;
        this.setState({
          value: income,
          limit: false,
          Monthly_Income: this.currencyFormat(parseFloat(income).toFixed(2)),
          Monthly_Tax: this.currencyFormat(
            parseFloat(((flag / 100) * 32.5) / 12 + 83750).toFixed(2)
          ),
          Salary_After_Tax: this.currencyFormat(
            parseFloat(income - (((flag / 100) * 32.5) / 12 + 83750)).toFixed(2)
          ),
          Yearly_Income: this.currencyFormat(parseFloat(income * 12).toFixed(2)),
          Yearly_Tax: this.currencyFormat(
            parseFloat((flag / 100) * 32.5 + 1005000).toFixed(2)
          ),
          Yearly_Income_After_Tax: this.currencyFormat(
            parseFloat(income * 12 - ((flag / 100) * 32.5 + 1005000)).toFixed(2)
          )
        });
      } else if (income > 1000000 && income <= 50000000000) {
        let flag = income * 12 - 12000000;
        this.setState({
          value: income,
          limit: false,
          Monthly_Income: this.currencyFormat(parseFloat(income).toFixed(2)),
          Monthly_Tax: this.currencyFormat(
            parseFloat(((flag / 100) * 35) / 12 + 246250).toFixed(2)
          ),
          Salary_After_Tax: this.currencyFormat(
            parseFloat(income - (((flag / 100) * 35) / 12 + 246250)).toFixed(2)
          ),
          Yearly_Income: this.currencyFormat(parseFloat(income * 12).toFixed(2)),
          Yearly_Tax: this.currencyFormat(
            parseFloat((flag / 100) * 35 + 2955000).toFixed(2)
          ),
          Yearly_Income_After_Tax: this.currencyFormat(
            parseFloat(income * 12 - ((flag / 100) * 35 + 2955000)).toFixed(2)
          )
        });
      } else if (income > 50000000000) {
        this.setState({
          value: income,
          limit: true,
          Monthly_Income: ''
        });
      } else if (
        income === "" ||
        income === 0 ||
        income === null ||
        income === undefined
      ) {
        this.setState({
          Monthly_Income: "",
          Monthly_Tax: "",
          Salary_After_Tax: "",
          Yearly_Income: "",
          Yearly_Tax: "",
          Yearly_Income_After_Tax: "",
          limit: false,
          value: '',
        });
      }
    }

  }

  validateChk(e) {
    const re = /^[0-9\b]+$/;
    if (e.target.value === '' || re.test(e.target.value)) {
      this.setState({ value: e.target.value });
    }
    this.calcTax();
  }

  render() {
    const {
      Monthly_Income,
      Monthly_Tax,
      Salary_After_Tax,
      Yearly_Income,
      Yearly_Tax,
      Yearly_Income_After_Tax,
      taxSlabStatus,
      limit
    } = this.state;

    return (
      <div>
        <Appbar />
        <Container>
          <br />
          <Typography variant="h5">
            Enter Your Monthly Salary to Calculate Tax
          </Typography>
          <Typography
            className="urdu"
            variant="h5"
            style={{ textAlign: "right" }}
          >
            ٹیکس معلوم کرنے کے لئے اپنی ماہانہ آمدنی درج کریں
          </Typography>

          <TextField
            id="salaryInputBox"
            label="Monthly Salary "
            type="number"
            margin="normal"
            variant="outlined"
            value={this.state.value}
            fullWidth={true}
            onInput={(e) => {
              e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 12)
            }}
            inputProps={{
              style: { fontSize: 30 }
            }}
            onChange={this.calcTax}
          />
          <br />
          <br />

          {limit && (
            <div>
              <img src={stop} alt="Not Allowed" />
              <Typography variant="h3">
                Itni Salary kisi ki Nahi Hoti..
              </Typography>
            </div>
          )}
        </Container>
        <div align="center">
          {Monthly_Income && Monthly_Tax === "" && (
            <img
              src={taxFree}
              alt="Enjoy You are not required to pay any Tax!"
            />
          )}
          {Monthly_Income && Monthly_Tax !== "" && (
            <img src={tax} alt="Please Pay Tax to support the country!" />
          )}
        </div>
        {/* New Styling Start */}
        {!limit && (
          <div className="container">
            <div>
              <div className="row">
                <div className="col-25">
                  <label>Monthly Income</label>
                </div>
                <div className="col-75">
                  <input type="text" value={Monthly_Income} style={{ color: "white" }} disabled />
                </div>
              </div>
              <div className="row">
                <div className="col-25">
                  <label>Monthly Tax</label>
                </div>
                <div className="col-75">
                  <input
                    type="text"
                    value={Monthly_Tax}
                    style={{ color: "white", fontWeight: "600", textShadow: "2px 0px red" }}
                    disabled
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-25">
                  <label>Salary Take Home</label>
                </div>
                <div className="col-75">
                  <input type="text" value={Salary_After_Tax} style={{ color: "white" }} disabled />
                </div>
              </div>
              <div className="row">
                <div className="col-25">
                  <label>Yearly Income</label>
                </div>
                <div className="col-75">
                  <input type="text" value={Yearly_Income} style={{ color: "white" }} disabled />
                </div>
              </div>
              <div className="row">
                <div className="col-25">
                  <label>Yearly Tax</label>
                </div>
                <div className="col-75">
                  <input
                    type="text"
                    value={Yearly_Tax}
                    style={{ color: "white", fontWeight: "600", textShadow: "2px 0px red" }}
                    disabled
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-25">
                  <label>Yearly Income After Tax</label>
                </div>
                <div className="col-75">
                  <input type="text" value={Yearly_Income_After_Tax} style={{ color: "white" }} disabled />
                </div>
              </div>
            </div>
          </div>
        )}
        <br />

        {!taxSlabStatus && (
          <div align="center"><Fab
            color="primary"
            variant="extended"
            aria-label="Delete"
            style={{ margin: "0", marginTop: "5px" }}
            onClick={() => {
              this.setState({ taxSlabStatus: !taxSlabStatus });
            }}
          >
            <VisibilityIcon style={{ marginRight: "0" }} />
            ­Show Income Tax Slabs
          </Fab></div>
        )}
        <br />
        {taxSlabStatus && (
          <Container>
            <TaxSlabs />
            <div align="center"><Fab
              color="secondary"
              variant="extended"
              aria-label="Delete"
              style={{ margin: "0" }}
              onClick={() => {
                this.setState({ taxSlabStatus: !taxSlabStatus });
              }}
            >
              <VisibilityOffIcon style={{ marginRight: "0" }} />
              ­Hide Income Tax Slabs
            </Fab></div>
          </Container>
        )}
        <br />

        {/* New Styling End */}

        <Footer />
      </div>
    );
  }
}
export default App;
