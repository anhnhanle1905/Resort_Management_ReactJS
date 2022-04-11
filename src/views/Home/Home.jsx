import React from 'react'
import Header from '../../components/Header/index'
import Footer from '../../components/Footer/index'
import "./Home.css";
import Slider from "react-slick";
export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="w-screen overflow-hidden relative">
      <Header />
      <main>
        <div className="MuiBox-root jss139 jss1">
          <div className="MuiBox-root jss1200 jss140">
            {/* <Slider {...settings}>
              <div>
                <h3>1</h3>
              </div>
              <div>
                <h3>2</h3>
              </div>
              <div>
                <h3>3</h3>
              </div>
              <div>
                <h3>4</h3>
              </div>
              <div>
                <h3>5</h3>
              </div>
              <div>
                <h3>6</h3>
              </div>
            </Slider> */}
          </div>
          <div class="MuiBox-root jss150 jss2">
            <div class="MuiBox-root jss156 jss151">
              <div class="MuiBox-root jss157 jss152">
                <span class="MuiBox-root jss158">
                  <img
                    src="https://storage.googleapis.com/tripi-assets/mytour/icons/icon_total_hotel.svg"
                    alt="logo_total_hotel"
                    // style="width:52px;height:52px"
                  />
                </span>
                <div class="MuiBox-root jss159 jss155">
                  <span class="MuiBox-root jss160">
                    Hơn 8000+ khách sạn dọc Việt Nam
                  </span>
                  <span class="MuiBox-root jss161 jss154">
                    Hàng nghìn khách sạn, đặc biệt là 4 sao và 5 sao, cho phép
                    bạn thoải mái lựa chọn, giá cạnh tranh, phong phú.
                  </span>
                </div>
              </div>
              <div class="MuiBox-root jss162 jss152">
                <span class="MuiBox-root jss163">
                  <img
                    src="https://storage.googleapis.com/tripi-assets/mytour/icons/icon_best_price.svg"
                    alt="logo_best_price"
                    // style="width:52px;height:52px"
                  />
                </span>
                <div class="MuiBox-root jss164 jss155">
                  <span class="MuiBox-root jss165">Giá tốt sát ngày</span>
                  <span class="MuiBox-root jss166 jss154">
                    Cam kết giá tốt nhất khi đặt gần ngày cho chuyến đi của bạn.
                  </span>
                </div>
              </div>
              <div class="MuiBox-root jss167 jss152">
                <span class="MuiBox-root jss168">
                  <img
                    src="https://storage.googleapis.com/tripi-assets/mytour/icons/icon_support_247.svg"
                    alt="logo_support_247"
                    // style="width:52px;height:52px"
                  />
                </span>
                <div class="MuiBox-root jss169 jss155">
                  <span class="MuiBox-root jss170">Hỗ trợ khách hàng 24/7</span>
                  <span class="MuiBox-root jss171 jss154">
                    Chat là có, gọi là nghe, không quản đêm hôm, ngày nghỉ và
                    ngày lễ.
                  </span>
                </div>
              </div>
              <div class="MuiBox-root jss172 jss152">
                <span class="MuiBox-root jss173">
                  <img
                    src="https://storage.googleapis.com/tripi-assets/mytour/icons/icon_payment.svg"
                    alt="logo_payment"
                    // style="width:52px;height:52px"
                  />
                </span>
                <div class="MuiBox-root jss174 jss155">
                  <span class="MuiBox-root jss175">
                    Thanh toán dễ dàng, đa dạng
                  </span>
                  <span class="MuiBox-root jss176 jss154">
                    Bao gồm thêm chuyển khoản ngân hàng và tiền mặt tại cửa
                    hàng.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="lazyload-wrapper">
            <div className="MuiBox-root jss388 jss349">
              <div className="MuiBox-root jss389 jss31">
                <div class="MuiBox-root jss390 jss364">
                  <div class="MuiBox-root jss391 jss365">
                    <img
                      src="https://storage.googleapis.com/tripi-assets/mytour/icons/icon_flashSale_home_white_new.png"
                      alt="icon flash"
                      class="jss353"
                    />
                    <div class="MuiBox-root jss392 jss358">
                      <span class="MuiBox-root jss393">
                        Chương trình sẽ diễn ra trong
                      </span>
                      <div class="MuiBox-root jss397 jss394">
                        <div class="MuiBox-root jss398 jss395 jss359">00</div>
                        <span class="MuiBox-root jss399 jss396 jss360">
                          {" "}
                          :{" "}
                        </span>
                        <div class="MuiBox-root jss400 jss395 jss359">00</div>
                        <span class="MuiBox-root jss401 jss396 jss360">
                          {" "}
                          :{" "}
                        </span>
                        <div class="MuiBox-root jss402 jss395 jss359">00</div>
                      </div>
                    </div>
                  </div>
                  <div class="MuiBox-root jss403 jss355">
                    <div class="MuiBox-root jss404 jss356 home-1">
                      <span class="MuiBox-root jss405">12:00-13:00</span>
                      <span class="MuiBox-root jss406 jss357">Đã kết thúc</span>
                    </div>
                    <div class="MuiBox-root jss407 jss356 home-1">
                      <span class="MuiBox-root jss408">15:00-16:00</span>
                      <span class="MuiBox-root jss409 jss357">Đã kết thúc</span>
                    </div>
                    <div
                      class="MuiBox-root jss410 jss356 home-2"
                      // style="background: rgb(255, 51, 102); color: rgb(255, 255, 255); cursor: pointer; pointer-events: visible; text-transform: inherit;"
                    >
                      <span class="MuiBox-root jss411">21:00-22:00</span>
                      <span class="MuiBox-root jss412 jss357">Sắp diễn ra</span>
                    </div>
                    <div
                      class="MuiBox-root jss413 jss356 home-2"
                      // style="background: rgba(255, 51, 102, 0.1); color: rgb(255, 51, 102); cursor: pointer; pointer-events: visible; text-transform: inherit;"
                    >
                      <span class="MuiBox-root jss414">09:00-10:00</span>
                      <span class="MuiBox-root jss415 jss357">09/4</span>
                    </div>
                    <div
                      class="MuiBox-root jss416 jss356 home-2"
                      // style="background: rgba(255, 51, 102, 0.1); color: rgb(255, 51, 102); cursor: pointer; pointer-events: visible; text-transform: inherit;"
                    >
                      <span class="MuiBox-root jss417">12:00-13:00</span>
                      <span class="MuiBox-root jss418 jss357">09/4</span>
                    </div>
                    <div
                      class="MuiBox-root jss419 jss356 home-2"
                      // style="background: rgba(255, 51, 102, 0.1); color: rgb(255, 51, 102); cursor: pointer; pointer-events: visible; text-transform: inherit;"
                    >
                      <span class="MuiBox-root jss420">15:00-16:00</span>
                      <span class="MuiBox-root jss421 jss357">09/4</span>
                    </div>
                  </div>
                </div>
                {/* //Slick slider */}
                <div class="MuiBox-root jss1196">
                  <a
                    class="MuiTypography-root MuiLink-root MuiLink-underlineHover jss363 MuiTypography-colorPrimary"
                    target="_blank"
                    href="/uu-dai/khach-san-88"
                  >
                    <button
                      class="MuiButtonBase-root MuiButton-root MuiButton-text jss344 jss1197"
                      tabindex="0"
                      type="button"
                    >
                      <span class="MuiButton-label">
                        <div class="MuiBox-root jss1198">
                          <div class="MuiBox-root jss1199" opacity="1">
                            Xem thêm
                          </div>
                        </div>
                      </span>
                      <span class="MuiTouchRipple-root"></span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="lazyload-wrapper">
            <div
              className="MuiBox-root jss465"
              style={{ marginBottom: "44px" }}
            >
              <div className="MuiBox-root jss476 jss466">
                <div className="MuiBox-root jss477">
                  <div className="MuiBox-root jss478">
                    <div className="MuiBox-root jss479 jss468">
                      <p className="MuiTypography-root jss469 MuiTypography-body1">
                        Chuyến bay giá tốt{" "}
                      </p>
                      <div className="MuiBox-root jss480">
                        <h4
                          className="MuiTypography-root MuiTypography-h4"
                          style={{ marginLeft: "8px" }}
                        >
                          từ{" "}
                        </h4>
                        <h4
                          className="MuiTypography-root MuiTypography-h4"
                          style={{
                            marginLeft: "8px",
                            marginRight: "8px",
                            color: "rgb(255, 51, 102)",
                            cursor: "pointer",
                          }}
                        >
                          Hồ Chí Minh
                        </h4>
                        <svg
                          width="10"
                          height="6"
                          fill="none"
                          className="svgFillAll"
                          style={{
                            marginTop: "12px",
                            stroke: "rgb(255, 51, 102)",
                            cursor: "pointer",
                            transform: "rotate(180deg)",
                          }}
                        >
                          <path
                            d="M1 5l4-4 4 4"
                            stroke="#00B6F3"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <p className="MuiTypography-root jss471 MuiTypography-body2">
                      Những chuyến bay giá tốt nhất trong tháng khởi hành từ
                      TP.Hồ Chí Minh
                    </p>
                  </div>
                  <a
                    className="MuiTypography-root MuiLink-root MuiLink-underlineHover jss475 MuiTypography-colorPrimary"
                    target="_blank"
                    href="/ve-may-bay/tu/H%E1%BB%93%20Ch%C3%AD%20Minh.SGN"
                  >
                    <button
                      className="MuiButtonBase-root MuiButton-root MuiButton-text jss344 jss483"
                      tabindex="0"
                      type="button"
                    >
                      <span className="MuiButton-label">
                        <div className="MuiBox-root jss484">
                          <div className="MuiBox-root jss485" opacity="1">
                            Khám phá ngay
                          </div>
                        </div>
                      </span>
                      <span className="MuiTouchRipple-root"></span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
            {/* slider */}
          </div>
          <div className="lazyload-wrapper">
            <div className="MuiBox-root jss595 jss512">
              <div className="MuiBox-root jss596 jss513">
                <div className="MuiBox-root jss597 jss529">
                  <div className="MuiBox-root jss598 jss515">
                    <div className="jss200 jss526">
                      <div
                        className="jss201 jss204"
                        style={{ borderRadius: "0px" }}
                      ></div>
                      <div className="lazyload-wrapper">
                        <img
                          src="https://storage.googleapis.com/tripi-assets/mytour/icons/icon_mytour_mall_red.svg"
                          className="jss203 jss526"
                          alt=""
                        />
                      </div>
                    </div>
                    <p className="MuiTypography-root jss517 MuiTypography-body2">
                      Các thương hiệu khách sạn đối tác hàng đầu
                    </p>
                  </div>
                  <a
                    className="MuiTypography-root MuiLink-root MuiLink-underlineHover jss525 MuiTypography-colorPrimary"
                    href="/thuong-hieu-khach-san-hang-dau"
                  >
                    <button
                      className="MuiButtonBase-root MuiButton-root MuiButton-text jss344 jss599 jss483"
                      tabindex="0"
                      type="button"
                    >
                      <span className="MuiButton-label">
                        <div className="MuiBox-root jss600">
                          <div className="MuiBox-root jss601" opacity="1">
                            Khám phá ngay
                          </div>
                        </div>
                      </span>
                      <span className="MuiTouchRipple-root"></span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="lazyload-wrapper">
            <div className="MuiBox-root jss2609 jss2600">
              <div className="MuiBox-root jss2610 jss2601">
                <div
                  className="MuiBox-root jss2611 jss2602"
                  style={{ marginBottom: "32px" }}
                >
                  <p className="MuiTypography-root jss2604 MuiTypography-body2">
                    Khách sạn giá sốc chỉ có trên Mytour
                  </p>
                  <div className="MuiBox-root jss2612 jss2605">
                    <button
                      className="MuiButtonBase-root MuiButton-root MuiButton-text jss2009 jss2613 jss2606 jss2607"
                      tabindex="0"
                      type="button"
                    >
                      <span className="MuiButton-label">
                        <div className="MuiBox-root jss2614">
                          <div className="MuiBox-root jss2615" opacity="1">
                            Phú Quốc
                          </div>
                        </div>
                      </span>
                      <span className="MuiTouchRipple-root"></span>
                    </button>
                    <button
                      className="MuiButtonBase-root MuiButton-root MuiButton-text jss2009 jss2616 jss2606"
                      tabindex="0"
                      type="button"
                    >
                      <span className="MuiButton-label">
                        <div className="MuiBox-root jss2617">
                          <div className="MuiBox-root jss2618" opacity="1">
                            Nha Trang
                          </div>
                        </div>
                      </span>
                      <span className="MuiTouchRipple-root"></span>
                    </button>
                    <button
                      className="MuiButtonBase-root MuiButton-root MuiButton-text jss2009 jss2619 jss2606"
                      tabindex="0"
                      type="button"
                    >
                      <span className="MuiButton-label">
                        <div className="MuiBox-root jss2620">
                          <div className="MuiBox-root jss2621" opacity="1">
                            Hồ Chí Minh
                          </div>
                        </div>
                      </span>
                      <span className="MuiTouchRipple-root"></span>
                    </button>
                    <button
                      className="MuiButtonBase-root MuiButton-root MuiButton-text jss2009 jss2622 jss2606"
                      tabindex="0"
                      type="button"
                    >
                      <span className="MuiButton-label">
                        <div className="MuiBox-root jss2623">
                          <div className="MuiBox-root jss2624" opacity="1">
                            Đà Nẵng
                          </div>
                        </div>
                      </span>
                      <span className="MuiTouchRipple-root"></span>
                    </button>
                    <button
                      className="MuiButtonBase-root MuiButton-root MuiButton-text jss2009 jss2625 jss2606"
                      tabindex="0"
                      type="button"
                    >
                      <span className="MuiButton-label">
                        <div className="MuiBox-root jss2626">
                          <div className="MuiBox-root jss2627" opacity="1">
                            Bà Rịa - Vũng Tàu
                          </div>
                        </div>
                      </span>
                      <span className="MuiTouchRipple-root"></span>
                    </button>
                    <button
                      className="MuiButtonBase-root MuiButton-root MuiButton-text jss2009 jss2628 jss2606"
                      tabindex="0"
                      type="button"
                    >
                      <span className="MuiButton-label">
                        <div className="MuiBox-root jss2629">
                          <div className="MuiBox-root jss2630" opacity="1">
                            Đà Lạt
                          </div>
                        </div>
                      </span>
                      <span className="MuiTouchRipple-root"></span>
                    </button>
                    <button
                      className="MuiButtonBase-root MuiButton-root MuiButton-text jss2009 jss2631 jss2606"
                      tabindex="0"
                      type="button"
                    >
                      <span className="MuiButton-label">
                        <div className="MuiBox-root jss2632">
                          <div className="MuiBox-root jss2633" opacity="1">
                            Hà Nội
                          </div>
                        </div>
                      </span>
                      <span className="MuiTouchRipple-root"></span>
                    </button>
                  </div>
                </div>
                <div className="MuiBox-root jss2634 jss2603">
                  <a
                    className="MuiTypography-root MuiLink-root MuiLink-underlineHover jss2230 MuiTypography-colorPrimary"
                    target="_blank"
                    href="/khach-san/23812-sol-by-melia-phu-quoc-resort.html?checkIn=10-04-2022&amp;checkOut=11-04-2022&amp;adults=2&amp;rooms=1&amp;children=0"
                  >
                    <div className="MuiBox-root jss2718 jss2231">
                      <div className="MuiBox-root jss2719 jss2232">
                        <div className="jss1307 jss2233">
                          <div
                            className="jss1308 jss1311"
                            style={{ borderRadius: "8px 8px 0px 0px" }}
                          ></div>
                          <div className="lazyload-wrapper">
                            <img
                              src="https://tripi.vn/cdn-cgi/image/width=548,height=310/https://storage.googleapis.com/hms_prod/photo/thumb/458143hJw/87172189.jpg"
                              className="jss1310 jss2233"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="MuiBox-root jss2720 jss2253">
                          <span className="MuiBox-root jss2721 jss2254">
                            -26<span className="MuiBox-root jss2722">%</span>
                          </span>
                        </div>
                        <button
                          className="MuiButtonBase-root MuiIconButton-root jss2235"
                          tabindex="0"
                          type="button"
                        >
                          <span className="MuiIconButton-label">
                            <svg
                              width="28"
                              height="28"
                              fill="none"
                              className="svgFillAll jss2237"
                            >
                              <g filter="url(#icon_heart_svg__filter0_d)">
                                <path
                                  d="M9.318 3c-1.479 0-2.897.661-3.895 1.811C4.259 6.16 3.786 8.054 4.09 10.15c.683 4.708 5.546 8.674 9.911 10.468 4.363-1.794 9.223-5.76 9.91-10.468.303-2.096-.17-3.991-1.334-5.339C21.581 3.661 20.161 3 18.684 3c-1.49 0-2.885.68-3.929 1.915l-.75.89-.752-.89C12.204 3.681 10.81 3 9.318 3z"
                                  fill="#000"
                                  stroke="#fff"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
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
                                  color-interpolation-filters="sRGB"
                                >
                                  <feFlood
                                    flood-opacity="0"
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
                          <span className="MuiTouchRipple-root"></span>
                        </button>
                        <div className="MuiBox-root jss2723 jss2239">
                          <div className="MuiBox-root jss2724 jss2240">
                            Giá độc quyền
                          </div>
                        </div>
                      </div>
                      <div className="MuiBox-root jss2725 jss2242">
                        <div className="MuiBox-root jss2726">
                          <h6 className="MuiTypography-root jss2243 MuiTypography-subtitle1">
                            Sol by Meliá Phú Quốc Resort
                          </h6>
                          <div className="MuiBox-root jss2727 jss2281 jss2244">
                            <div
                              className="MuiBox-root jss2728"
                              title="Số sao đánh giá này do nơi lưu trú cung cấp, phản ánh sự thoải mái, cơ sở vật chất và tiện nghi mà khách hàng có thể mong đợi."
                            >
                              <div className="MuiBox-root jss2729 jss2291">
                                <svg
                                  width="14"
                                  height="14"
                                  fill="none"
                                  className="svgFillAll jss2292"
                                  style={{
                                    stroke:
                                      "rgb(255, 188, 57); fill: rgb(255, 188, 57)",
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
                                  className="svgFillAll jss2292"
                                  style={{
                                    stroke:
                                      "rgb(255, 188, 57); fill: rgb(255, 188, 57)",
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
                                  className="svgFillAll jss2292"
                                  style={{
                                    stroke:
                                      "rgb(255, 188, 57); fill: rgb(255, 188, 57)",
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
                                  className="svgFillAll jss2292"
                                  style={{
                                    stroke:
                                      "rgb(255, 188, 57); fill: rgb(255, 188, 57)",
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
                                  className="svgFillAll jss2292"
                                  style={{
                                    stroke:
                                      "rgb(255, 188, 57); fill: rgb(255, 188, 57)",
                                  }}
                                >
                                  <path
                                    d="M12.464 5.684a1.055 1.055 0 00-.849-.719L9.078 4.6 7.94 2.31a1.05 1.05 0 00-1.88 0L4.925 4.598l-2.536.367a1.057 1.057 0 00-.87 1.292c.047.191.148.365.29.502L3.64 8.534l-.433 2.51a1.05 1.05 0 001.521 1.107l2.272-1.188 2.273 1.19a1.05 1.05 0 001.522-1.108l-.435-2.51 1.832-1.776a1.05 1.05 0 00.271-1.075z"
                                    fill="#FFBC39"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="MuiBox-root jss2730 jss2246">
                            <span style={{ marginRight: "4px" }}>
                              <svg width="16" height="16" fill="none">
                                <path
                                  d="M8.467 3.8V2a1 1 0 00-1-1h-.8a1 1 0 00-1 1v1.8"
                                  stroke="#1A202C"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>
                                <path
                                  d="M1 7.467a1 1 0 001 1h9.838a1 1 0 00.64-.232l1.6-1.333a1 1 0 000-1.537l-1.6-1.333a1 1 0 00-.64-.232H2a1 1 0 00-1 1v2.667zM5.667 10.333V14a1 1 0 001 1h.8a1 1 0 001-1v-3.667"
                                  stroke="#1A202C"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>
                              </svg>
                            </span>
                            <span className="MuiBox-root jss2731 jss2247">
                              Phú Quốc
                            </span>
                          </div>
                          <div className="MuiBox-root jss2732 jss2248">
                            <div className="MuiBox-root jss2733 jss2249">
                              <svg
                                width="21"
                                height="16"
                                fill="none"
                                style={{ marginRight: "3px" }}
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M5.825 8.157c.044-.13.084-.264.136-.394.31-.783.666-1.548 1.118-2.264.3-.475.606-.95.949-1.398.474-.616 1.005-1.19 1.635-1.665.27-.202.55-.393.827-.59.019-.015.034-.033.038-.08-.036.015-.078.025-.111.045-.506.349-1.024.68-1.51 1.052A15.241 15.241 0 006.627 4.98c-.408.47-.78.97-1.144 1.474-.182.249-.31.534-.474.818-1.096-1.015-2.385-1.199-3.844-.77.853-2.19 2.291-3.862 4.356-5.011 3.317-1.843 7.495-1.754 10.764.544 2.904 2.041 4.31 5.497 4.026 8.465-1.162-.748-2.38-.902-3.68-.314.05-.92-.099-1.798-.3-2.67a14.842 14.842 0 00-.834-2.567 16.416 16.416 0 00-1.225-2.345l-.054.028c.103.193.21.383.309.58.402.81.642 1.67.8 2.553.152.86.25 1.724.287 2.595.027.648.003 1.294-.094 1.936-.01.066-.018.133-.027.219-1.223-1.305-2.68-2.203-4.446-2.617a9.031 9.031 0 00-5.19.29l-.033-.03z"
                                  fill="#F36"
                                ></path>
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M10 12.92h-.003c.31-1.315.623-2.627.93-3.943.011-.052-.015-.145-.052-.176a1.039 1.039 0 00-.815-.247c-.082.01-.124.046-.142.135-.044.216-.088.433-.138.646-.285 1.207-.57 2.413-.859 3.62l.006.001c-.31 1.314-.623 2.626-.93 3.942-.011.052.016.145.052.177.238.196.51.285.815.247.082-.01.125-.047.142-.134.044-.215.088-.433.138-.648.282-1.208.567-2.414.857-3.62z"
                                  fill="#F36"
                                ></path>
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M15.983 19.203s-8.091-6.063-17.978-.467c0 0-.273.228.122.241 0 0 8.429-4.107 17.739.458-.002 0 .282.034.117-.232z"
                                  fill="#F36"
                                ></path>
                              </svg>
                              8.8
                            </div>
                            <span className="MuiBox-root jss2734 jss2250">
                              Rất tốt
                            </span>
                            <span className="MuiBox-root jss2735 jss2251">
                              (380 đánh giá)
                            </span>
                          </div>
                          <div className="MuiBox-root jss2736 jss2252">
                            Vừa đặt cách đây
                            <span className="MuiBox-root jss2737">
                              5 giờ trước
                            </span>
                          </div>
                        </div>
                        <div className="MuiBox-root jss2738 jss2255">
                          <div className="MuiBox-root jss2739 jss2256">
                            1.813.457đ
                          </div>
                          <div className="MuiBox-root jss2740 jss2257">
                            1.355.852đ
                          </div>
                          <div className="MuiBox-root jss2741 jss2265">
                            <div className="MuiBox-root jss2742 jss2267">
                              <span className="MuiBox-root jss2743">Mã:</span>
                              <span className="MuiBox-root jss2744 jss2268">
                                DAILE5
                              </span>
                              <span className="MuiBox-root jss2745 jss2269">
                                -5%
                              </span>
                            </div>
                            <span className="MuiBox-root jss2746 jss2266">
                              1.288.059đ
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    className="MuiTypography-root MuiLink-root MuiLink-underlineHover jss2230 MuiTypography-colorPrimary"
                    target="_blank"
                    href="/khach-san/910-arcadia-phu-quoc-resort.html?checkIn=10-04-2022&amp;checkOut=11-04-2022&amp;adults=2&amp;rooms=1&amp;children=0"
                  >
                    <div className="MuiBox-root jss2747 jss2231">
                      <div className="MuiBox-root jss2748 jss2232">
                        <div className="jss1307 jss2233">
                          <div
                            className="jss1308 jss1311"
                            style={{borderRadius:'8px 8px 0px 0px'}}
                          ></div>
                          <div className="lazyload-wrapper">
                            <img
                              src="https://tripi.vn/cdn-cgi/image/width=548,height=310/https://www.googleapis.com/download/storage/v1/b/hotel_image/o/logo%2F4%2F296330.jpg?generation=1563772483568423&amp;alt=media"
                              className="jss1310 jss2233"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="MuiBox-root jss2749 jss2253">
                          <span className="MuiBox-root jss2750 jss2254">
                            -5<span className="MuiBox-root jss2751">%</span>
                          </span>
                        </div>
                        <button
                          className="MuiButtonBase-root MuiIconButton-root jss2235"
                          tabindex="0"
                          type="button"
                        >
                          <span className="MuiIconButton-label">
                            <svg
                              width="28"
                              height="28"
                              fill="none"
                              className="svgFillAll jss2237"
                            >
                              <g filter="url(#icon_heart_svg__filter0_d)">
                                <path
                                  d="M9.318 3c-1.479 0-2.897.661-3.895 1.811C4.259 6.16 3.786 8.054 4.09 10.15c.683 4.708 5.546 8.674 9.911 10.468 4.363-1.794 9.223-5.76 9.91-10.468.303-2.096-.17-3.991-1.334-5.339C21.581 3.661 20.161 3 18.684 3c-1.49 0-2.885.68-3.929 1.915l-.75.89-.752-.89C12.204 3.681 10.81 3 9.318 3z"
                                  fill="#000"
                                  stroke="#fff"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
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
                                  color-interpolation-filters="sRGB"
                                >
                                  <feFlood
                                    flood-opacity="0"
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
                          <span className="MuiTouchRipple-root"></span>
                        </button>
                        <div className="MuiBox-root jss2752 jss2239"></div>
                      </div>
                      <div className="MuiBox-root jss2753 jss2242">
                        <div className="MuiBox-root jss2754">
                          <h6 className="MuiTypography-root jss2243 MuiTypography-subtitle1">
                            Arcadia Phú Quốc Resort
                          </h6>
                          <div className="MuiBox-root jss2755 jss2281 jss2244">
                            <div className="MuiBox-root jss2756">
                              <div className="MuiBox-root jss2757 jss2291">
                                <svg
                                  width="14"
                                  height="14"
                                  fill="none"
                                  className="svgFillAll jss2292"
                                  style={{stroke:'rgb(255, 188, 57); fill: rgb(255, 188, 57)'}}
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
                                  className="svgFillAll jss2292"
                                  style={{stroke:'rgb(255, 188, 57); fill: rgb(255, 188, 57)'}}

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
                                  className="svgFillAll jss2292"
                                  style={{stroke:'rgb(255, 188, 57); fill: rgb(255, 188, 57)'}}

                                >
                                  <path
                                    d="M12.464 5.684a1.055 1.055 0 00-.849-.719L9.078 4.6 7.94 2.31a1.05 1.05 0 00-1.88 0L4.925 4.598l-2.536.367a1.057 1.057 0 00-.87 1.292c.047.191.148.365.29.502L3.64 8.534l-.433 2.51a1.05 1.05 0 001.521 1.107l2.272-1.188 2.273 1.19a1.05 1.05 0 001.522-1.108l-.435-2.51 1.832-1.776a1.05 1.05 0 00.271-1.075z"
                                    fill="#FFBC39"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                            <span className="MuiBox-root jss2758 jss2284 ">
                              Khu nghỉ dưỡng
                            </span>
                          </div>
                          <div className="MuiBox-root jss2759 jss2246">
                            <span 
                            style={{marginRight:'4px'}}
                            >
                              <svg width="16" height="16" fill="none">
                                <path
                                  d="M8.467 3.8V2a1 1 0 00-1-1h-.8a1 1 0 00-1 1v1.8"
                                  stroke="#1A202C"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>
                                <path
                                  d="M1 7.467a1 1 0 001 1h9.838a1 1 0 00.64-.232l1.6-1.333a1 1 0 000-1.537l-1.6-1.333a1 1 0 00-.64-.232H2a1 1 0 00-1 1v2.667zM5.667 10.333V14a1 1 0 001 1h.8a1 1 0 001-1v-3.667"
                                  stroke="#1A202C"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>
                              </svg>
                            </span>
                            <span className="MuiBox-root jss2760 jss2247">
                              Phú Quốc
                            </span>
                          </div>
                          <div className="MuiBox-root jss2761 jss2248">
                            <div className="MuiBox-root jss2762 jss2249">
                              <svg
                                width="21"
                                height="16"
                                fill="none"
                                style={{marginRight:'3px'}}
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M5.825 8.157c.044-.13.084-.264.136-.394.31-.783.666-1.548 1.118-2.264.3-.475.606-.95.949-1.398.474-.616 1.005-1.19 1.635-1.665.27-.202.55-.393.827-.59.019-.015.034-.033.038-.08-.036.015-.078.025-.111.045-.506.349-1.024.68-1.51 1.052A15.241 15.241 0 006.627 4.98c-.408.47-.78.97-1.144 1.474-.182.249-.31.534-.474.818-1.096-1.015-2.385-1.199-3.844-.77.853-2.19 2.291-3.862 4.356-5.011 3.317-1.843 7.495-1.754 10.764.544 2.904 2.041 4.31 5.497 4.026 8.465-1.162-.748-2.38-.902-3.68-.314.05-.92-.099-1.798-.3-2.67a14.842 14.842 0 00-.834-2.567 16.416 16.416 0 00-1.225-2.345l-.054.028c.103.193.21.383.309.58.402.81.642 1.67.8 2.553.152.86.25 1.724.287 2.595.027.648.003 1.294-.094 1.936-.01.066-.018.133-.027.219-1.223-1.305-2.68-2.203-4.446-2.617a9.031 9.031 0 00-5.19.29l-.033-.03z"
                                  fill="#F36"
                                ></path>
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M10 12.92h-.003c.31-1.315.623-2.627.93-3.943.011-.052-.015-.145-.052-.176a1.039 1.039 0 00-.815-.247c-.082.01-.124.046-.142.135-.044.216-.088.433-.138.646-.285 1.207-.57 2.413-.859 3.62l.006.001c-.31 1.314-.623 2.626-.93 3.942-.011.052.016.145.052.177.238.196.51.285.815.247.082-.01.125-.047.142-.134.044-.215.088-.433.138-.648.282-1.208.567-2.414.857-3.62z"
                                  fill="#F36"
                                ></path>
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M15.983 19.203s-8.091-6.063-17.978-.467c0 0-.273.228.122.241 0 0 8.429-4.107 17.739.458-.002 0 .282.034.117-.232z"
                                  fill="#F36"
                                ></path>
                              </svg>
                              8.0
                            </div>
                            <span className="MuiBox-root jss2763 jss2250">
                              Rất tốt
                            </span>
                            <span className="MuiBox-root jss2764 jss2251">
                              (520 đánh giá)
                            </span>
                          </div>
                        </div>
                        <div className="MuiBox-root jss2765 jss2255">
                          <div className="MuiBox-root jss2766 jss2256">
                            576.000đ
                          </div>
                          <div className="MuiBox-root jss2767 jss2257">
                            552.384đ
                          </div>
                          <div className="MuiBox-root jss2768 jss2265">
                            <div className="MuiBox-root jss2769 jss2267">
                              <span className="MuiBox-root jss2770">Mã:</span>
                              <span className="MuiBox-root jss2771 jss2268">
                                DAILE5
                              </span>
                              <span className="MuiBox-root jss2772 jss2269">
                                -5%
                              </span>
                            </div>
                            <span className="MuiBox-root jss2773 jss2266">
                              524.764đ
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}