import { useEffect, useState } from "react";
import { getUserInfo } from "../../Helpers/user/User";
import { useTranslation } from "react-i18next";

import "./profile.scss";
import { Button, Paper, Typography } from "@mui/material";
import UserInfo from "./UserInfo";
import AddressDialog from "./addressInfo/AddressDialog";
import Card from "../../components/Card";
import { useNavigate } from "react-router";

function Profile() {
  const [isUserEditing, setIsUserEditing] = useState<boolean>(false);

  const userData = JSON.parse(localStorage.getItem("user") as string);
  const ordersData = JSON.parse(localStorage.getItem("orders") as string);
  const orders = ordersData[0].items;

  const [user, setUser] = useState<UserItem | null>(null);

  const navigate = useNavigate();
  const { t } = useTranslation();
  let address = false;

  useEffect(() => {
    const userInfo = async () => {
      const { data } = await getUserInfo();
      setUser(data);
    };
    userInfo();
  }, [user, isUserEditing, address]);

  const handleEditing = () => {
    setIsUserEditing(true);
  };
  const handleChangeState = () => {
    setIsUserEditing((prev) => !prev);
  };
  return isUserEditing ? (
    <div className="user">
      <UserInfo
        handleChangeState={handleChangeState}
        isUserEditing={isUserEditing}
      />
    </div>
  ) : (
    <div className="user_page">
      <div className="user_info_page">
        <Typography variant="h4" className="user_info_title">
          {t("global.User Info")}
        </Typography>
        <Paper variant="outlined" className="user_info">
          <div className="person">
            <Typography className="info">
              {t("global.firstName")}:{userData?.firstName}
            </Typography>
            <Typography className="info">
              {t("global.lastName")} : {userData?.lastName}
            </Typography>
          </div>

          <Typography className="info_email">
            {t("global.phoneNumber")} : {userData?.phoneNumber}
          </Typography>
          <Typography className="info_email">
            {t("global.email")} : {userData?.email}
          </Typography>
          <Button onClick={handleEditing} className="edit_btn">
            {t("global.edit")}
          </Button>
          <Paper elevation={3} className="address_info">
            <AddressDialog address={address} />
          </Paper>
        </Paper>
      </div>
      {orders.length ? (
        <div className="orders_page">
          <Typography variant="h2">{t("global.Orders")} </Typography>
          <Paper
            elevation={3}
            sx={{ width: "100%", border: "1px solid black" }}
          >
            {orders.map((item: Prodact) => {
              return (
                <Paper className="order_item">
                  <div className="order_left">
                    <img
                      src={item.images[0]}
                      width={"100px"}
                      height={"100px"}
                    />

                    <Typography sx={{ width: "150px" }}>
                      {t("global.price")}: {item.price}$
                    </Typography>
                  </div>
                  <div className="all_right">
                    <div className="order_right">
                      <Typography className="t_title">{item.title} </Typography>
                    </div>
                    <Button
                      onClick={() => {
                        navigate("/order?status");
                      }}
                    >
                      {t("global.order status")}
                    </Button>
                  </div>
                </Paper>
              );
            })}
          </Paper>
        </div>
      ) : (
        <h1> {t("global.No Active Orders")} </h1>
      )}
    </div>
  );
}

export default Profile;
