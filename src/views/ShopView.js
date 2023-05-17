import { useLocation } from "react-router-dom";
import Header from "../components/sections/Header";
import Product from "../components/individuals/Product";
import MenuBar from "../components/sections/MenuBar";
import axios from 'axios';
import {useState, useEffect} from 'react';
const ShopView = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
      axios.get('https://manero.azurewebsites.net/api/product')
          .then(response => {
              console.log(response.data);  // för att se vad response.data innehåller
              setProducts(response.data.data);
          })
          .catch(error => {
              console.error('There was an error!', error);
          });
  }, []);
  const location = useLocation();
  const { from } = location.state;
  var tag = from;

  return (
    <section className="d-flex flex-column container-lg">
      <Header icon={"fa-regular fa-chevron-left"} title={tag} />
      <div className="d-flex flex-column" style={{ margin: 8 }}>
        <div className="d-flex justify-content-between color-grey">
          <div className="d-flex align-items-center ">
            <i
              className="fa-light fa-sliders-up"
              style={{ fontSize: 13, marginBottom: 15 }}
            ></i>
            <p style={{ fontSize: 14, marginLeft: 5 }}>Filter</p>
          </div>
          <div className="d-flex align-items-center">
            <p style={{ fontSize: 14}}>Sort by</p>
            <div className="sortBy">
                <select className="form-select" aria-label="Default select example">
                    <option className="selectOption" value="1">Popularity</option>
                    <option className="selectOption" value="2">Price (from highest to lowest)</option>
                    <option className="selectOption" value="3">Price (from lowest to highest)</option>
                </select>
            </div>
          </div>
        </div>
        <div className="d-flex flex-wrap justify-content-between">
          {products.map(product => {
            return(
              <Product
              cardClass="card-3"
              product={product}
              key={product.id}
              />
              
            )
          })}
        </div>
        <MenuBar />
      </div>
    </section>
  );
};

export default ShopView;
