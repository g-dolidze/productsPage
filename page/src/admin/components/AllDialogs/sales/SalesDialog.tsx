import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Paper,
} from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { deleteProductFromSales } from "../../../../PageRedux/actions";

type PropsType = {
  open: boolean;
  setOpen: Function;
  Items: Prodact[];
};

function SalesDialog(props: PropsType) {
  const { open, setOpen, Items } = props;
  const dispatch = useDispatch();
  const handleClose = () => {
    setOpen(false);
  };
  if (Items.length === 0) {
    handleClose();
  }
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Sales Products</DialogTitle>
        <DialogContent>
          {Items.map((item: Prodact) => {
            return (
              <Paper key={item.id}>
                <img
                  src={item?.images[0]}
                  alt="image"
                  width={"100px "}
                  height={"80px"}
                />
                <div className="about_item">
                  <div className="properties">
                    <h5 className="title">{item.title} </h5>
                    <div>
                      <h5>price: {Number(item.price).toFixed(2)} </h5>
                      <h5>amount: {item.amount}</h5>
                      <h5>rating: {item.rating}</h5>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      dispatch(deleteProductFromSales(item)), handleClose;
                    }}
                  >
                    {" "}
                    delete
                  </button>
                </div>
              </Paper>
            );
          })}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            done
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default SalesDialog;
