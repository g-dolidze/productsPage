import React from "react";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";

import "./footer.scss";

function Footer() {
  const { t } = useTranslation();
  const Navigate = useNavigate();

  const contactPage = () => {
    Navigate("/Contact");
  };
  return (
    <div className="footer">
      <hr className="line" />
      <div className="footer_board">
        <ul className="ask">
          <li> {t("global.FAQ")} </li>
          <li>{t("global.Guarantee and replacement")} </li>
          <li>{t("global.Delivery")} </li>
          <li>{t("global.About us")} </li>
        </ul>
        <ul className="contact">
          <li onClick={contactPage} style={{ cursor: "pointer" }}>
            {t("global.Contact Us")}{" "}
          </li>
          <li>
            <PhoneInTalkIcon /> +995 32 2 555 888
          </li>
          <li>
            <MailOutlineIcon /> Info@eshop.ge
          </li>
          <li>
            10:00 - 19:00 {t("global.Saturday")}: 11:00 - 16:00
            {t("global.S Nutsubidze st")}221
          </li>
        </ul>
        <hr className="line2" />
      </div>
      <p className="reserved">
        {" "}
        {t("global.© 2023 E_Shop.ge all rights reserved")}
      </p>
    </div>
  );
}

export default Footer;
