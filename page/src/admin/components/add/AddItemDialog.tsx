import {
  Autocomplete,
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";
import { AddNewItem } from "../../../Helpers/admin/AdminRequest";
import { categoriesArray } from "../../../components/category/Category";
type PropsType = {
  open: boolean;
  setOpen: Function;
};

function AddItemDialog(props: PropsType) {
  const { open, setOpen } = props;
  const [images, setImages] = useState<string[]>([]);
  const [imgInput, setImgInput] = useState("");

  const handleClose = () => {
    setOpen(false);
  };

  const handleCategoryChange = (
    event: React.ChangeEvent<{}>,
    value: string[]
  ) => {
    setFieldValue("categories", value);
  };
  const handleAddImage = () => {
    setImages((prev) => [...prev, imgInput]);
    setImgInput("");
  };

  const {
    values,
    handleChange,
    setFieldValue,
    handleSubmit,
    errors,
    touched,
    submitForm,
  } = useFormik<any>({
    initialValues: {
      title: "",
      description: "",
      images: [],
      brand: "",
      categories: [],
      price: "",
      amount: "",
    },
    onSubmit: async (newProduct) => {
      values.images = images;
      const { data } = await AddNewItem(newProduct);
      console.log(data);
    },
  });

  return (
    <>
      <div>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Address Info</DialogTitle>
          <DialogContent style={{ width: "400px", height: "400px" }}>
            <DialogContentText></DialogContentText>
            <form onSubmit={handleSubmit}>
              <TextField
                onChange={handleChange}
                name="title"
                margin="dense"
                label="title"
                type="text"
                fullWidth
                variant="standard"
              />

              <TextField
                onChange={handleChange}
                name="price"
                margin="dense"
                label=" price"
                type="text"
                fullWidth
                variant="standard"
              />
              <TextField
                onChange={handleChange}
                name="description"
                margin="dense"
                label="description"
                type="text"
                fullWidth
                variant="standard"
              />

              <TextField
                onChange={handleChange}
                name="amount"
                margin="dense"
                label="amount"
                type="text"
                fullWidth
                variant="standard"
              />
              <Autocomplete
                multiple
                options={categoriesArray}
                renderInput={(params) => (
                  <TextField {...params} label="categories" />
                )}
                value={values.categories}
                onChange={handleCategoryChange}
              />

              <TextField
                onChange={handleChange}
                name="brand"
                margin="dense"
                label="brand"
                type="text"
                fullWidth
                variant="standard"
              />
              <Box>
                <TextField
                  onChange={(e) => setImgInput(e.target.value)}
                  margin="dense"
                  value={imgInput}
                  label="img"
                  type="text"
                  fullWidth
                  variant="standard"
                />

                <Button onClick={handleAddImage}> add</Button>
              </Box>
              {images.length > 0 &&
                images.map((image, i) => {
                  return (
                    <Typography>
                      "image"{i + 1} :{image}{" "}
                    </Typography>
                  );
                })}
            </form>
          </DialogContent>
          <DialogActions>
            <Button
              type="submit"
              onClick={() => {
                handleClose(), submitForm();
              }}
            >
              Add
            </Button>
            <Button onClick={handleClose}>Cancel</Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}

export default AddItemDialog;
