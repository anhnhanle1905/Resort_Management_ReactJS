import React from "react";
import "./styles.css";
function Favorite_Room() {

  
  return (
    <div className="favorite_room-container">
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
                  class="img-responsive"
                  alt="Image"
                />
              </a>
              <figcaption className="favorite-figcaption">
                <h4 className="favorite-figcaption-h4">
                  <a href="room.html">Single Room</a>
                </h4>
                <span class="f_right">
                  <a href="rooms-list.html" class="button btn_sm btn_blue">
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
                  class="img-responsive"
                  alt="Image"
                />
              </a>
              <figcaption className="favorite-figcaption">
                <h4 className="favorite-figcaption-h4">
                  <a href="room.html">Double Room</a>
                </h4>
                <span class="f_right">
                  <a href="rooms-list.html" class="button btn_sm btn_blue">
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
                  class="img-responsive"
                  alt="Image"
                />
              </a>
              <figcaption className="favorite-figcaption">
                <h4 className="favorite-figcaption-h4">
                  <a href="room.html">Deluxe Room</a>
                </h4>
                <span class="f_right">
                  <a href="rooms-list.html" class="button btn_sm btn_blue">
                    VIEW DETAILS
                  </a>
                </span>
              </figcaption>
            </figure>
          </article>
        </div>
      </div>
      <div class="mt40 a_center">
<a class="button btn_sm btn_yellow" href="rooms-list.html">VIEW ROOMS LIST</a>
</div>
    </div>
  );
}

export default Favorite_Room;
