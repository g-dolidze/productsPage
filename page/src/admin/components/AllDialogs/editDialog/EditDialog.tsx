import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useFormik } from "formik";
import Confirm from "../confirmDialog";
import {
  Autocomplete,
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import {
  AddEditedItem,
  AddNewItem,
} from "../../../../Helpers/admin/AdminRequest";
import Category, {
  categoriesArray,
} from "../../../../components/category/Category";
import brands from "../../../../components/carusel/brands";
import { useAppSelector } from "../../../../Redux/hooks";
import { useTranslation } from "react-i18next";

interface Products {
  id: string;
  title: string;
  description: string;
  category: string[];
  images: string[];
  brand: string;
  price: string;
  rating: string;
  amount: string;
}

const initialValues = {
  id: "",
  title: "",
  description: "",
  category: [""],
  images: [""],
  brand: "",
  price: "",
  rating: "",
  amount: "",
};
type PropsType = {
  product: Prodact;
  setOpen: Function;
  open: boolean;
};

const EditDialog = (props: PropsType) => {
  const { open, setOpen, product } = props;

  const [images, setImages] = useState<string[]>([]);
  const [imgInput, setImgInput] = useState("");
  const { brands, sales } = useAppSelector<InitialState>(
    (state) => state.mainReducer
  );
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

  const handleDeleteImage = (i: number) => {
    product.images = product.images.filter((image, index) => index !== i);
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
      id: product.id,
      title: product.title,
      description: product.description,
      images: [],
      brand: product.brand,
      categories: [],
      price: product.price,
      rating: product.rating,
      amount: product.amount,
    },
    onSubmit: async (editedItem) => {
      values.images = [...product.images];
      const { data } = await AddEditedItem(editedItem, product.id);
    },
  }); 
  
  const {t}=useTranslation()
  return (
    <>
      <div>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Address Info</DialogTitle>
          <DialogContent style={{ width: "600px", height: "400px" }}>
            <DialogContentText></DialogContentText>
            <form onSubmit={handleSubmit}>
              <TextField
                onChange={handleChange}
                name="title"
                value={values.title}
                margin="dense"
                label={t("global.title")}
                type="text"
                fullWidth
                variant="standard"
              />

              <TextField
                onChange={handleChange}
                name="price"
                value={values.price}
                margin="dense"
                label=  {t("global.price")}
                type="text"
                sx={{ width: "45%", marginTop: "5%" }}
                variant="standard"
              />
              <TextField
                onChange={handleChange}
                name="amount"
                value={values.amount}
                margin="dense"
                label=  {t("global.amount")}
                type="text"
                sx={{ width: "45%", margin: "5%" }}
                variant="standard"
              />
              <TextField
                onChange={handleChange}
                name="description"
                value={values.description}
                margin="dense"
                label=  {t("global.description")}
                type="text"
                fullWidth
                variant="standard"
              />

              <Autocomplete
                multiple
                options={categoriesArray}
                sx={{ margin: "20px 0px" }}
                placeholder={
                  values.categories.length > 0 ? "" : "Choose categories"
                }
                renderInput={(params) => (
                  <TextField {...params} label="categories" />
                )}
                value={values.categories}
                onChange={handleCategoryChange}
              />

              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">brand</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={values.brand}
                  name="brand"
                  label= {t("global.brand")}
                  onChange={handleChange}
                >
                  {brands.map((brand, i) => {
                    return (
                      <MenuItem value={brand} key={i}>
                        {brand}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
              <Box>
                <TextField
                  onChange={(e) => setImgInput(e.target.value)}
                  margin="dense"
                  value={imgInput}
                  label= {t("global.image")}
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
                      image: {i + 1} :{image}{" "}
                    </Typography>
                  );
                })}
              {product.images.map((img, i) => {
                return (
                  <div key={i}>
                    <Typography
                      sx={{
                        width: "500px",
                        height: "20px",
                        overflow: "hidden",
                      }}
                    >
                      {img}
                    </Typography>
                    <Button onClick={() => handleDeleteImage(i)}>X</Button>
                  </div>
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
                {t("global.done")}
            </Button>
            <Button onClick={handleClose}>Cancel</Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
};

export default EditDialog;
