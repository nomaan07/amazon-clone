import React, { useEffect, useState } from "react";
import "./Header.css";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import {
  filterProducts,
  setType,
  updateFilter,
} from "../store/actions/header/headerAction";
import {
  setClearDetails,
  setUserDetails,
} from "../store/actions/login/loginAction";

function Header() {
  const history = useHistory();
  const homeState = useSelector((state) => state.home.all_products);
  const cardState = useSelector((state) => state.card.items);
  const userState = useSelector((state) => state.login.user);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  console.log(search, "fileer data ");
  const dropDownChangeHandeler = (event) => {
    dispatch(setType(event.target.value));
  };
  const onSearchHandeler = () => {
    dispatch(filterProducts());
  };

  const logOutHandeler = () => {
    localStorage.clear();
    dispatch(setClearDetails());

    history.push("/");
    alert("log Out Succcessfully");
  };

  const onChangeHandeler = (searchVal) => {
    const filter_data = homeState.filter((filter) => {
      return filter.title.toLowerCase().includes(searchVal.toLowerCase());
    });
    console.log(filter_data, "filter data ");
    dispatch(updateFilter(filter_data));
    setSearch(searchVal);
  };

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("user")) != null) {
      dispatch(setUserDetails(JSON.parse(localStorage.getItem("user"))));
    }
  }, []);
  return (
    <div className="header">
      {/* 1 login  image icons  on the left*/}
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>

      {/* 2 search box */}
      <div className="header__search">
        <div className="header-search__filter">
          <select onChange={dropDownChangeHandeler}>
            <option value="All">All</option>
            <option value="Device">Amazon Devices</option>
            <option value="clothing">Clothing And Accessories</option>
          </select>
        </div>
        <input
          type="text"
          onChange={(event) => onChangeHandeler(event.target.value)}
          value={search}
          className="header__searchInput"
        />
        <SearchIcon onClick={onSearchHandeler} className="header__searchIcon" />
      </div>

      {/* 3 link */}

      <div className="header_nav">
        {/* 1 links */}
        <Link
          to={!Object.keys(userState).length && "/login"}
          className="header__link"
        >
          <div className="header_option">
            <span className="header_optionLineOne">
              Hello {userState.email}
            </span>
            {Object.keys(userState).length ? (
              <span
                onClick={() => logOutHandeler()}
                className="header_optionLineTwo"
              >
                {Object.keys(userState).length ? "Sign Out" : "Sign up"}
              </span>
            ) : (
              <span className="header_optionLineTwo">
                {Object.keys(userState).length ? "Sign Out" : "Sign up"}
              </span>
            )}
          </div>
        </Link>
        {/* 2 links */}
        <Link to="/" className="header__link">
          <div className="header_option">
            <span className="header_optionLineOne">your</span>
            <span className="header_optionLineTwo">Prime </span>
          </div>
        </Link>
        {/* 3 links */}
        <Link to="/" className="header__link">
          <div className="header_option">
            <span className="header_optionLineOne">Return</span>
            <span className="header_optionLineTwo">& Order </span>
          </div>
        </Link>

        <Link to="/checkout" className="header__link">
          <div className="header_option">
            {/* shopping basket icons */}
            <ShoppingBasketIcon />
            {/* no of items in the basket */}
            <span className="header_optionLineTwo header_basketCount">
              {cardState.length ? cardState.length : 0}
            </span>
          </div>
        </Link>
      </div>
      {/* basket icons with no */}
    </div>
  );
}

export default Header;
