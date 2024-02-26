import { useParams } from "react-router-dom";
import "./Products.scss";
import { useState } from "react";
import List from "../../components/List/List";
import useFetch from "../../components/hooks/useFetch";

const Products = () => {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPice] = useState(1000);
  const [sort, setSort] = useState(null);
  const [selectedSubCat, setSelectedSubCat] = useState([]);

  const { data, loading, error } = useFetch(
    `/sub-categories?[filter][categories][id][$eq]=${catId}`,
  );
  console.log(catId)

  const hadnleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCat(
      isChecked
        ? [...selectedSubCat, value]
        : selectedSubCat.filter((item) => item != value),
    );
  };

  console.log(sort);

  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Products By Catogries</h2>
          {data?.map((item) => (
            <div className="inputItem" key={item.id}>
              <input
                type="checkbox"
                id={item.id}
                value={item.id}
                onChange={hadnleChange}
              />
              <label htmlFor={item.id}>{item.attributes.title}</label>
            </div>
          ))}
        </div>
        <div className="filterItem">
          <h2>Filter By Price</h2>
          <div className="inputItem">
            <span>$ 0 </span>
            <input
              type="range"
              min={0}
              max={1000}
              onClick={(e) => setMaxPice(e.target.value)}
            />
            <span>{maxPrice} $</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort By</h2>
          <div className="inputItem">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onClick={() => setSort("asc")}
            />
            <label htmlFor="asc">Price (Lowest First)</label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              id="desc"
              value="desc"
              name="price"
              onClick={() => setSort("desc")}
            />
            <label htmlFor="desc">Price (Highest First)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img src="/Public/img/EKS_9969.png" alt="oddies" className="ctgImg" />
        <List
          catId={catId}
          maxPrice={maxPrice}
          sort={sort}
          subCat={selectedSubCat}
        />
      </div>
    </div>
  );
};

export default Products;
