import Card from "../Card/Card";
import useFetch from "../hooks/useFetch";
import "./List.scss";


const List = ({subCat , sort , maxPrice , catId}) => {
  const {data , loading , error} = useFetch(`/products?populate=*&[filters][categories][id]=${catId}${subCat.map(
    (item)=>`&[filters][sub_categories][id][$eq]=${item}`
  )}&[filters][price][$lte]=${maxPrice}`)
   return (
    <div className="list">
      {loading ? 'Loading...' : data?.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};

export default List;
