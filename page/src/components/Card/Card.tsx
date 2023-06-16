import { Link } from "react-router-dom";
import "./Card.scss";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import AddShoppingCartRoundedIcon from "@mui/icons-material/AddShoppingCartRounded";

import { addToCart, addToFavorite } from "../../PageRedux/actions";
import { useDispatch } from "react-redux";

const Card = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="card">
        <img src={product?.images[0]} alt="image" />
        <div className="about">
          <Link to={`product/${product.id}`}>
            <h5>{product.title} </h5>
            <br />
            <h5>price: {parseFloat(product?.price).toFixed(2)} </h5>
          </Link>
          <div className="card_hover">
            <AddShoppingCartRoundedIcon
              sx={{ display: "none" }}
              className="btn"
              onClick={() => dispatch(addToCart(product))}
            />
            <FavoriteBorderRoundedIcon
              sx={{ display: "none" }}
              className="btn"
              onClick={() => dispatch(addToFavorite(product))}
            />
            <button className="btn">category</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
