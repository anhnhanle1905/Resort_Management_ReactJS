import React from "react";
import "./styles.css";
export default function Flash_sale() {
  return (
    <div className="home-main flash_sale-component">
      <div className="home-maim flash_sale-content">
        <div className="home-main flash_sale-center">
          <div className="home-main flash_sale-header">
            <div className="home-main flash_sale-left">
              <img
                src="https://storage.googleapis.com/tripi-assets/mytour/icons/icon_flashSale_home_white_new.png"
                alt="icon flash"
                className="flash_ing"
              />
              <div className="home-main flash-sale-left-content">
                <span style={{ marginRight: "8px" }}>
                  Chương trình sẽ diễn ra trong
                </span>
                <div className="home-main flash-sale-left-time">
                  <div className="home-main flash-sale-left-time-hour">09</div>
                  <span className="home-main flash-sale-left-time-space">
                    :
                  </span>
                  <div className="home-main flash-sale-left-time-hour">09</div>
                  <span className="home-main flash-sale-left-time-space">
                    :
                  </span>
                  <div className="home-main flash-sale-left-time-hour">09</div>
                </div>
              </div>
            </div>
            <div className="home-main flash_sale-right">
              <div
                className="home-main jss776 flash_sale-view"
                style={{
                  background: "rgb(255, 255, 255)",
                  color: "rgb(160, 174, 192)",
                  cursor: "default",
                  pointerEvents: "none",
                  textTransform: "inherit",
                }}
              >
                <span className="home-main jss777">12:00-13:00</span>
                <span className="home-main jss778 flash_sale-end">Đã kết thúc</span>
              </div>
              <div
                className="home-main jss779 flash_sale-view"
                style={{
                  background: "rgb(255, 255, 255)",
                  color: "rgb(160, 174, 192)",
                  cursor: "default",
                  pointerEvents: "none",
                  textTransform: "inherit",
                }}
              >
                <span className="home-main flash_sale-time">15:00-16:00</span>
                <span className="home-main jss781 flash_sale-end">Đã kết thúc</span>
              </div>
              <div
                className="home-main jss782 flash_sale-view"
                style={{
                  background: "rgb(255, 255, 255)",
                  color: "rgb(160, 174, 192)",
                  cursor: "default",
                  pointerEvents: "none",
                  textTransform: "inherit",
                }}
              >
                <span className="home-main jss783">21:00-22:00</span>
                <span className="home-main jss784 flash_sale-end">Sắp diễn ra</span>
              </div>
              <div
                className="home-main jss785 flash_sale-view"
                style={{
                  background: "rgb(255, 255, 255)",
                  color: "rgb(160, 174, 192)",
                  cursor: "default",
                  pointerEvents: "none",
                  textTransform: "inherit",
                }}
              >
                <span className="home-main jss786">09:00-10:00</span>
                <span className="home-main jss787 flash_sale-end">16/4</span>
              </div>
              <div
                style={{
                  background: "rgb(255, 255, 255)",
                  color: "rgb(160, 174, 192)",
                  cursor: "default",
                  pointerEvents: "none",
                  textTransform: "inherit",
                }}
                className="home-main jss788 flash_sale-view"
              >
                <span className="home-main jss789">12:00-13:00</span>
                <span className="home-main jss790 flash_sale-end">16/4</span>
              </div>
              <div
                style={{
                  background: "rgb(255, 255, 255)",
                  color: "rgb(160, 174, 192)",
                  cursor: "default",
                  pointerEvents: "none",
                  textTransform: "inherit",
                }}
                className="home-main jss791 flash_sale-view"
              >
                <span className="home-main jss792">15:00-16:00</span>
                <span className="home-main jss793 flash_sale-end">16/4</span>
              </div>
            </div>
          </div>
          <div className="home-main flash_sale-main"></div>
          <div className="home-main flash_sale-more">
            <a
              className="flash_sale-more-a"
              target="_blank"
              href="/uu-dai/khach-san-88"
            >
              <button
                className="home-main flash_sale-more-btn"
                tabindex="0"
                type="button"
              >
                <span className="MuiButton-label">
                  <div className="MuiBox-root jss1716">
                    <div className="MuiBox-root jss1717" opacity="1">
                      Xem thêm
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
  );
}
