import "./Category.scss";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div className="catgories" id="category">
      <div className="col">
        <div className="row">
          <img src="/img/EKS_0176.png" alt="" />
          <button>
            <Link className="link" to="/products/1">
              Sale
            </Link>
          </button>
        </div>
        <div className="row">
          <img src="/img/EKS_0339.png" alt="" />
          <button>
            <Link className="link" to="/products/1">
              Women
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img src="/img/EKS_0236.png" />
          <button>
            <Link className="link" to="/products/1">
              Accessories
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img src="/img/new.png" />
              <button>
                <Link className="link" to="/products/1">
                  NEW SEASON
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img src="/img/EKS_9689.png" />
              <button>
                <Link className="link" to="/products/1">
                  MEN
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img src="/img/EKS_9866.png" />
          <button>
            <Link className="link" to="/products/1">
              SHOES
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Category;
