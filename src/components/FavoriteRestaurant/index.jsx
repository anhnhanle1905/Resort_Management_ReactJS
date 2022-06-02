import React from "react";
import "./styles.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
export default function FavoriteRestaurant() {
  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
  const flase_sale = [
    {
      id: 1,
      img: "https://pasgo.vn/Upload/anh-diem-den/hotpot-story-vincom-nguyen-chi-thanh-300-136376281540.jpg",
    },
    {
      id: 2,
      img: "https://pasgo.vn/Upload/anh-diem-den/hem-quan-hoang-cau-300-12961690845.jpg",

    },
    {
      id: 3,
      img: "https://pasgo.vn/Upload/anh-diem-den/botanica-thai-bistro-le-van-huu-300-184496461891.jpg",

    },
    {
      id: 4,
      img: "https://pasgo.vn/Upload/anh-diem-den/sushi-kei-aeon-mall-long-bien-300-13213461366.jpg",
    },
    {
      id: 5,
      img: "https://pasgo.vn/Upload/anh-diem-den/nha-hang-tru-ky-hotpot-tran-nhan-tong-300-135885342872.jpg",
    },
    
  ];
  return (
    <div className="home-main flash_sale-component body-container">
      <div className="favorite_room_header">
        <h2 className="favorite_room_header-title">OUR FAVORITE RESTAURANT</h2>
      </div>
      <div className="home-maim flash_sale-content">
        <div className="home-main flash_sale-center">
          <div className="home-main flash_sale-header">
            <div className="home-main flash_sale-left"></div>
          </div>
          <div className="home-main flash_sale-main">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={3}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              {flase_sale.map((e, index) => {
                return (
                  <SwiperSlide key={index}>
                    <a className="flash_sale-item">
                      <div className="home-main flash_sale-item-content">
                        <div className="home-main flase_sale-up">
                          <div className="home-main  flase_sale-599">
                            <div className="home-main false_slae-204"></div>
                            <div className="home-main false_sale-img">
                              <img src={e.img} alt="" />
                            </div>
                          </div>
                          <div className="home-main flash_sale-btn">
                            <span className="home-main flash_sale-icon">
                              <svg
                                width="28"
                                height="28"
                                fill="none"
                                className="svgFillAll jss603"
                              >
                                <g filter="url(#icon_heart_svg__filter0_d)">
                                  <path
                                    d="M9.318 3c-1.479 0-2.897.661-3.895 1.811C4.259 6.16 3.786 8.054 4.09 10.15c.683 4.708 5.546 8.674 9.911 10.468 4.363-1.794 9.223-5.76 9.91-10.468.303-2.096-.17-3.991-1.334-5.339C21.581 3.661 20.161 3 18.684 3c-1.49 0-2.885.68-3.929 1.915l-.75.89-.752-.89C12.204 3.681 10.81 3 9.318 3z"
                                    fill="#000"
                                    stroke="#fff"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                </g>
                                <defs>
                                  <filter
                                    id="icon_heart_svg__filter0_d"
                                    x="-1"
                                    y="0"
                                    width="30"
                                    height="30"
                                    filterUnits="userSpaceOnUse"
                                    colorInterpolationFilters="sRGB"
                                  >
                                    <feFlood
                                      floodOpacity="0"
                                      result="BackgroundImageFix"
                                    ></feFlood>
                                    <feColorMatrix
                                      in="SourceAlpha"
                                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    ></feColorMatrix>
                                    <feOffset dy="3"></feOffset>
                                    <feGaussianBlur stdDeviation="1.5"></feGaussianBlur>
                                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"></feColorMatrix>
                                    <feBlend
                                      in2="BackgroundImageFix"
                                      result="effect1_dropShadow"
                                    ></feBlend>
                                    <feBlend
                                      in="SourceGraphic"
                                      in2="effect1_dropShadow"
                                      result="shape"
                                    ></feBlend>
                                  </filter>
                                </defs>
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </a>
                    <figcaption className="favorite-figcaption">
                      <h4 className="favorite-figcaption-h4">
                        <a href="/ListRoom">Hotpot story</a>
                      </h4>
                      <div className="home-main flase_sale-raise">
                        <div className="home-main falsh_sale-raise-star">
                          <div className="home-main flash_sale-raise-content">
                            <svg
                              width="14"
                              height="14"
                              fill="none"
                              className="svgFillAll jss658"
                              style={{
                                stroke: "rgb(255, 188, 57)",
                                fill: "rgb(255, 188, 57)",
                              }}
                            >
                              <path
                                d="M12.464 5.684a1.055 1.055 0 00-.849-.719L9.078 4.6 7.94 2.31a1.05 1.05 0 00-1.88 0L4.925 4.598l-2.536.367a1.057 1.057 0 00-.87 1.292c.047.191.148.365.29.502L3.64 8.534l-.433 2.51a1.05 1.05 0 001.521 1.107l2.272-1.188 2.273 1.19a1.05 1.05 0 001.522-1.108l-.435-2.51 1.832-1.776a1.05 1.05 0 00.271-1.075z"
                                fill="#FFBC39"
                              ></path>
                            </svg>
                            <svg
                              width="14"
                              height="14"
                              fill="none"
                              className="svgFillAll jss658"
                              style={{
                                stroke: "rgb(255, 188, 57)",
                                fill: "rgb(255, 188, 57)",
                              }}
                            >
                              <path
                                d="M12.464 5.684a1.055 1.055 0 00-.849-.719L9.078 4.6 7.94 2.31a1.05 1.05 0 00-1.88 0L4.925 4.598l-2.536.367a1.057 1.057 0 00-.87 1.292c.047.191.148.365.29.502L3.64 8.534l-.433 2.51a1.05 1.05 0 001.521 1.107l2.272-1.188 2.273 1.19a1.05 1.05 0 001.522-1.108l-.435-2.51 1.832-1.776a1.05 1.05 0 00.271-1.075z"
                                fill="#FFBC39"
                              ></path>
                            </svg>
                            <svg
                              width="14"
                              height="14"
                              fill="none"
                              className="svgFillAll jss658"
                              style={{
                                stroke: "rgb(255, 188, 57)",
                                fill: "rgb(255, 188, 57)",
                              }}
                            >
                              <path
                                d="M12.464 5.684a1.055 1.055 0 00-.849-.719L9.078 4.6 7.94 2.31a1.05 1.05 0 00-1.88 0L4.925 4.598l-2.536.367a1.057 1.057 0 00-.87 1.292c.047.191.148.365.29.502L3.64 8.534l-.433 2.51a1.05 1.05 0 001.521 1.107l2.272-1.188 2.273 1.19a1.05 1.05 0 001.522-1.108l-.435-2.51 1.832-1.776a1.05 1.05 0 00.271-1.075z"
                                fill="#FFBC39"
                              ></path>
                            </svg>
                            <svg
                              width="14"
                              height="14"
                              fill="none"
                              className="svgFillAll jss658"
                              style={{
                                stroke: "rgb(255, 188, 57)",
                                fill: "rgb(255, 188, 57)",
                              }}
                            >
                              <path
                                d="M12.464 5.684a1.055 1.055 0 00-.849-.719L9.078 4.6 7.94 2.31a1.05 1.05 0 00-1.88 0L4.925 4.598l-2.536.367a1.057 1.057 0 00-.87 1.292c.047.191.148.365.29.502L3.64 8.534l-.433 2.51a1.05 1.05 0 001.521 1.107l2.272-1.188 2.273 1.19a1.05 1.05 0 001.522-1.108l-.435-2.51 1.832-1.776a1.05 1.05 0 00.271-1.075z"
                                fill="#FFBC39"
                              ></path>
                            </svg>
                            <svg
                              width="14"
                              height="14"
                              fill="none"
                              style={{
                                stroke: "rgb(255, 188, 57)",
                                fill: "rgb(255, 188, 57)",
                              }}
                              className="svgFillAll jss658"
                            >
                              <path
                                d="M12.464 5.684a1.055 1.055 0 00-.849-.719L9.078 4.6 7.94 2.31a1.05 1.05 0 00-1.88 0L4.925 4.598l-2.536.367a1.057 1.057 0 00-.87 1.292c.047.191.148.365.29.502L3.64 8.534l-.433 2.51a1.05 1.05 0 001.521 1.107l2.272-1.188 2.273 1.19a1.05 1.05 0 001.522-1.108l-.435-2.51 1.832-1.776a1.05 1.05 0 00.271-1.075z"
                                fill="#FFBC39"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="home-main falsh_sale-dd">
                        <span
                          className="home-main flash_sale-dd-icon"
                          style={{ marginRight: "4px" }}
                        >
                          <svg width="16" height="16" fill="none">
                            <path
                              d="M8.467 3.8V2a1 1 0 00-1-1h-.8a1 1 0 00-1 1v1.8"
                              stroke="#1A202C"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M1 7.467a1 1 0 001 1h9.838a1 1 0 00.64-.232l1.6-1.333a1 1 0 000-1.537l-1.6-1.333a1 1 0 00-.64-.232H2a1 1 0 00-1 1v2.667zM5.667 10.333V14a1 1 0 001 1h.8a1 1 0 001-1v-3.667"
                              stroke="#1A202C"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </span>
                        <span className="home-main flase_sale-dd-name">
                          Hà Nội
                        </span>
                      </div>

                      <div className="list-view-detail">
                      <span>
                        <a href="/Restaurant" className="button btn_sm btn_blue">
                          VIEW DETAILS
                        </a>
                      </span>
                      </div>
                    </figcaption>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
        <div className="mt40 a_center">
          <a className="button btn_sm btn_yellow" href="/Restaurant">
            VIEW ROOMS LIST
          </a>
        </div>
      </div>
    </div>
  );
}
