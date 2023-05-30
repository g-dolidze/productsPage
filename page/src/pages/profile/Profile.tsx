import { useState } from "react";
import { Typography } from "@mui/material";
import { useFormik } from "formik";

function Profile() {
  const userInfo = JSON.parse(localStorage.getItem("user") as string);
  const profile = userInfo;
  const [submittedValues, setSubmittedValues] = useState({});
  const [submitted, setSubmitted] = useState(false);

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
      setSubmittedValues(values);
      setSubmitted(true);
    },
  });

  const allInfo = { ...profile, profile: submittedValues };

  return (
    <div>
      <form
        onSubmit={accountInfo.handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "250px",
          height: "50px",
        }}
      >
        <input
          placeholder="firstName"
          id="firstName"
          name="firstName"
          type="text"
          onChange={accountInfo.handleChange}
          value={accountInfo.values.firstName}
          disabled={submitted}
          style={{ display: submitted ? "none" : "block" }}
        />
        <input
          placeholder="lastName"
          id="lastName"
          name="lastName"
          type="text"
          onChange={accountInfo.handleChange}
          value={accountInfo.values.lastName}
          disabled={submitted}
          style={{ display: submitted ? "none" : "block" }}
        />
        <input
          placeholder="phoneNumber"
          id="phoneNumber"
          name="phoneNumber"
          type="text"
          onChange={accountInfo.handleChange}
          value={accountInfo.values.phoneNumber}
          disabled={submitted}
          style={{ display: submitted ? "none" : "block" }}
        />
        <input
          placeholder="email"
          id="email"
          name="email"
          type="text"
          onChange={accountInfo.handleChange}
          value={accountInfo.values.email}
          disabled={submitted}
          style={{ display: submitted ? "none" : "block" }}
        />
        <input
          placeholder="country"
          id="country"
          name="addressInfo.country"
          type="text"
          onChange={accountInfo.handleChange}
          value={accountInfo.values.addressInfo.country}
          disabled={submitted}
          style={{ display: submitted ? "none" : "block" }}
        />
        <button type="submit" disabled={submitted}>
          submit
        </button>
      </form>

      <div>
        <Typography>{submittedValues.firstName}</Typography>
        <Typography>{submittedValues.lastName}</Typography>
        <Typography>{submittedValues.email}</Typography>
        <Typography>{submittedValues.phoneNumber}</Typography>
        <Typography>{submittedValues.addressInfo}</Typography>
      </div>
    </div>
  );
}

export default Profile;
