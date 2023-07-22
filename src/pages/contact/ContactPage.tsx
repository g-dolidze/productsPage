import React, { useState } from "react";
import { Button, Paper } from "@mui/material";
import { useTranslation } from "react-i18next";

import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import "./contact.scss";

function ContactPage() {
  const { t } = useTranslation();

  return (
    <div className="contact_page">
      <Paper
        elevation={3}
        sx={{
          width: "60%",
          height: "450px",
          margin: "auto",
          backgroundColor: "rgb(249, 232, 210)",
        }}
      >
        <h1 style={{ textAlign: "center" }}>{t("global.Contact Us")}</h1>
        <p>
          {t(
            "global.In case of questions, feel free to contact us using the contact information"
          )}
        </p>
        <ul>
          <li>
            <MailOutlineIcon />: Info@eshop.ges
          </li>
          <li>
            <PhoneInTalkIcon />: +995 32 2 555 888
          </li>
          <li>
            {t("global.Our Address")}: {t("global.S Nutsubidze st")}221
          </li>
        </ul>
        <Paper
          elevation={3}
          sx={{
            width: "60%",
            height: "60%",
            margin: "auto",
            backgroundColor: "rgb(249, 232, 210)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <h2>{t("global.Send a Message")}</h2>
          <textarea
            placeholder="     Write  here"
            style={{
              width: "60%",
              height: "40%",
              borderRadius: "10px",
            }}
          ></textarea>
          <input
            type="text"
            placeholder="E-mail"
            style={{ width: "60%", height: "30px" }}
          />
          <input
            type="text"
            placeholder="Phone"
            style={{ width: "60%", height: "30px" }}
          />
          <Button>{t("global.Send")}</Button>
        </Paper>
      </Paper>
    </div>
  );
}

export default ContactPage;
