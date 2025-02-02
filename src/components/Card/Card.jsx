import { Link } from "react-router-dom";
import "../Card/Card.scss";

const Card = ({ item }) => {
  // console.log( 'card result' ,process.env.VITE_REACT_APP_UPLOAD_URL +
  //   item?.attributes?.img.data.attributes.url)
  // console.log(process.env.VITE_REACT_APP_UPLOAD_URL)
  return (
    <Link className="link" to={`/product/${item.id}`}>
      <div className="card">
        <div className="image">
          {item?.attributes.isNew && <span>New Season</span>}
          <img
            src={
              process.env.VITE_REACT_APP_UPLOAD_URL +
              item.attributes?.img?.data?.attributes?.url
            }
            className="mainImg"
          />
          <img
            src={
              process.env.VITE_REACT_APP_UPLOAD_URL +
              item.attributes?.img2?.data?.attributes?.url
            }
            className="secondImg"
          />
        </div>
        <h2>{item?.attributes.title}</h2>
        <div className="prices">
          <h3>${item.oldPrice || item?.attributes.price + 20}</h3>
          <h3>${item?.attributes.price}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
