import { Paper, Button } from "@mui/material";
import { Link } from "react-router-dom";

function CaruselItem({ item }: PropsType) {
  return (
    <>
      <Paper
        style={{
          backgroundImage:
            "url('https://e0.pxfuel.com/wallpapers/813/732/desktop-wallpaper-background-texture-textures-surface-color-solid.jpg')",
          width: "100% ",
          height: "400px  ",
          position: "relative",
        }}
      >
        <Link
          to={`product/${item.id}`}
          style={{ width: "100% ", height: "400px  " }}
        >
          <img
            src={item.image}
            alt={item.title}
            style={{
              width: "50%",
              height: "400px ",
              objectFit: "contain",
              position: "absolute",
              right: "30%",
            }}
          />
        </Link>
      </Paper>
    </>
  );
}
export default CaruselItem;
