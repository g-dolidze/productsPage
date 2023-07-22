import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { DeleteItemfromApi } from "../../../../Helpers/admin/AdminRequest";
import { Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

type PropsType = {
  open: boolean;
  setOpen: (open: boolean) => void;
  item: Prodact | null;
};

const Confirm = (props: PropsType) => {
  const { open, setOpen, item } = props;

  const handleClose = () => {
    setOpen(false);
  };
  const { t } = useTranslation();

  const navigate = useNavigate();
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title"></DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Grid
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "10px",
              }}
            >
              <Typography variant="h3" sx={{ textAlign: "center" }}>
                {t("global.Delete This Item?")}{" "}
              </Typography>
              <img src={item?.images[0]} alt="" width={"200px"} />
              <Typography>{item?.title}</Typography>
            </Grid>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}> {t("global.Disagree")}</Button>
          <Button
            onClick={() => {
              DeleteItemfromApi(item!.id), setOpen(false);
            }}
            autoFocus
          >
            {t("global.Agree")}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default Confirm;
