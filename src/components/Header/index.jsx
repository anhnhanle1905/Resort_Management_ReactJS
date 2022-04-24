import React from "react";
import "./styles.css";
import Left_Menu from "../LeftMenu";
import { useState } from "react";
import { useEffect } from "react";
const Header = () => {
  const [show, setShow] = React.useState(false);
  const [isSignUp,setIsSignUp] = React.useState(false)
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
        <div className="home-main home-component-up">
          <video
            width="100%"
            height="488px"
            type="video/mp4"
            loop
            muted
            autoPlay
          >
            <source src="https://storage.googleapis.com/tripi-assets/mytour/videos/video_bg_mytour.mov" />
            Your browser does not support the video tag.
          </video>
        </div>
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
                    className="main-element link-event link-event-delay active color-main"
                    style={{ cursor: "pointer" }}
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
                    target="_blank"
                    style={{
                      marginRight: "24px",
                      textDecoration: "none",
                      // color: "rgb(255, 255, 255)",
                    }}
                  >
                    Khách sạn
                  </a>
                  <a
                    className="main-element link-event link-event-delay single-navbar color-main"
                    target="_blank"
                    style={{
                      marginRight: "24px",
                      textDecoration: "none",
                      // color: "rgb(255, 255, 255)",
                    }}
                  >
                    Chuyến bay
                  </a>
                  <a
                    className="main-element link-event link-event-delay single-navbar color-main"
                    target="_blank"
                    style={{
                      marginRight: "24px",
                      textDecoration: "none",
                      // color: "rgb(255, 255, 255)",
                    }}
                  >
                    Nhà hàng
                  </a>
                  <a
                    className="main-element link-event link-event-delay single-navbar color-main"
                    target="_blank"
                    style={{
                      marginRight: "24px",
                      textDecoration: "none",
                      // color: "rgb(255, 255, 255)",
                    }}
                  >
                    <div
                      className="free-ship-header"
                      style={{ color: "color: rgb(255, 255, 255)" }}
                    >
                      Free ship
                    </div>
                    Đặc sản - Myfresh
                  </a>
                  <a
                    className="main-element link-event link-event-delay single-navbar color-main"
                    target="_blank"
                    style={{
                      marginRight: "24px",
                      textDecoration: "none",
                      // color: "rgb(255, 255, 255)",
                    }}
                  >
                    Tour &amp; Sự kiện
                  </a>
                </div>
                <div className="home main home-navbar-right">
                  <a
                    className="main-element link-event link-event-delay home-header-gift  color-main"
                    target="_blank"
                    style={{ textDecoration: "none" }}
                  >
                    <svg
                      width="16"
                      height="16"
                      fill="none"
                      className="svgFillAll"
                      style={{
                        stroke: "rgb(255, 255, 255)",
                        marginRight: "8px",
                      }}
                    >
                      <g clipPath="url(#icon_gif_box_svg__clip0)" fill="#fff">
                        <path d="M8.666 8A.333.333 0 009 8.333h5.666a1.169 1.169 0 001.167-1.166V5.833a1.168 1.168 0 00-1.167-1.166H9A.333.333 0 008.666 5v3zM2.5 8.333h4.833A.333.333 0 007.666 8V5a.333.333 0 00-.333-.333h-6A1.168 1.168 0 00.167 5.833v1.334a1.169 1.169 0 001.166 1.166H2.5zM7.667 9.667a.333.333 0 00-.334-.334h-5.5a.333.333 0 00-.333.334v5.166A1.169 1.169 0 002.667 16h4.666a.333.333 0 00.334-.333v-6zM9 9.333a.333.333 0 00-.334.334v6A.333.333 0 009 16h4.333a1.168 1.168 0 001.167-1.167V9.667a.333.333 0 00-.334-.334H9z"></path>
                        <path d="M8.695 4.471a.667.667 0 00.63.176c.788-.193 2.686-.703 3.266-1.283A1.972 1.972 0 109.8.577c-.505.504-.986 2.051-1.283 3.266a.694.694 0 00.178.628zm2.05-2.952a.638.638 0 11.902.902 5.99 5.99 0 01-1.523.622 5.948 5.948 0 01.62-1.524zM7.814 3.84c-.296-1.21-.777-2.758-1.28-3.263a1.972 1.972 0 10-2.79 2.787c.578.58 2.476 1.09 3.266 1.283a.667.667 0 00.63-.176.694.694 0 00.174-.63zM4.687 2.422a.638.638 0 01.901-.902c.277.477.486.99.62 1.524a5.93 5.93 0 01-1.521-.622z"></path>
                      </g>
                      <defs>
                        <clipPath id="icon_gif_box_svg__clip0">
                          <path fill="#fff" d="M0 0h16v16H0z"></path>
                        </clipPath>
                      </defs>
                    </svg>
                    Giới thiệu nhận quà
                  </a>
                  <a
                    className="main-element link-event link-event-delay home-header-gift color-main"
                    style={{ textDecoration: "none" }}
                  >
                    <svg
                      width="20"
                      height="20"
                      fill="none"
                      className="svgFillAll"
                      style={{
                        stroke: "rgb(255, 255, 255)",
                        marginRight: "8px",
                      }}
                    >
                      <path
                        d="M11.545 6.364L9.867 8.042a3.09 3.09 0 01-4.37 0l-.133-.133L9.172 4.1a5.465 5.465 0 017.727 0v0a5.467 5.467 0 01.828 6.668"
                        stroke="#fff"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M12.523 8.887l2.792 2.792a2.318 2.318 0 010 3.278l-1.264 1.264a4.635 4.635 0 01-6.557 0L3.1 11.827a5.464 5.464 0 010-7.727v0a5.446 5.446 0 013.809-1.6M14.938 15.334l-3.007-3.006M12.714 17.154L9.91 14.35"
                        stroke="#fff"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    Hợp tác với chúng tôi
                  </a>
                  <span
                    className="home-main jss1754 home-header-gift"
                    // style={{color:'rgb(255, 255, 255)'}}
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
                        stroke="#4A5568"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    1900 2083
                  </span>
                  <div className="home-main jss1755">
                    <div className="home-main jss1756 jss1195">
                      <div className="home-main jss1757 jss1200">
                        <svg
                          width="20"
                          height="20"
                          fill="none"
                          className="svgFillAll"
                          style={{ stroke: "rgb(255, 255, 255)" }}
                        >
                          <path
                            d="M8.333 4.167a1.667 1.667 0 013.334 0 5.833 5.833 0 013.333 5v2.5a3.333 3.333 0 001.667 2.5H3.333A3.334 3.334 0 005 11.667v-2.5a5.833 5.833 0 013.333-5"
                            stroke="#fff"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M7.5 14.166V15a2.5 2.5 0 105 0v-.834"
                            stroke="#fff"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="home-main jss1758">
                    <div
                      className="home-main jss1759 home-header-ring"
                      style={{ color: "black" }}
                    >
                      <div className="home-main home-header-ring-content"
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
                            stroke="#4A5568"
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
                            stroke="#1A202C"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </div>
                      <div
                        className={ isSignUp ? 'home-main btn-dn-dk' :'home-main btn-dn-dk isdisplay'}
                        style={{ right: '-26px'}}

                      >
                        <div className="home-main btn-dn-dk-main">
                          <div className="home-main header-btn"></div>
                          <div className="home-main btn-dangnhap">
                            <div className="home-main btn-dangnhap-lable">
                              Đăng nhập
                            </div>
                          </div>
                          <div className="home-main btn-dangki">
                            <div className="home-main btn-dangki-label">Đăng ký</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div onClick={() => onChangeSidebar()}>
                    <svg
                      width="24"
                      height="24"
                      fill="none"
                      className="svgFillAll"
                      style={{
                        stroke: "rgb(255, 255, 255)",
                        cursor: "pointer",
                        marginLeft: "24px",
                      }}
                    >
                      <path
                        d="M4 6h16M4 12h16M4 18h16"
                        stroke="#1A202C"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-main home-header-center">
              <div className="home-main home-headr-center-main">
                <div className="home-main home-header-center-main-up">
                  <div className="home-main home-header-center-main-up-content">
                    <div className="home-main home-header-ks">
                      <span
                        className="home-main home-header-ks-content"
                        style={{ marginRight: "8px" }}
                      >
                        <svg
                          width="20"
                          height="20"
                          fill="none"
                          className="svgFillAll"
                        >
                          <path
                            d="M2.5 4.75h11.25a.375.375 0 00.351-.507l-.943-2.513A1.131 1.131 0 0012.105 1h-7.96a1.131 1.131 0 00-1.05.73l-.946 2.513a.375.375 0 00.351.507zM18.25 17.5h-1.125a.188.188 0 01-.188-.188v-.357a.184.184 0 01.114-.167 1.681 1.681 0 001.012-1.538 50.433 50.433 0 00-1.328-5.355.391.391 0 00-.72 0 50.433 50.433 0 00-1.328 5.355 1.682 1.682 0 001.013 1.538.185.185 0 01.113.168v.357a.187.187 0 01-.187.187h-2.438a.188.188 0 01-.188-.188V5.688a.188.188 0 00-.188-.187H3.438a.187.187 0 00-.188.188v11.625a.188.188 0 01-.188.187H1.75a.75.75 0 100 1.5h16.5a.75.75 0 100-1.5zM5.125 7.562H7a.563.563 0 110 1.125H5.125a.563.563 0 110-1.124zM4.562 11.5a.562.562 0 01.563-.563H7a.563.563 0 010 1.126H5.125a.563.563 0 01-.563-.563zm4.688 5.813a.188.188 0 01-.188.187H7.188A.188.188 0 017 17.312v-1.687a1.125 1.125 0 012.25 0v1.688zm1.875-5.25H9.25a.562.562 0 010-1.126h1.875a.562.562 0 110 1.126zm0-3.376H9.25a.562.562 0 110-1.124h1.875a.562.562 0 110 1.125z"
                            fill="black"
                          ></path>
                        </svg>
                      </span>
                      Khách sạn
                      <div className="home-main home-header-minus">-300k</div>
                    </div>
                    <div className="home-main home-header-cb">
                      <span
                        className="home-main home-header-cb-content"
                        style={{ marginRight: "8px" }}
                      >
                        <svg
                          width="20"
                          height="20"
                          fill="none"
                          className="svgFillAll"
                        >
                          <path
                            d="M5.073 5.269l3.25 1.345a.417.417 0 00.326 0l3.46-1.506a.209.209 0 000-.383L7.703 2.904a.838.838 0 00-.639 0l-1.99.826a.833.833 0 000 1.539z"
                            fill="#1A202C"
                          ></path>
                          <path
                            d="M19.656 5.043a2.083 2.083 0 00-2.722-1.127h-.006L5.895 8.718a.417.417 0 01-.352-.01l-1.98-.99a.843.843 0 00-.701-.02l-2.172.93a.833.833 0 00-.262 1.357l3.12 3.12a.833.833 0 00.899.185l4.68-1.874a.207.207 0 01.273.266l-1.63 4.35a.833.833 0 001.153 1.038l2.258-1.13a.833.833 0 00.375-.373l3.124-6.25a.416.416 0 01.228-.204l3.62-1.35a2.083 2.083 0 001.128-2.72z"
                            fill="#1A202C"
                          ></path>
                        </svg>
                      </span>
                      Chuyến bay
                      <div className="home-main home-header-cb-minus">-50k</div>
                    </div>
                    <div className="home-main home-header-nh">
                      <span
                        className="home-main"
                        style={{ marginRight: "8px" }}
                      >
                        <svg
                          width="20"
                          height="20"
                          fill="none"
                          className="svgFillAll"
                        >
                          <path
                            d="M17.466 16.316l-5.794-5.225 1.381-1.521c.375-.416.951-.56 1.492-.416a3.372 3.372 0 003.261-.872c1.32-1.32 3.005-4.403 1.314-6.094-1.69-1.69-4.773-.005-6.093 1.315a3.372 3.372 0 00-.872 3.26c.144.541 0 1.118-.416 1.493l-1.6 1.452-1.142-1.03a1.079 1.079 0 01-.317-1.136 3.379 3.379 0 00-.812-3.473l-.33-.334-2.433-2.433a.527.527 0 00-.782.04c-.174.213-.137.531.058.726L6.793 4.48l-.598.598-.003.003L3.78 2.669c-.195-.195-.512-.232-.726-.058a.527.527 0 00-.04.782l2.433 2.433-.6.6-2.413-2.411c-.194-.195-.512-.233-.726-.058a.527.527 0 00-.04.782l2.433 2.433-.6.6L1.089 5.36c-.195-.194-.513-.232-.726-.057a.527.527 0 00-.04.781l2.433 2.434.261.258c.948.945 2.33 1.263 3.531.878.414-.133.869.01 1.16.334l7.67 8.505a1.511 1.511 0 002.276-.035c.536-.63.427-1.588-.188-2.142z"
                            fill="#1A202C"
                          ></path>
                          <path
                            d="M8.222 11.629a.126.126 0 00-.183-.014l-5.223 4.743a1.512 1.512 0 00.035 2.276c.63.535 1.588.426 2.142-.188l3.917-4.314c.408-.45.427-1.13.045-1.6l-.733-.903z"
                            fill="#1A202C"
                          ></path>
                        </svg>
                      </span>
                      Nhà hàng
                      <div className="home-main home-header-nh-minus">
                        Đặt bàn
                      </div>
                    </div>
                    <div className="home-main home-main-devider"></div>
                  </div>
                </div>
                <div
                  className="home-main home-header-center-main-down"
                  style={{ width: "100%" }}
                >
                  <div className="home-main home-header-down">
                    <div>
                      <div className="home-main home-header-down-center">
                        <div
                          className="home-main home-header-down-1"
                          style={{ marginLeft: "16px" }}
                        >
                          <div
                            className="home-main home-header-down-1-1"
                            style={{ position: "relative" }}
                          >
                            <div className="home-main home-header-down-dd">
                              Địa điểm
                            </div>
                            <div className="home-main">
                              <div className="main-container main-container-center home-header-search-dd">
                                <input
                                  autoComplete="off"
                                  id="input-search-hotel"
                                  placeholder="Thành phố, khách sạn, điểm đến"
                                  className="input-main input-main-container home-header-ip"
                                />
                              </div>
                              <div
                                className="home-header-after-ip"
                                style={{ background: "transparent" }}
                              ></div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="home-main-header-down-2"
                          style={{ borderLeft: "1px solid #E2E8F0" }}
                        >
                          <div className="home-main home-headr-time">
                            <div className="home-main home-header-time-1">
                              Ngày đến
                              <div className="home-main home-header-time-1-1">
                                T3,
                              </div>
                              <div className="home-main home-header-time-nd"></div>
                            </div>
                            <div className="home-main home-header-time-2">
                              <span className="home-main home-header-day">
                                1
                              </span>
                              <svg width="10" height="9" fill="none">
                                <path
                                  d="M4.982.504h.173A3.319 3.319 0 008.66 6.01 3.982 3.982 0 114.982.5v.004z"
                                  stroke="#718096"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </svg>
                            </div>
                            <div className="home-main home-header-time-3">
                              Ngày về
                              <div className="home-main home-header-day2">
                                T4,
                              </div>
                              <div className="home-main home-header-time-3-span"></div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="home-main home-header-down-3"
                          style={{ borderLeft: "1px solid #E2E8F0" }}
                        >
                          <div className="home-main home-header-pk">
                            <div
                              className="home-main"
                              style={{ position: "relative" }}
                            >
                              <div className="home-main home-header-pk-name">
                                Số phòng, số khách
                              </div>
                              <div className="home-main home-header-pk-phong">
                                1 phòng, 2 người lớn, 0 trẻ em
                              </div>
                              <div className="home-header-pk-phong-line"></div>
                            </div>
                          </div>
                        </div>
                        <button className="home-main btn-header">
                          <span className="header-lb">
                            <svg
                              width="23"
                              height="24"
                              fill="none"
                              className="svgFillAll"
                              style={{ stroke: "rgb(255, 255, 255)" }}
                            >
                              <path
                                d="M21.312 22.5l-4.742-4.742m2.71-7.451a8.806 8.806 0 11-17.613 0 8.806 8.806 0 0117.613 0z"
                                stroke="#fff"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                            </svg>
                          </span>
                          <span className="home-header-span"></span>
                        </button>
                      </div>
                    </div>
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
