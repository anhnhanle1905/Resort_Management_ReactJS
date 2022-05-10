import React from "react";
import './styles.css'
function ImageGallery() {
  return (
    <div className="image-container">
      <div className="image-main-title">
        <h2>IMAGE GALLERY</h2>
      </div>
      <div className="image-gallery">
        <div className="image-gallery-item" style={{ display: 'flex',flexWrap: 'wrap'}}>
          <div className="image-item-content" style={{ width: "25%" }}>
            <figure className="image-gs2">
              <a
                class="hover_effect h_lightbox h_blue"
              >
                <a href="https://preview.eagle-themes.com/html/zante/images/gallery/gallery1.jpg" class="img-responsive" onclick="return hs.expand(this)"></a>
                <img
                  src="https://preview.eagle-themes.com/html/zante/images/gallery/gallery1.jpg"
                  class="img-responsive"
                  alt="Image"
                />
              
              </a>
            </figure>
          </div>
          <div className="image-item-content" style={{ width: "25%" }}>
            <figure className="image-gs2">
              <a
                class="hover_effect h_lightbox h_blue"
              >
                <img
                  src="https://preview.eagle-themes.com/html/zante/images/gallery/gallery2.jpg"
                  class="img-responsive"
                  alt="Image"
                />
              </a>
            </figure>
          </div>
          <div className="image-item-content" style={{ width: "25%" }}>
            <figure className="image-gs2">
              <a
                class="hover_effect h_lightbox h_blue"
              >
                <img
                  src="https://preview.eagle-themes.com/html/zante/images/gallery/gallery3.jpg"
                  class="img-responsive"
                  alt="Image"
                />
              </a>
            </figure>
          </div>
          <div className="image-item-content" style={{ width: "25%" }}>
            <figure className="image-gs2">
              <a
                class="hover_effect h_lightbox h_blue"
              >
                <img
                  src="https://preview.eagle-themes.com/html/zante/images/gallery/gallery5.jpg"
                  class="img-responsive"
                  alt="Image"
                />
              </a>
            </figure>
          </div>
          <div className="image-item-content" style={{ width: "25%" }}>
            <figure className="image-gs2">
              <a
                class="hover_effect h_lightbox h_blue"
              >
                <img
                  src="https://preview.eagle-themes.com/html/zante/images/gallery/gallery9.jpg"
                  class="img-responsive"
                  alt="Image"
                />
              </a>
            </figure>
          </div>
          <div className="image-item-content" style={{ width: "25%" }}>
            <figure className="image-gs2">
              <a
                class="hover_effect h_lightbox h_blue"
              >
                <img
                  src="https://preview.eagle-themes.com/html/zante/images/gallery/gallery6.jpg"
                  class="img-responsive"
                  alt="Image"
                />
              </a>
            </figure>
          </div>
          <div className="image-item-content" style={{ width: "25%" }}>
            <figure className="image-gs2">
              <a
                class="hover_effect h_lightbox h_blue"
              >
                <img
                  src="https://preview.eagle-themes.com/html/zante/images/gallery/gallery4.jpg"
                  class="img-responsive"
                  alt="Image"
                />
              </a>
            </figure>
          </div>
          <div className="image-item-content" style={{ width: "25%" }}>
            <figure className="image-gs2">
              <a
                class="hover_effect h_lightbox h_blue"
              >
                <img
                  src="https://preview.eagle-themes.com/html/zante/images/gallery/gallery12.jpg"
                  class="img-responsive"
                  alt="Image"
                />
              </a>
            </figure>
          </div>
          <div className="image-item-content" style={{ width: "25%" }}>
            <figure className="image-gs2">
              <a
                class="hover_effect h_lightbox h_blue"
              >
                <img
                    src="https://preview.eagle-themes.com/html/zante/images/gallery/gallery11.jpg"
                  class="img-responsive"
                  alt="Image"
                />
              </a>
            </figure>
          </div>
          <div className="image-item-content" style={{ width: "25%" }}>
            <figure className="image-gs2">
              <a
                class="hover_effect h_lightbox h_blue"
              >
                <img
                  src="https://preview.eagle-themes.com/html/zante/images/gallery/gallery10.jpg"
                  class="img-responsive"
                  alt="Image"
                />
              </a>
            </figure>
          </div>
          <div className="image-item-content" style={{ width: "25%" }}>
            <figure className="image-gs2">
              <a
                class="hover_effect h_lightbox h_blue"
              >
                <img
                  src="https://preview.eagle-themes.com/html/zante/images/conference.jpg"
                  class="img-responsive"
                  alt="Image"
                />
              </a>
            </figure>
          </div><div className="image-item-content" style={{ width: "25%" }}>
            <figure className="image-gs2">
              <a
                class="hover_effect h_lightbox h_blue"
              >
                <img
                  src="https://preview.eagle-themes.com/html/zante/images/gallery/gallery8.jpg"
                  class="img-responsive"
                  alt="Image"
                />
              </a>
            </figure>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default ImageGallery;
