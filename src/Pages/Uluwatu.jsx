import { Helmet } from "react-helmet";
import Navbar from "./Navbar";
import LazyLoad from "react-lazyload";
import Footer from "./template/Footer";

function Uluwatu() {
  return (
    <div>
      <Helmet>
        <title>Umara Villa</title>
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
            src="./assets/VillaUluwatuwebp/c3dbdc64-317c-45e4-9ad4-f951602c32d1.webp"
            alt=""
            className="w-full absolute h-full object-cover"
          />
        </LazyLoad>
        <div className="absolute bottom-0 right-0 w-full bg-gradient-to-t from-white via-white to-transparent md:px-16 md:py-8 px-6 py-6">
          <div className="flex w-full md:justify-end justify-center gap-4">
            <img
              src="./assets/VillaUluwatuwebp/7687b7b9-009f-4d7c-939e-397935e25367.webp"
              alt=""
              className="md:w-64 md:h-64 sm:w-48 sm:h-48 w-24 h-24 rounded-full object-cover"
            />
            <img
              src="./assets/VillaUluwatuwebp/fff0c78a-9d70-4ed6-ad00-105908bd085b.webp"
              alt=""
              className="md:w-64 md:h-64 sm:w-48 sm:h-48 w-24 h-24 rounded-full object-cover"
            />
            <img
              src="./assets/VillaUluwatuwebp/35f117a5-cab5-49f8-add4-bc36ae61afbd.webp"
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
              Uluwatu
            </p>
            <p className=" font-spectral font-light md:text-8xl text-6xl ">
              Villa
            </p>
            <p className=" font-roboto font-light md:text-2xl text-xl ">
              Jl. Tunjung belakang gereja no. D3, Ungasan, Kec. Kuta Selatan,
              Kab. Badung, Bali, 80361, Indonesia
            </p>
          </div>
          <div className="sm:w-[50%] md:w-[60%] w-full md:gap-4">
            <p className="font-roboto font-light md:text-2xl text-lg tracking-wide">
              luxurious 4-bedroom retreat near Uluwatu, Bali. This exquisite
              villa features 5 modern bathrooms, offering ample space and
              comfort for your stay. Enjoy the convenience of a car park
              accommodating 2 cars and 2 motorcycles. Perfectly situated close
              to Uluwatu's stunning beaches and attractions, Umara Villa is your
              ideal escape for relaxation and exploration in Bali
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
                  src="./assets/icon/bed/Car.png"
                  alt=""
                  className="h-full"
                />
              </LazyLoad>
            </div>
            <div className="absolute bottom-8 w-full">
              <p className=" text-center font-roboto text-xl">2 Car Park</p>
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
              <p className=" text-center font-roboto text-xl">4 Bedrooms</p>
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
              <p className=" text-center font-roboto text-xl">5 bathrooms</p>
            </div>
          </div>
          <div className="relative md:w-[22%] w-full md:h-48 h-48 bg-gray-100 rounded-lg">
            <div className="flex justify-center pt-8 h-24">
              <LazyLoad>
                <img
                  src="./assets/icon/bed/Motor.png"
                  alt=""
                  className="h-full"
                />
              </LazyLoad>
            </div>
            <div className="absolute bottom-8 w-full">
              <p className=" text-center font-roboto text-xl">
                2 Motorbike Park
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Gallery */}
      <div className=" mt-24  w-full md:px-16 px-6">
        <div className="flex flex-col w-full px-6 py-6 justify-center md:gap-4 gap-8 items-center">
          <div className="flex md:gap-4 gap-8 w-full flex-wrap">
            <img
              src="./assets/VillaUluwatuwebp/08fa3c14-9c70-49a2-bf54-3cb11ee00d66.webp"
              alt=""
              className="flex-1 object-cover md:h-[400px] h-[300px] lg:max-w-[49%] w-full rounded-3xl"
            />
            <img
              src="./assets/VillaUluwatuwebp/08fa3c14-9c70-49a2-bf54-3cb11ee00d66.webp"
              alt=""
              className="flex-1 object-cover md:h-[400px] h-[300px] lg:max-w-[49%] w-full rounded-3xl"
            />
          </div>
          <div className="flex md:gap-4 gap-8 w-full flex-wrap">
            <img
              src="./assets/VillaUluwatuwebp/fff0c78a-9d70-4ed6-ad00-105908bd085b.webp"
              alt=""
              className="flex-1 object-cover md:h-[400px] h-[300px] lg:max-w-[49%] w-full rounded-3xl"
            />
            <img
              src="./assets/VillaUluwatuwebp/fcd3a77c-b24a-43ca-b0f5-83508ecfc81d.webp"
              alt=""
              className="flex-1 object-cover md:h-[400px] h-[300px] lg:max-w-[49%] w-full rounded-3xl"
            />
          </div>
          <div className="flex md:gap-4 gap-8 w-full flex-wrap">
            <img
              src="./assets/VillaUluwatuwebp/7687b7b9-009f-4d7c-939e-397935e25367.webp"
              alt=""
              className="flex-1 object-cover md:h-[400px] h-[300px] lg:max-w-[49%] w-full rounded-3xl"
            />
            <img
              src="./assets/VillaUluwatuwebp/02413ca1-d0de-4fb3-a2e3-ee7d1efc17d3.webp"
              alt=""
              className="flex-1 object-cover md:h-[400px] h-[300px] lg:max-w-[49%] w-full rounded-3xl"
            />
          </div>
          <div className="flex md:gap-4 gap-8 w-full flex-wrap">
            <img
              src="./assets/VillaUluwatuwebp/f714d884-d425-4329-94d5-ebd61afe0e78.webp"
              alt=""
              className="flex-1 object-cover md:h-[400px] h-[300px] lg:max-w-[49%] w-full rounded-3xl"
            />
            <img
              src="./assets/VillaUluwatuwebp/c3dbdc64-317c-45e4-9ad4-f951602c32d1.webp"
              alt=""
              className="flex-1 object-cover md:h-[400px] h-[300px] lg:max-w-[49%] w-full rounded-3xl"
            />
          </div>
          <div className="flex md:gap-4 gap-8 w-full flex-wrap">
            <img
              src="./assets/VillaUluwatuwebp/db4ae590-594c-4e02-9a46-2f370e44f7bf.webp"
              alt=""
              className="flex-1 object-cover md:h-[400px] h-[300px] lg:max-w-[49%] w-full rounded-3xl"
            />
            <img
              src="./assets/VillaUluwatuwebp/a0faa84a-7cbe-4902-bca7-0f1064b88a68.webp"
              alt=""
              className="flex-1 object-cover md:h-[400px] h-[300px] lg:max-w-[49%] w-full rounded-3xl"
            />
          </div>
          <div className="flex md:gap-4 gap-8 w-full flex-wrap">
            <img
              src="./assets/VillaUluwatuwebp/fdb24626-c309-432a-ad97-0564b51a5144.webp"
              alt=""
              className="flex-1 object-cover md:h-[400px] h-[300px] lg:max-w-[49%] w-full rounded-3xl"
            />
            <img
              src="./assets/VillaUluwatuwebp/35f117a5-cab5-49f8-add4-bc36ae61afbd.webp"
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

export default Uluwatu;
