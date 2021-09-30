import React, { useState, useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCartHandeler } from "../store/actions/card/cardAction";
import { updateFilter } from "../store/actions/header/headerAction";
import ProductPagination from "./ProductPagination";
import Loader from "./Loader";
import "./Home.css";
import Product from "./Product";

function Home() {
  const homeState = useSelector((state) => state.home.all_products);
  const products_filter_State = useSelector(
    (state) => state.header.products_filter_data
  );
  const dispatch = useDispatch();
  const { products, setProducts } = useState();
  const [loading, setLoading] = useState(false);
  const [postsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const onAddCardHandeler = (item) => {
    dispatch(addToCartHandeler(item));
  };

  useEffect(() => {
    dispatch(updateFilter(homeState));
  }, []);

  // GET CURRENT POST
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = products_filter_State.slice(
    indexOfFirstPost,
    indexOfLastPost
  );
  const onChangeHandeler = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <Fragment className="home">
      {/* <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/vedeo/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE_XSite_1500x600_PV_en-GB._CB428684220_.jpg" /> */}

      {!currentPosts.length && <h3>No Product Found</h3>}
      {currentPosts && (
        <div className="home__row">
          {currentPosts.map((item) => (
            <Product
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              fixPrice={item.fixPrice}
              rating={item.rating}
              onClick={() => onAddCardHandeler(item)}
            />
          ))}
        </div>
      )}
      <div className="home__pagination">
        <ProductPagination
          totalLength={products_filter_State.length}
          postsPerPage={postsPerPage}
          onChange={(value) => onChangeHandeler(value)}
        />
      </div>
    </Fragment>
  );
}

export default Home;
