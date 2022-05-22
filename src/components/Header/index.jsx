import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";
import Left_Menu from "../LeftMenu";
import { AiOutlineLogin } from "react-icons/ai";
import { AiOutlineLogout } from "react-icons/ai";
import { AiFillDownSquare } from "react-icons/ai";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Header = () => {
  const [show, setShow] = React.useState(false);
  const [showKs, setShowKs] = React.useState(true);
  const [showNh, setShowNg] = React.useState(true);

  const [isSignUp, setIsSignUp] = React.useState(false);
  const handleShow = () => {
    if (typeof window !== "undefined") {
      if (window.pageYOffset > 120) {
        if (!show) {
          setShow(true);
        }
      }
      if (window.pageYOffset < 120) {
        setShow(false);
      }
    }
  };
  const onHangleState = (setParam) => {
    return setParam(true);
  };

  const [data, setData] = useState(true);
  const onChangeSidebar = () => {
    setData(false);
  };
  const changeSidebar = (e) => {
    setData(e);
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleShow);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleShow);
      }
    };
  }, []);
  return (
    <>
      <Left_Menu display={data} changeSidebar={changeSidebar} />
      <div className="home-main header-component">
        <div className="home-main home-component-down">
          <div className="">
            <div
              className={
                show
                  ? "home-main home-navbar scroll-down"
                  : "home-main home-navbar"
              }
            >
              <div className="home-main home-navbar-inside">
                <div className="home-main home-navbar-left">
                  <a
                    href="/"
                    className="main-element link-event link-event-delay active color-main"
                    style={{ cursor: "pointer", marginRight: "200px" }}
                  >
                    <img
                      src="https://storage.googleapis.com/tripi-assets/mytour/icons/icon_logo_mytour_white.svg "
                      className="jss1181"
                      alt="logo_mytour"
                      style={{ marginRight: "56px" }}
                    />
                  </a>
                  <a
                    className="main-element link-event link-event-delay single-navbar color-main"
                    style={{
                      marginRight: "24px",
                      textDecoration: "none",
                      position: "relative",
                      position: "relative",
                      display: "flex",
                      alignItems: "center",
                      gap: "0 4px",
                      color: '#ffffff',
                      padding: "10px 0"

                    }}
                    href="/"
                  >
                    Home
                  </a>
                  <a
                    className="main-element link-event link-event-delay single-navbar color-main"
                    target="_blank"
                    style={{
                      marginRight: "24px",
                      textDecoration: "none",
                      position: "relative",
                      position: "relative",
                      display: "flex",
                      alignItems: "center",
                      gap: "0 4px",
                      color: '#ffffff',
                      padding: "10px 0"
                    }}
                    href="/hotel"
                  >
                    Room <i className="fa-solid fa-angle-down"></i>
                    <div
                      className="ks-position"
                    >
                      <div className="home-main ks-drop-down">
                        <div className="home-main  ks-drop-down-main">
                          <div className="home-main header-btn"></div>
                          <div className="home-main btn-ks">
                            <div className="home-main btn-ks-lable">
                              <a
                                exact="true"
                                className="btn-ks-lable log-btn btn-type"
                                href="/hotel"
                                style={{ fontSize: '0.9rem' }}
                              >
                                khách sạn 1
                              </a>
                            </div>
                          </div>
                          <div className="home-main btn-ks">
                            <div className="home-main btn-ks-label">
                              <a
                                exact="true"
                                className="btn-ks-label log-btn btn-type"
                                href="/hotel"
                                style={{
                                  textDecoration: "none",
                                  color: "black",
                                }}
                              >
                                khách sạn 2
                              </a>
                            </div>
                          </div>
                          <div className="home-main btn-ks">
                            <div className="home-main btn-ks-label">
                              <a
                                exact="true"
                                className="btn-ks-label log-btn btn-type"
                                href="/hotel"
                                style={{
                                  textDecoration: "none",
                                  color: "black",
                                }}
                              >
                                khách sạn 3
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                 
                  <a
                    className="main-element link-event link-event-delay single-navbar color-main"
                    target="_blank"
                    style={{
                      marginRight: "24px",
                      textDecoration: "none",
                      position: "relative",
                      display: "flex",
                      alignItems: "center",
                      gap: "0 4px",
                      color: '#ffffff',
                      padding: "10px 0"
                    }}
                    onMouseLeave={() => onHangleState(setShowNg)}
                    onMouseEnter={() => setShowNg(false)}
                    href="/restaurant"
                  >
                    Restaurant <i className="fa-solid fa-angle-down"></i>
                    <div
                      className="ks-position"
                    >
                      <div className="home-main ks-drop-down">
                        <div className="home-main ks-drop-down-main">
                          <div className="home-main header-btn"></div>
                          <div className="home-main btn-ks">
                            <div className="home-main btn-ks-lable">
                              <a
                                exact="true"
                                className="btn-ks-lable log-btn btn-type"
                                href="/restaurant"

                              >
                                Nhà hàng 1
                              </a>
                            </div>
                          </div>
                          <div className="home-main btn-ks">
                            <div className="home-main btn-ks-label">
                              <a
                                exact="true"
                                className="btn-ks-label log-btn btn-type"
                                href="/restaurant"
                                style={{
                                  textDecoration: "none",
                                  color: "black",
                                }}
                              >
                                Nhà hàng 2
                              </a>
                            </div>
                          </div>
                          <div className="home-main btn-ks">
                            <div className="home-main btn-ks-label">
                              <a
                                exact="true"
                                className="btn-ks-label log-btn btn-type"
                                href="/restaurant"
                                style={{
                                  textDecoration: "none",
                                  color: "black",
                                }}
                              >
                                Nhà hàng 3
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                 
                </div>
                <div className="home main home-navbar-right">
                  
                  <a
                    className="main-element link-event link-event-delay home-header-gift color-main icon-main"
                    style={{ textDecoration: "none" }}
                    href="/contact"
                  >
                    
                    <svg
                      width="17"
                      height="17"
                      fill="none"
                      className="svgFillAll"
                      style={{ stroke: "rgb(26, 32, 44)", marginRight: "8px" }}
                    >
                      <path
                        d="M3.167 1.333H6.5L8.167 5.5 6.083 6.75a9.167 9.167 0 004.167 4.167l1.25-2.084 4.167 1.667v3.333A1.666 1.666 0 0114 15.5 13.333 13.333 0 011.5 3a1.667 1.667 0 011.667-1.667"
                        stroke="rgb(255, 255, 255)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    Contact us
                  </a>
                  <div className="btn-book-now">
                    <a href="">
                      <FontAwesomeIcon icon="fa-solid fa-calendar-days" />
                      BOOK ONLINE
                    </a>
                  </div>
                  
                  <div className="home-main main-element">
                    <div
                      className="home-main jss1759 home-header-ring"
                      style={{ color: "black" }}
                    >
                      <div
                        className="home-main home-header-ring-content icon-main"
                        onClick={() => setIsSignUp(!isSignUp)}
                      >
                        <svg
                          width="20"
                          height="20"
                          fill="none"
                          className="svgFillAll"
                          style={{ stroke: "rgb(255, 255, 255)" }}
                        >
                          <path
                            d="M3.63 15.374a12.905 12.905 0 016.37-1.67 12.9 12.9 0 016.37 1.67m-3.592-7.226a2.778 2.778 0 11-5.556 0 2.778 2.778 0 015.556 0zM18.333 10a8.333 8.333 0 11-16.665 0 8.333 8.333 0 0116.665 0z"
                            stroke="rgb(255, 255, 255)"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                        <svg
                          width="10"
                          height="6"
                          fill="none"
                          className="svgFillAll"
                          style={{
                            stroke: "rgb(26, 32, 44)",
                            marginLeft: "6px",
                          }}
                        >
                          <path
                            d="M1.667 1.333L5 4.667l3.333-3.334"
                            stroke="rgb(255, 255, 255)"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </div>
                      <div
                        className={
                          isSignUp
                            ? "home-main btn-dn-dk"
                            : "home-main btn-dn-dk isdisplay"
                        }
                        style={{ right: "-26px" }}
                      >
                        <div className="home-main btn-dn-dk-main">
                          <div className="home-main header-btn"></div>
                          <div className="home-main btn-dangnhap hover-btn-dangnhap">
                            <div className="home-main btn-dangnhap-lable">
                              <NavLink
                                className="btn-dangnhap-lable log-btn"
                                to="/login"
                                exact="true"
                              >
                                <AiOutlineLogin /> Đăng nhập
                              </NavLink>
                            </div>
                          </div>
                          <div className="home-main btn-dangki hover-btn-dangnhap">
                            <div className="home-main btn-dangki-label ">
                              <NavLink
                                className="btn-dangki-label log-btn"
                                to="/register"
                                exact="true"
                              >
                                <AiOutlineLogout /> Đăng ký
                              </NavLink>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div onClick={() => onChangeSidebar()}> 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
