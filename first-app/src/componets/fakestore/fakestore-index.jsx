import { createContext, useEffect, useState } from "react";
import { FakestoreProducts } from "./fakestore-products";
import axios from "axios";

export let CatergoryChange=createContext(null)

export function FakestoreIndex() {
  const [catergory, setCatergory] = useState([]);
  const [catergoryName,setCatergoryName]=useState('all')
  const [cartCount,setCartCount]=useState(0)

  const [cartDetails,setCartDetails]=useState([])
  const [searchString,setSearchString]=useState('')

  function handleSearch(){
    setCatergoryName(searchString.toLowerCase())
  }


  function handleStringChange(e){
    setSearchString(e.target.value)
  }


  function handleAddToCart(e){
    cartDetails.push(e)
    setCartCount(cartDetails.length)
  }


  function handleNameChange(e){
    setCatergoryName(e.target.value)
  }

  function LoadCatergory() {
    axios
      .get(`https://fakestoreapi.com/products/categories`)
      .then((response) => {
        response.data.unshift("all");
        setCatergory(response.data);
      });
  }

  useEffect(() => {
    LoadCatergory();
  });

  return (
    <div className="container-fluid">
      <header className="d-flex justify-content-between align-items-center p-2 bg-light m-2">
        <div className="fs-4 fw-bold bi bi-bag-fill">
          Fakestore Shopping 
        </div>
        <div className="input-group w-25">
          <input
            onChange={handleStringChange}
            className="form-control"
            type="text"
            placeholder="eg: brand , men's wear"
          />
          <button onClick={handleSearch} className="bi bi-search btn btn-warning "></button>
        </div>
        <div>
          <button data-bs-toggle="offcanvas" data-bs-target="#cart"  className=" btn btn-warning bi bi-cart position-relative ">
            <span className="badge rounded rounded-circle bg-danger text-white position-absolute">
              {cartCount}
            </span>
          </button>
        </div>
        <div id="cart" className="offcanvas offcanvas-end">
          <div className="d-flex justify-content-between m-4">
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
              <div></div>
          </div>
          
          <table className="table table-hover p-2" >
            <thead>
              <tr>
                <th>Title</th>
                <th>Price</th>
                <th>Image</th>
              </tr>
            </thead>
            <tbody>
              {
                cartDetails.map(item=><tr key={item.id}>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td><img src={item.image || null} alt="" height="80" width="80"/></td>
                </tr>)
              }
            </tbody>
          </table>
        </div>
      </header>
      <main className="row mt-4 ">
        <nav className="col-2  ">
          <div>
            <select onChange={handleNameChange} size="10" className="form-select">
              {catergory.map((item) => (
                <option className="form-control my-2" key={item} value={item}>
                  {item.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
        </nav>
        <section className="col-10">
            <CatergoryChange value={catergoryName}>
          <FakestoreProducts onAddToCart={handleAddToCart}/>
          </CatergoryChange>
        </section>
      </main>
    </div>
  );
}
