import React from "react";
import NumberFormat from "react-number-format";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            value: values.value,
          },
        });
      }}
      thousandSeparator
      suffix="%"
    />
  );
}

NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

class FormattedInputs extends React.Component {
  state = {
    numberformat: "90",
    open: true,
  };

  handleChange = (name) => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { numberformat } = this.state;

    const handleClickOpen = () => {
      // setOpen(true);
      this.setState({
        open: true,
      });
    };

    const handleClose = () => {
      // setOpen(false);
      this.setState({
        open: false,
      });
    };
    return (
      <div>
        <TextField
          label="react-number-format"
          value={numberformat}
          onChange={this.handleChange("numberformat")}
          id="formatted-numberformat-input"
          InputProps={{
            inputComponent: NumberFormatCustom,
          }}
        />
        <Button variant="outlined" onClick={handleClickOpen}>
          Open form dialog
        </Button>
        <Dialog open={this.state.open} onClose={handleClose}>
          <DialogTitle>Subscribe</DialogTitle>
          <DialogContent>
            <TextField
              label="react-number-format"
              value={numberformat}
              onChange={this.handleChange("numberformat")}
              id="formatted-numberformat-input"
              InputProps={{
                inputComponent: NumberFormatCustom,
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Subscribe</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default FormattedInputs;
