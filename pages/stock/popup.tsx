import React, { ReactElement } from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import NumberFormat from "react-number-format";

interface Props {
  isopen?: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  istitle?: string;
  valStockName: string;
  setStockName: React.Dispatch<React.SetStateAction<string>>;
  valStockPrice: string;
  setStockPrice: React.Dispatch<React.SetStateAction<string>>;
}

export default function Popup({
  isopen,
  setOpen,
  istitle,
  valStockName,
  setStockName,
  valStockPrice,
  setStockPrice,
}: Props): ReactElement {
  //   const [values, setValues] = React.useState("");

  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = (event: any) => {
    setStockPrice(parseFloat(event.target.value));
  };

  const NumberFormatCustom = (props: any) => {
    const { inputRef, onChange, ...other } = props;
    debugger;
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
        decimalScale={2}
      />
    );
  };

  return (
    <>
      <Dialog open={isopen} onClose={handleClose}>
        <DialogTitle>{istitle}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Stock Name"
            fullWidth
            variant="standard"
            value={valStockName}
            onChange={(event: any) => {
              setStockName(event.target.value);
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            label="Price"
            fullWidth
            variant="standard"
            value={valStockPrice}
            onChange={handleChange}
            InputProps={{
              inputComponent: NumberFormatCustom,
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="stock"
            label="Stock"
            type="number"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Save</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
