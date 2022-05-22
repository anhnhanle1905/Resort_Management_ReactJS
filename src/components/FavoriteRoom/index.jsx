import React from "react";
import "./styles.css";
function FavoriteRoom() {

  
  return (
    <div className="favorite_room-container body-container">
      <div className="favorite_room_header">
        <h2 className="favorite_room_header-title">OUR FAVORITE ROOMS</h2>
      </div>
       <div className="favorite-list" style={{ display: 'flex'}}>
        <div className="favorite-list-item" style={{ width: "33.33%" }}>
          <article className="favorite-room">
            <figure className="favorite-fg" style={{ position: "relative" }}>
              <div className="favorite-price">
                €89 <span>/ night</span>
              </div>
              <a className="hover-effect">
                <img
                  src="https://preview.eagle-themes.com/html/zante/images/rooms/single-room.jpg"
                  className="img-responsive"
                  alt="Image"
                />
              </a>
              <figcaption className="favorite-figcaption">
                <h4 className="favorite-figcaption-h4">
                  <a href="/ListRoom">Single Room</a>
                </h4>
                <span className="f_right">
                  <a href="/ListRoom" className="button btn_sm btn_blue">
                    VIEW DETAILS
                  </a>
                </span>
              </figcaption>
            </figure>
          </article>
        </div>
        <div className="favorite-list-item" style={{ width: "33.33%" }}>
          <article className="favorite-room">
            <figure className="favorite-fg" style={{ position: "relative" }}>
              <div className="favorite-price">
                €129 <span>/ night</span>
              </div>
              <a className="hover-effect">
                <img
                  src="https://preview.eagle-themes.com/html/zante/images/rooms/double-room.jpg"
                  className="img-responsive"
                  alt="Image"
                />
              </a>
              <figcaption className="favorite-figcaption">
                <h4 className="favorite-figcaption-h4">
                  <a href="/ListRoom">Double Room</a>
                </h4>
                <span className="f_right">
                  <a href="/ListRoom" className="button btn_sm btn_blue">
                    VIEW DETAILS
                  </a>
                </span>
              </figcaption>
            </figure>
          </article>
        </div>
        <div className="favorite-list-item" style={{ width: "33.33%" }}>
          <article className="favorite-room">
            <figure className="favorite-fg" style={{ position: "relative" }}>
              <div className="favorite-price">
                €189 <span>/ night</span>
              </div>
              <a className="hover-effect">
                <img
                  src="https://preview.eagle-themes.com/html/zante/images/rooms/deluxe-room.jpg"
                  className="img-responsive"
                  alt="Image"
                />
              </a>
              <figcaption className="favorite-figcaption">
                <h4 className="favorite-figcaption-h4">
                  <a href="/ListRoom">Deluxe Room</a>
                </h4>
                <span className="f_right">
                  <a href="/ListRoom" className="button btn_sm btn_blue">
                    VIEW DETAILS
                  </a>
                </span>
              </figcaption>
            </figure>
          </article>
        </div>
      </div>
      <div className="mt40 a_center">
<a className="button btn_sm btn_yellow" href="/ListRoom">VIEW ROOMS LIST</a>
</div>
    </div>
  );
}

export default FavoriteRoom;
