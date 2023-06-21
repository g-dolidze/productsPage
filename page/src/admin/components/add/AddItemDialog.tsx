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
import { useAppSelector } from "../../../Redux/hooks";
import { useTranslation } from "react-i18next";
type PropsType = {
  open: boolean;
  setOpen: Function;
};

function AddItemDialog(props: PropsType) {
  const { open, setOpen } = props;
  const [images, setImages] = useState<string[]>([]);
  const [imgInput, setImgInput] = useState("");
  const { brands } = useAppSelector<InitialState>((state) => state.mainReducer);

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
  const { t } = useTranslation();
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
          <DialogContent style={{ width: "600px", height: "500px" }}>
            <DialogContentText></DialogContentText>
            <form onSubmit={handleSubmit}>
              <TextField
                onChange={handleChange}
                name="title"
                margin="dense"
                label={t("global.title")}
                type="text"
                fullWidth
                variant="standard"
              />

              <TextField
                onChange={handleChange}
                name="price"
                margin="dense"
                label={t("global.price")}
                type="text"
                style={{ width: "45%", marginTop: "5%", marginRight: "5%" }}
                variant="standard"
              />
              <TextField
                onChange={handleChange}
                name="amount"
                margin="dense"
                label={t("global.amount")}
                type="text"
                style={{ width: "45%", marginTop: "5% ", marginLeft: "5%" }}
                variant="standard"
              />
              <TextField
                onChange={handleChange}
                name="description"
                margin="dense"
                label={t("global.description")}
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
                style={{
                  margin: "10px 0px",
                }}
              />
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">brand</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={values.brand}
                  name="brand"
                  label={t("global.brand")}
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
                  label={t("global.image")}
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
              {t("global.Add")}
            </Button>
            <Button onClick={handleClose}>Cancel</Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}

export default AddItemDialog;
