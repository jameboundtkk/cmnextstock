import React, { ReactElement } from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import NumberFormat from "react-number-format";
import { StockData } from "../../model/entity";
import { Formik, Form } from "formik";

interface Props {
  isopen?: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  istitle?: string;
  model: StockData;
  setModelValue?: React.Dispatch<React.SetStateAction<StockData>>;
}

export default function Popup({
  isopen,
  setOpen,
  istitle,
  model,
  setModelValue,
}: //   setModelValue,
Props): ReactElement {
  const handleClose = () => {
    setOpen(false);
  };

  const NumberFormatCustom = (props: any) => {
    debugger;
    const { inputRef, onChange, value, name, ...other } = props;
    return (
      <NumberFormat
        {...other}
        name={name}
        value={value}
        getInputRef={inputRef}
        onChange={onChange}
        thousandSeparator
        decimalScale={2}
      />
    );
  };

  return (
    <>
      <Dialog open={isopen} onClose={handleClose}>
        <Formik
          initialValues={model}
          onSubmit={(values) => {
            console.log(values);
            alert(JSON.stringify(values));
            // setModelValue(values);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <Form onSubmit={handleSubmit}>
              <DialogTitle>{istitle}</DialogTitle>
              <DialogContent>
                <TextField
                  margin="normal"
                  label="Stock Name"
                  fullWidth
                  variant="outlined"
                  name="name"
                  placeholder="Enter Stock Name"
                  value={values.name}
                  onChange={handleChange}
                />
                <TextField
                  id="formatted-numberformat-input"
                  margin="normal"
                  label="Price"
                  fullWidth
                  variant="outlined"
                  name="price"
                  placeholder="Enter Price"
                  value={values.price}
                  onChange={handleChange}
                  InputProps={{
                    inputComponent: NumberFormatCustom,
                  }}
                />
                <TextField
                  margin="normal"
                  label="Stock"
                  fullWidth
                  variant="outlined"
                  name="stock"
                  placeholder="Enter Stock"
                  value={values.stock}
                  onChange={handleChange}
                  InputProps={{
                    inputComponent: NumberFormatCustom,
                  }}
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button type="submit">Save</Button>
              </DialogActions>
            </Form>
          )}
        </Formik>
      </Dialog>
    </>
  );
}
