import React from 'react'
import "./styles.css";
export default function Footer() {
  return (
    <div style={{ background: 'antiquewhite'}}>
      <div className="Footer-component">
        <div className="Footer-banner">
          <div className="Footer-banner-container">
            <div className="Footer-banner-main">
              <div className="Footer-banner-left">
                <div className="footer-logo">
                  <img src="https://storage.googleapis.com/tripi-assets/mytour/icons/icon_mail_red.svg" />
                </div>
                <div className="Footer-banner-left-content">
                  <h6>
                    Bạn muốn tiết kiệm tới 50% khi đặt phòng khách sạn, vé máy
                    bay?
                  </h6>
                  <p>
                    Nhập số điện thoại để Mytour có thể gửi đến bạn những chương
                    trình khuyến mại mới nhất!
                  </p>
                </div>
              </div>
              <div className="Footer-banner-right">
                <div className="Footer-banner-right-main">
                  <form className="Footer-banner-main-form">
                    <div className="Footer-form">
                      <input
                        placeholder="Nhập số điện thoại"
                        type="text"
                        className="MuiInputBase-input MuiInput-input"
                      />
                    </div>
                    <div className="MuiBox-root jss343">
                      <button
                        className="MuiButtonBase-root MuiButton-root MuiButton-text jss344 jss345 jss336"
                        tabindex="0"
                        type="button"
                        margin="-10"
                      >
                        <span className="MuiButton-label">
                          <div className="MuiBox-root jss346">
                            <div className="MuiBox-root jss347" opacity="1">
                              Đăng ký
                            </div>
                          </div>
                        </span>
                        <span className="MuiTouchRipple-root"></span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Footer-infor">
          <div className="footer-infor-left">
            <p>Công ty cổ phần du lịch Việt Nam VNTravel</p>
            <p>Tổng đài chăm sóc: 1900 2083</p>
            <p className="MuiTypography-root jss296 MuiTypography-body2">
              Email: hotro@mytour.vn
            </p>
          </div>
          <div className="footer-infor-main">
            <p>Công ty cổ phần du lịch Việt Nam VNTravel</p>
            <p>Tổng đài chăm sóc: 1900 2083</p>
            <p className="MuiTypography-root jss296 MuiTypography-body2">
              Email: hotro@mytour.vn
            </p>
          </div>
          <div className="footer-infor-right">
            <p>Công ty cổ phần du lịch Việt Nam VNTravel</p>
            <p>Tổng đài chăm sóc: 1900 2083</p>
            <p className="MuiTypography-root jss296 MuiTypography-body2">
              Email: hotro@mytour.vn
            </p>
          </div>
        </div>
        <div className="Footer-final">
          <div className="MuiBox-root jss323 jss316">
            <div className="MuiBox-root jss324 jss317">
              <div className="MuiBox-root jss325 jss319">
                <p className="MuiTypography-root jss318 MuiTypography-body2">
                  Mytour là thành viên của VNTravel Group - Một trong những tập
                  đoàn đứng đầu Đông Nam Á về du lịch trực tuyến và các dịch vụ
                  liên quan.
                </p>
                <div className="MuiBox-root jss326 jss320">
                  <div className="jss200 jss322">
                    <div className="jss201 jss204" ></div>
                    <div className="lazyload-wrapper">
                      <img
                        src="https://storage.googleapis.com/tripi-assets/mytour/icons/icon_company_group.svg"
                        className="jss203 jss322"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <p className="MuiTypography-root jss318 MuiTypography-body2">
                  Copyright © 2020 - CÔNG TY CỔ PHẦN DU LỊCH VIỆT NAM VNTRAVEL -
                  Đăng ký kinh doanh số 0108886908 - do Sở Kế hoạch và Đầu tư
                  thành phố Hà Nội cấp lần đầu ngày 04 tháng 09 năm 2019
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
