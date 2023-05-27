import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Select from 'react-select'; 
import Slider from 'rc-slider';





const Products = () => {
  const [sliderMinPrice, setSliderMinPrice] = useState(0);
  const [sliderMaxPrice, setSliderMaxPrice] = useState(10000);
  const [products, setProducts] = useState([]);
  const [tagsList, setTagsList] = useState([]);
  const [typesList, setTypesList] = useState([]);
  const [brandList, setBrandList] = useState([]);
  const [sizeList, setSizeList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [colorList, setColorList] = useState([]);
  const [filter, setFilter] = useState({
    Name: "",
    SKU: "",
    Brand: "",
    Category: "",
    Tags: [],
    Type: [],
    Color: [],
    Size: "",
    MinPrice: null,
    MaxPrice: null
  });





  const handleFilterChange = (event) => {
    if (event.target.name === "Tags" || event.target.name === "Type" || event.target.name === "Color") {
      let values = event.target.value.split(',').map(item => item.trim());
      setFilter(prevFilter => ({
        ...prevFilter,
        [event.target.name]: values
      }));
    } else {
      setFilter(prevFilter => ({
        ...prevFilter,
        [event.target.name]: event.target.value
      }));

      if (event.target.name === "MinPrice") {
        setSliderMinPrice(Number(event.target.value));
      } else if (event.target.name === "MaxPrice") {
        setSliderMaxPrice(Number(event.target.value));
      }
    }
  };

  const handleDropdownChange = (selectedOption, meta) => {
    const name = meta.name;
    let values;
  
    if (Array.isArray(selectedOption)) {
      values = selectedOption.map(item => item.value);
    } else if (selectedOption) {
      values = selectedOption.value;
    } else {
      values = name === "Brand" || name === "Size"|| name === "Category" ? "" : [];
    }
  
    setFilter(prevFilter => ({
      ...prevFilter,
      [name]: values
    }));
  };
  
  

  const tagOptions = tagsList.map(tag => ({ value: tag, label: tag }));
  const colorOptions = colorList.map(color => ({ value: color, label: color }));
  const typeOptions = typesList.map(type => ({ value: type, label: type }));
  const brandOptions = brandList.map(brand => ({ value: brand, label: brand }));
  const sizeOptions = sizeList.map(size => ({ value: size, label: size }));
  const categoryOptions = categoryList.map(category => ({ value: category, label: category }));


  useEffect(() => {
    const filtersToSend = { ...filter };
    if (filter.MinPrice) {
      filtersToSend.MinPrice = Number(filter.MinPrice);
    }
    if (filter.MaxPrice) {
      filtersToSend.MaxPrice = Number(filter.MaxPrice);
    }

    axios.get('https://localhost:7285/api/Filter/tags')
      .then(response => {
        console.log("Tags data: ", response.data.data.map(tag => tag.name));
        setTagsList(response.data.data.map(tag => tag.name));
      })
      .catch(error => {
        console.error('There was an error!', error);
      });

 
      axios.get('https://localhost:7285/api/Filter/color')
      .then(response => {
        setColorList(response.data.data.map(color => color.name));
      })
      .catch(error => {
        console.error('There was an error!', error);
      });

      axios.get('https://localhost:7285/api/Filter/brand')
      .then(response => {
        setBrandList(response.data.data.map(brand => brand.name));
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
      axios.get('https://localhost:7285/api/Filter/Size')
      .then(response => {
        setSizeList(response.data.data.map(size => size.name));
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
      axios.get('https://localhost:7285/api/Filter/Type')
      .then(response => {
        setTypesList(response.data.data.map(type => type.name));
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
      axios.get('https://localhost:7285/api/Filter/Category')
      .then(response => {
        setCategoryList(response.data.data.map(type => type.name));
      })
      .catch(error => {
        console.error('There was an error!', error);
      });


    axios.post('https://localhost:7285/api/Product/search', filtersToSend)
      .then(response => {
        console.log(response.data);  // för att se vad response.data innehåller
        setProducts(response.data.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, [filter]);
  console.log("My 2 ", filter.Tags);

  return (
    <div className="container mt-4">
      <div className="form-group mb-3">
        <input type="text" name="Name" value={filter.Name} onChange={handleFilterChange} placeholder="Search by name" className="form-control" />
      </div>
      <div className="form-group mb-3">
        <input type="text" name="SKU" value={filter.SKU} onChange={handleFilterChange} placeholder="Search by SKU" className="form-control" />
      </div>
    

      <div className="form-group  mb-3">
      <h3>Tags</h3>
      <Select
        name="Tags"
        options={tagOptions}
        isMulti
        onChange={handleDropdownChange}
      />
      </div>
    
      <div className="form-group  mb-3">
      <h3>Color</h3>
      <Select
        name="Color"
        options={colorOptions}
        isMulti
        onChange={handleDropdownChange}
      />
      </div>
      <div className="form-group  mb-3">
      <h3>Type</h3>
      <Select
        name="Type"
        options={typeOptions}
        isMulti
        onChange={handleDropdownChange}
      />
      </div>

      <div className="form-group  mb-3">
      <h3>Brand</h3>
      <Select
        name="Brand"
        options={brandOptions}
        isClearable
        onChange={handleDropdownChange}
      />
      </div>

      <div className="form-group  mb-3">
      <h3>Size</h3>
      <Select
        name="Size"
        options={sizeOptions}
        isClearable
        onChange={handleDropdownChange}
      />
      </div>
      <div className="form-group  mb-3">
      <h3>Category</h3>
      <Select
        name="Category"
        options={categoryOptions}
        isClearable
        onChange={handleDropdownChange}
      />
      </div>
      <div class="container mb-4">
        <div class="row">

          <div class="col">
            <div className="mb-10">
              <label for="customRange1" className="form-label"> Price range</label>
              <Slider
                range
                min={0}
                max={10000}
                value={[sliderMinPrice, sliderMaxPrice]}
                onAfterChange={(value) => {
                  setSliderMinPrice(value[0]);
                  setSliderMaxPrice(value[1]);
                  setFilter((prevFilter) => ({
                    ...prevFilter,
                    MinPrice: value[0],
                    MaxPrice: value[1]
                  }));
                }}
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div className="mb-3">
              <label htmlFor="minPrice" className="form-label">Min Price</label>
              <div className="input-group">
                <input
                  type="number"
                  id="minPrice"
                  name="MinPrice"
                  className="form-control"
                  value={filter.MinPrice || ''}
                  onChange={handleFilterChange}
                />
                <span className="input-group-text">kr</span>
              </div>
            </div>
          </div>
          <div class="col">
            <div className="mb-3">
              <label htmlFor="maxPrice" className="form-label">Max Price</label>
              <div className="input-group">
                <input
                  type="number"
                  id="maxPrice"
                  name="MaxPrice"
                  className="form-control"
                  value={filter.MaxPrice || ''}
                  onChange={handleFilterChange}
                />
                <span className="input-group-text">kr</span>
              </div>
            </div>
          </div>
        </div>
      </div>





      <div className="row">
        {products.map((product, index) => (
          <div key={index} className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h2 className="card-title">{product.name}</h2>
                <p className="card-text">{product.description}</p>
                <p className="card-text">{product.category}</p>
                <p className="card-text">{product.brand}</p>
                <p className="card-text">{product.type.join(", ")}</p>
                <p className="card-text">{product.tags.join(", ")}</p>

                <h3>Variants</h3>
                {product.variants.map((variant, variantIndex) => (
                  <div key={variantIndex}>
                    <img src={variant.imageName} alt={variant.imageAlt} style={{ height: '200px' }} />
                    <h4>{variant.name}</h4>
                    <p>Price: {variant.price} kr</p>
                    <p>Stock: {variant.stock}</p>
                    <p>SKU: {variant.sku}</p>
                    <p>Size: {variant.size}</p>
                    <p>Color: {variant.color}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      
    </div>
  );
};
export default Products;
