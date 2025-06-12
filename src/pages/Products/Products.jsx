import { useParams } from "react-router-dom";
import { useState } from "react";
import List from "../../components/List/List";
import useFetch from "../../components/hooks/useFetch";

const Products = () => {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPice] = useState(1000);
  const [sort, setSort] = useState(null);
  const [selectedSubCat, setSelectedSubCat] = useState([]);

  const { data, loading, error } = useFetch(
    `/sub-categories?[filter][categories][id][$eq]=${catId}`
  );
  console.log(catId);

  const hadnleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCat(
      isChecked ?
        [...selectedSubCat, value]
      : selectedSubCat.filter((item) => item != value)
    );
  };

  console.log(sort);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8 space-y-8">
            {/* Category Filter */}
            <div className="filterItem">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Products By Categories
              </h2>
              <div className="space-y-3">
                {data?.map((item) => (
                  <div className="flex items-center space-x-3" key={item.id}>
                    <input
                      type="checkbox"
                      id={item.id}
                      value={item.id}
                      onChange={hadnleChange}
                      className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                    />
                    <label
                      htmlFor={item.id}
                      className="text-gray-700 cursor-pointer"
                    >
                      {item.attributes.title}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div className="filterItem">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Filter By Price
              </h2>
              <div className="space-y-3">
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-600">$ 0</span>
                  <input
                    type="range"
                    min={0}
                    max={1000}
                    value={maxPrice}
                    onChange={(e) => setMaxPice(e.target.value)}
                    className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <span className="text-sm text-gray-600">{maxPrice} $</span>
                </div>
              </div>
            </div>

            {/* Sort Filter */}
            <div className="filterItem">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Sort By
              </h2>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <input
                    type="radio"
                    id="asc"
                    value="asc"
                    name="price"
                    onChange={() => setSort("asc")}
                    className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                  />
                  <label htmlFor="asc" className="text-gray-700 cursor-pointer">
                    Price (Lowest First)
                  </label>
                </div>
                <div className="flex items-center space-x-3">
                  <input
                    type="radio"
                    id="desc"
                    value="desc"
                    name="price"
                    onChange={() => setSort("desc")}
                    className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                  />
                  <label
                    htmlFor="desc"
                    className="text-gray-700 cursor-pointer"
                  >
                    Price (Highest First)
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="lg:col-span-3">
          <div className="mb-8">
            <img
              src="/img/EKS_9969.png"
              alt="oddies"
              className="w-full h-48 object-cover rounded-2xl shadow-lg"
            />
          </div>

          <List
            catId={catId}
            maxPrice={maxPrice}
            sort={sort}
            subCat={selectedSubCat}
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
