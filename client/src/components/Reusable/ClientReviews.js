import React from "react";
import "../../styles/clientReviews.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

function ClientReviews() {
  return (
    <Swiper
      id="mySwiper"
      pagination={{ clickable: true }}
      loop={true}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="card">
          <div className="review-container">
            <p className="title">It was a very good experience</p>
            <p className="review">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
              nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed
              magna eget nibh in turpis. Consequat duis diam lacus arcu.
              Faucibus venenatis felis id augue sit cursus pellentesque enim
              arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed
              magna eget nibh in turpis. Consequat duis diam lacus arcu.
            </p>
          </div>
          <div className="user-details">
            <div className="pofile">
              <img
                src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1718934361/Eden_Files/clbxd2qi5lsshrzf5bee.svg"
                alt=""
              />
            </div>
            <div className="details">
              <p className="name">Patrick Pronuevo</p>
              <p className="role">Lead Designer</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card">
          <div className="review-container">
            <p className="title">It was a very good experience</p>
            <p className="review">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
              nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed
              magna eget nibh in turpis. Consequat duis diam lacus arcu.
              Faucibus venenatis felis id augue sit cursus pellentesque enim
              arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed
              magna eget nibh in turpis. Consequat duis diam lacus arcu.
            </p>
          </div>
          <div className="user-details">
            <div className="pofile">
              <img
                src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1718934361/Eden_Files/clbxd2qi5lsshrzf5bee.svg"
                alt=""
              />
            </div>
            <div className="details">
              <p className="name">Patrick Pronuevo</p>
              <p className="role">Lead Designer</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card">
          <div className="review-container">
            <p className="title">It was a very good experience</p>
            <p className="review">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
              nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed
              magna eget nibh in turpis. Consequat duis diam lacus arcu.
              Faucibus venenatis felis id augue sit cursus pellentesque enim
              arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed
              magna eget nibh in turpis. Consequat duis diam lacus arcu.
            </p>
          </div>
          <div className="user-details">
            <div className="pofile">
              <img
                src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1718934361/Eden_Files/clbxd2qi5lsshrzf5bee.svg"
                alt=""
              />
            </div>
            <div className="details">
              <p className="name">Patrick Pronuevo</p>
              <p className="role">Lead Designer</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card">
          <div className="review-container">
            <p className="title">It was a very good experience</p>
            <p className="review">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
              nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed
              magna eget nibh in turpis. Consequat duis diam lacus arcu.
              Faucibus venenatis felis id augue sit cursus pellentesque enim
              arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed
              magna eget nibh in turpis. Consequat duis diam lacus arcu.
            </p>
          </div>
          <div className="user-details">
            <div className="pofile">
              <img
                src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1718934361/Eden_Files/clbxd2qi5lsshrzf5bee.svg"
                alt=""
              />
            </div>
            <div className="details">
              <p className="name">Patrick Pronuevo</p>
              <p className="role">Lead Designer</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default ClientReviews;
