import React from "react";
import "./styles.css";

const Header = () => {
  return (
    <>
      <div className="header-components">
        <div className="header-container"> 
          <div className="header-logo">
           {/* logo image */}
          </div>
        </div>
        <div className="header-bar">
          <ul className="haeder-list-bar">
             {/* chuyen het the <li> thanh the co chua route cua may trang khac */}
            <li>Khách sạn</li>
            <li>Chuyến bay</li>
            <li>Nhà hàng</li>
            <li>Đặc sản - Myfresh</li>
            <li>Tour & Sự kiện</li>
            <li>Giới thiệu nhận quà</li>
            <li>Hợp tác với chúng tôi</li>
            <li>1900 2083</li>
          </ul>
        </div>
      </div>
      {/* hạn chế sử dụng kích thước của 1 thẻ trong phần code HTML, vì sau này khó responsive */}
      <div className="header-banner">
        <div className="header-main-banner">
          <div className="MuiBox-root jss92 jss77">
            <div className="MuiBox-root jss93 jss78">
              <div className="MuiBox-root jss94 jss79 jss80">
                <span className="MuiBox-root jss95 jss81 jss82">
                  <svg width="20" height="20" fill="none" className="svgFillAll">
                    <path
                      d="M2.5 4.75h11.25a.375.375 0 00.351-.507l-.943-2.513A1.131 1.131 0 0012.105 1h-7.96a1.131 1.131 0 00-1.05.73l-.946 2.513a.375.375 0 00.351.507zM18.25 17.5h-1.125a.188.188 0 01-.188-.188v-.357a.184.184 0 01.114-.167 1.681 1.681 0 001.012-1.538 50.433 50.433 0 00-1.328-5.355.391.391 0 00-.72 0 50.433 50.433 0 00-1.328 5.355 1.682 1.682 0 001.013 1.538.185.185 0 01.113.168v.357a.187.187 0 01-.187.187h-2.438a.188.188 0 01-.188-.188V5.688a.188.188 0 00-.188-.187H3.438a.187.187 0 00-.188.188v11.625a.188.188 0 01-.188.187H1.75a.75.75 0 100 1.5h16.5a.75.75 0 100-1.5zM5.125 7.562H7a.563.563 0 110 1.125H5.125a.563.563 0 110-1.124zM4.562 11.5a.562.562 0 01.563-.563H7a.563.563 0 010 1.126H5.125a.563.563 0 01-.563-.563zm4.688 5.813a.188.188 0 01-.188.187H7.188A.188.188 0 017 17.312v-1.687a1.125 1.125 0 012.25 0v1.688zm1.875-5.25H9.25a.562.562 0 010-1.126h1.875a.562.562 0 110 1.126zm0-3.376H9.25a.562.562 0 110-1.124h1.875a.562.562 0 110 1.125z"
                      fill="#F36"
                    ></path>
                  </svg>
                </span>
                Khách sạn<div className="MuiBox-root jss96 jss87 jss89">-300k</div>
              </div>
              <div className="MuiBox-root jss97 jss79">
                <span className="MuiBox-root jss98 jss81">
                  <svg width="20" height="20" fill="none" className="svgFillAll">
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
                Chuyến bay<div className="MuiBox-root jss99 jss87 jss88">-50k</div>
              </div>
              <div className="MuiBox-root jss100 jss79">
                <span className="MuiBox-root jss101 jss81">
                  <svg width="20" height="20" fill="none" className="svgFillAll">
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
                <div className="MuiBox-root jss102 jss87 jss88">Đặt bàn</div>
              </div>
              <div className="MuiBox-root jss103 jss83"></div>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};
export default Header;
