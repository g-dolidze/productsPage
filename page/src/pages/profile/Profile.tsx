import { TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import React from "react";

type AddressType = {
  country: string;
  city: string;
  zip_code: string;
  address: string;
  building: string;
  fleat: string;
};

function Profile() {
  const userInfo = JSON.parse(localStorage.getItem("user") as string);
  console.log(userInfo);

  const accountInfo = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      addressInfo: {
        country: "",
        city: "",
        zip_code: "",
        address: "",
        building: "",
        fleat: "",
      },
    },
    onSubmit: (values) => {
      JSON.stringify(values, null, 2);
    },
  });

  const allInfo = { ...userInfo, accountInfo: accountInfo };
  console.log(allInfo);

  return (
    <div>
      <Typography>{allInfo.firstName}</Typography>
      <Typography>{allInfo.lastName}</Typography>
      <Typography>{allInfo.email}</Typography>
      <div>
        <form onSubmit={accountInfo.handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            onChange={accountInfo.handleChange}
            value={accountInfo.values.firstName}
          />
          <button type="submit">submit</button>
        </form>
      </div>
    </div>
  );
}

export default Profile;
