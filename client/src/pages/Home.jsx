import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css/bundle";

const Home = () => {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  SwiperCore.use([Navigation]);

  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch("/api/listing/get?offer=true&limit=4");
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchRentListings = async () => {
      try {
        const res = await fetch("/api/listing/get?type=rent&limit=4");
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch("/api/listing/get?type=sale&limit=4");
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchOfferListings();
  }, []);

  return (
    <div>
      {/* Top */}
      <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto">
        <h1 className="text-blue-700 font-bold text-3xl lg:text-6xl">
          Find your next <span className="text-blue-500">perfect</span>
          <br /> place with ease
        </h1>
        <div className="text-gray-400 text-xs sm:text-sm">
          Alpha Estate is the best place to find your next perfect place to
          live.
          <br />
          We have a wide range of property to choose from.
        </div>

        <Link
          to={"/search"}
          className="bg-blue-700 text-white p-4 rounded-lg mt-3 hover:opacity-90 w-[160px]"
        >
          Let's get started..
        </Link>
      </div>

      {/* Swiper */}

      <Swiper navigation>
        {offerListings &&
          offerListings.length > 0 &&
          offerListings.map((listing) => (
            <SwiperSlide key={listing._id}>
              <div
                style={{
                  background: `url(${listing.imageUrls[0]}) center no-repeat`,
                  backgroundSize: "cover",
                }}
                className="h-[500px]"
              ></div>
            </SwiperSlide>
          ))}
      </Swiper>

      {/* Listing  results for offer, sale and rent*/}
    </div>
  );
};

export default Home;
