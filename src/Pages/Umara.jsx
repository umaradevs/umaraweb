import { Helmet } from "react-helmet";
import Footer from "./template/Footer";
import LazyLoad from "react-lazyload";

function Umara() {
  return (
    <div>
      <Helmet>
        <title>Kerobokan Villa</title>
        <meta
          name="description"
          content="Temukan villa mewah dari Umara Property di Bali, terletak di Ubud, Uluwatu, dan Krobokan. Nikmati WiFi gratis, akomodasi ramah hewan peliharaan, dan fasilitas gratis. Rasakan relaksasi dan kenyamanan terbaik di villa kami yang menakjubkan."
        />
        <meta
          name="keyword"
          content="Umara Property, villa Bali, villa Ubud, villa Uluwatu, villa Krobokan, akomodasi mewah Bali, villa ramah hewan peliharaan, WiFi gratis Bali, fasilitas Bali, sewa villa Bali"
        />
        <link rel="icon" href="./assets/umara.png" />
      </Helmet>
      <div className="bg-cover bg-center md:h-screen h-[340px] w-full overflow-clip relative">
        <LazyLoad>
          <img
            src="./assets/VillaUmarawebp/4994d5f1-3402-47e0-a9a7-4f4811d14941.webp"
            alt=""
            className="w-full absolute md:bottom-[-300px] bottom-[-10px]"
          />
        </LazyLoad>
        <div className="absolute bottom-0 right-0 w-full bg-gradient-to-t from-white via-white to-transparent md:px-16 md:py-8 px-6 py-6">
          <div className="flex w-full md:justify-end justify-center gap-4">
            <img
              src="./assets/VillaUmarawebp/4994d5f1-3402-47e0-a9a7-4f4811d14941.webp"
              alt=""
              className="md:w-64 md:h-64 sm:w-48 sm:h-48 w-24 h-24 rounded-full object-cover"
            />
            <img
              src="./assets/VillaUmarawebp/612a6260-eb6d-4ed4-b374-1589b168bbfa.webp"
              alt=""
              className="md:w-64 md:h-64 sm:w-48 sm:h-48 w-24 h-24 rounded-full object-cover"
            />
            <img
              src="./assets/VillaUmarawebp/493eec7d-d3e1-4e74-8a56-6e66bd7421a6.webp"
              alt=""
              className="md:w-64 md:h-64 sm:w-48 sm:h-48 w-24 h-24 rounded-full object-cover"
            />
          </div>
        </div>
      </div>
      {/* Villa Name */}
      <div className=" md:mt-24 mt-16  w-full md:px-16 px-6">
        <div className="flex flex-row flex-wrap w-full px-6 py-6 justify-between gap-8 md:items-end items-center">
          <div className="flex-1 flex-col md:max-w-[50%] md:gap-4">
            <p className=" font-spectral font-light md:text-8xl text-6xl ">
              Kerobokan
            </p>
            <p className=" font-spectral font-light md:text-8xl text-6xl ">
              Villa
            </p>
            <p className=" font-roboto font-light md:text-2xl text-xl ">
              Gg. Merta Ayu I No.2, Kerobokan, Kec. Kuta Utara, Kabupaten
              Badung, Bali 80361
            </p>
          </div>
          <div className="sm:w-[50%] md:w-[60%] w-full md:gap-4">
            <p className="font-roboto font-light md:text-2xl text-lg tracking-wide">
              Discover Umara Villa in Kerobokan, Bali, where elegance meets
              comfort. This stunning 2-bedroom villa accommodates up to 6
              guests, offering a serene retreat with 2 bathrooms, a private
              pool, and a fully-equipped kitchen. Enjoy the convenience of 1 car
              port and 2 motorcycle ports. With dedicated staff to cater to your
              needs, Umara Villa ensures a luxurious and stress-free stay in the
              heart of Bali
            </p>
          </div>
        </div>
      </div>

      {/* Icon */}
      <div className=" mt-24  w-full md:px-16 px-6">
        <div className="flex flex-row flex-wrap w-full px-6 py-6 justify-center md:gap-4 gap-8 items-center">
          <div className="relative md:w-[22%] w-full md:h-48 h-48 bg-gray-100 rounded-lg">
            <div className="flex justify-center pt-8 h-24">
              <LazyLoad>
                <img
                  src="./assets/icon/bed/person.png"
                  alt=""
                  className="h-full"
                />
              </LazyLoad>
            </div>
            <div className="absolute bottom-8 w-full">
              <p className=" text-center font-roboto text-xl">Up to 6 person</p>
            </div>
          </div>
          <div className="relative md:w-[22%] w-full md:h-48 h-48 bg-gray-100 rounded-lg">
            <div className="flex justify-center pt-8 h-24">
              <LazyLoad>
                <img
                  src="./assets/icon/bed/bed.png"
                  alt=""
                  className="h-full"
                />
              </LazyLoad>
            </div>
            <div className="absolute bottom-8 w-full">
              <p className=" text-center font-roboto text-xl">2 Bedrooms</p>
            </div>
          </div>
          <div className="relative md:w-[22%] w-full md:h-48 h-48 bg-gray-100 rounded-lg">
            <div className="flex justify-center pt-8 h-24">
              <LazyLoad>
                <img
                  src="./assets/icon/bed/bath.png"
                  alt=""
                  className="h-full"
                />
              </LazyLoad>
            </div>
            <div className="absolute bottom-8 w-full">
              <p className=" text-center font-roboto text-xl">2 bathrooms</p>
            </div>
          </div>
          <div className="relative md:w-[22%] w-full md:h-48 h-48 bg-gray-100 rounded-lg">
            <div className="flex justify-center pt-8 h-24">
              <LazyLoad>
                <img
                  src="./assets/icon/bed/person.png"
                  alt=""
                  className="h-full"
                />
              </LazyLoad>
            </div>
            <div className="absolute bottom-8 w-full">
              <p className=" text-center font-roboto text-xl">1 staff</p>
            </div>
          </div>
        </div>
      </div>
      {/* Gallery */}
      <div className=" mt-24  w-full md:px-16 px-6">
        <div className="flex flex-col w-full px-6 py-6 justify-center md:gap-4 gap-8 items-center">
          <div className="flex md:gap-4 gap-8 w-full flex-wrap">
            <img
              src="./assets/VillaUmarawebp/0ecead20-e835-4bf7-a18a-de0a7d896395.webp"
              alt=""
              className="flex-1 object-cover md:h-[400px] h-[300px] lg:max-w-[49%] w-full rounded-3xl"
            />
            <img
              src="./assets/VillaUmarawebp/493eec7d-d3e1-4e74-8a56-6e66bd7421a6.webp"
              alt=""
              className="flex-1 object-cover md:h-[400px] h-[300px] lg:max-w-[49%] w-full rounded-3xl"
            />
          </div>
          <div className="flex md:gap-4 gap-8 w-full flex-wrap">
            <img
              src="./assets/VillaUmarawebp/313a2dd2-6903-4404-bd00-5f947e76a088.webp"
              alt=""
              className="flex-1 object-cover md:h-[400px] h-[300px] lg:max-w-[49%] w-full rounded-3xl"
            />
            <img
              src="./assets/VillaUmarawebp/612a6260-eb6d-4ed4-b374-1589b168bbfa.webp"
              alt=""
              className="flex-1 object-cover md:h-[400px] h-[300px] lg:max-w-[49%] w-full rounded-3xl"
            />
          </div>
          <div className="flex md:gap-4 gap-8 w-full flex-wrap">
            <img
              src="./assets/VillaUmarawebp/4994d5f1-3402-47e0-a9a7-4f4811d14941.webp"
              alt=""
              className="flex-1 object-cover md:h-[400px] h-[300px] lg:max-w-[49%] w-full rounded-3xl"
            />
            <img
              src="./assets/VillaUmarawebp/d22d1000-6e7f-4a8e-be4f-3c834c8714bc.webp"
              alt=""
              className="flex-1 object-cover md:h-[400px] h-[300px] lg:max-w-[49%] w-full rounded-3xl"
            />
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Umara;
