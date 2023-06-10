import { useEffect, useState } from "react";
import { getUserInfo } from "../../Helpers/user/User";
import "./profile.scss";
import { Button, Paper, Typography } from "@mui/material";
import UserInfo from "./UserInfo";
import AddressDialog from "./addressInfo/AddressDialog";

function Profile() {
  const [isUserEditing, setIsUserEditing] = useState<boolean>(false);

  const userData = JSON.parse(localStorage.getItem("user") as string);

  const [user, setUser] = useState<UserItem | null>(null);

  useEffect(() => {
    const userInfo = async () => {
      const { data } = await getUserInfo();
      setUser(data);
    };
    userInfo();
  }, []);

  const handleEditing = () => {
    setIsUserEditing(true);
  };

  const handleChangeState = () => {
    setIsUserEditing((prev) => !prev);
  };

  if (isUserEditing) {
    return (
      <div className="user_info">
        <UserInfo handleChangeState={handleChangeState} />
      </div>
    );
  }

  if (!isUserEditing) {
    return (
      <div className="user_info_page">
        <Typography variant="h4" className="user_info_title">
          Your User Info{" "}
        </Typography>
        <Paper variant="outlined" className="user_info">
          <div className="person">
            <Typography className="info">
              Firstname: {userData.firstName}{" "}
            </Typography>
            <Typography className="info">
              {" "}
              Latsname: {userData.lastName}{" "}
            </Typography>
          </div>

          <Typography className="info_email">
            {" "}
            Phone : {userData.phoneNumber}{" "}
          </Typography>
          <Typography className="info_email">
            E-mail: {userData.email}{" "}
          </Typography>
          <Button onClick={handleEditing} className="edit_btn">
            edit
          </Button>
          <Paper elevation={3} className="address_info">
            {" "}
            <AddressDialog />
          </Paper>
        </Paper>
      </div>
    );
  }
}

export default Profile;
