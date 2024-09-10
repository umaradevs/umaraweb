import { Helmet } from "react-helmet";
import Navbar from "./Navbar";
import LazyLoad from "react-lazyload";
import Footer from "./template/Footer";
function Ubud() {
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
      {/* <div className="bg-cover bg-center md:h-screen w-full overflow-clip relative">
        <LazyLoad>
          <img
            src="./assets/VillaUbudwebp/ubud.png"
            alt=""
            className="object-cover w-full"
          />
        </LazyLoad> */}
      <div className="bg-cover bg-center md:h-screen h-[340px] w-full overflow-clip relative">
        <LazyLoad>
          <img
            src="./assets/VillaUbudwebp/ubud.png"
            alt=""
            className="w-full absolute h-full object-cover"
          />
        </LazyLoad>
        <div className="absolute bottom-0 right-0 w-full bg-gradient-to-t from-white via-white to-transparent md:px-16 md:py-8 px-6 py-6">
          <div className="flex w-full md:justify-end justify-center gap-4">
            <img
              src="./assets/VillaUbudwebp/5a7782a9-2aed-4f7a-8d53-0238a1590b0b.webp"
              alt=""
              className="md:w-64 md:h-64 sm:w-48 sm:h-48 w-24 h-24 rounded-full"
            />
            <img
              src="./assets/VillaUbudwebp/b5815cce-1c44-43f2-a385-ddb00f87af85.webp"
              alt=""
              className="md:w-64 md:h-64 sm:w-48 sm:h-48 w-24 h-24 rounded-full"
            />
            <img
              src="./assets/VillaUbudwebp/26634aba-2345-492a-ac90-754bb862103d.webp"
              alt=""
              className="md:w-64 md:h-64 sm:w-48 sm:h-48 w-24 h-24 rounded-full"
            />
          </div>
        </div>
      </div>
      {/* Villa Name */}
      <div className=" md:mt-24 mt-16  w-full md:px-16 px-6">
        <div className="flex flex-row flex-wrap w-full px-6 py-6 justify-between gap-8 md:items-end items-center">
          <div className="flex-1 flex-col md:max-w-[50%] md:gap-4">
            <p className=" font-spectral font-light md:text-8xl text-6xl ">
              Ubud
            </p>
            <p className=" font-spectral font-light md:text-8xl text-6xl ">
              Villa
            </p>
            <p className=" font-roboto font-light md:text-2xl text-xl ">
              Jl. Raya Silungan, Lodtunduh, Kec. Ubud, Kab. Gianyar, Bali 80571,
              Indonesia
            </p>
          </div>
          <div className="sm:w-[50%] md:w-[60%] w-full md:gap-4">
            <p className="font-roboto font-light md:text-2xl text-lg tracking-wide">
              Immerse yourself in unparalleled luxury with our collection of 5
              private villas, each nestled in a serene enclave in Ubud. Each
              villa offers a secluded haven with 1 elegant bedroom, complete
              with a sumptuous bathtub for ultimate relaxation. Step outside to
              your own private pool, perfect for refreshing dips or tranquil
              lounging amidst lush surroundings. This exclusive retreat combines
              intimacy and opulence, providing a perfect escape to rejuvenate
              and explore the enchanting beauty of Ubud.
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
              <p className=" text-center font-roboto text-xl">2 person</p>
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
              <p className=" text-center font-roboto text-xl">1 Bedrooms</p>
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
              <p className=" text-center font-roboto text-xl">1 bathrooms</p>
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
              src="./assets/VillaUbudwebp/26634aba-2345-492a-ac90-754bb862103d.webp"
              alt=""
              className="flex-1 object-cover md:h-[400px] h-[300px] rounded-3xl"
            />
            <img
              src="./assets/VillaUbudwebp/c1b71c1d-48c9-4e82-9844-103a72a147ea.webp"
              alt=""
              className="flex-1 object-cover md:h-[400px] h-[300px] rounded-3xl"
            />
          </div>
          <div className="flex md:gap-4 gap-8 w-full flex-wrap">
            <img
              src="./assets/VillaUbudwebp/393e8821-181c-413f-8020-5d4dff377d2f.webp"
              alt=""
              className="flex-1 object-cover md:h-[400px] h-[300px] rounded-3xl"
            />
            <img
              src="./assets/VillaUbudwebp/0eae66c6-f2ac-47f7-b221-d7afa059f587.webp"
              alt=""
              className="flex-1 object-cover md:h-[400px] h-[300px] rounded-3xl"
            />
          </div>
          <div className="flex md:gap-4 gap-8 w-full flex-wrap">
            <img
              src="./assets/VillaUbudwebp/589079e1-1f79-4c89-879a-2607ff1a9a49.webp"
              alt=""
              className="flex-1 object-cover md:h-[400px] h-[300px] rounded-3xl"
            />
            <img
              src="./assets/VillaUbudwebp/7ceaef7e-42f3-4ef4-9e4b-06014d1a6605.webp"
              alt=""
              className="flex-1 object-cover md:h-[400px] h-[300px] rounded-3xl"
            />
          </div>
          <div className="flex md:gap-4 gap-8 w-full flex-wrap">
            <img
              src="./assets/VillaUbudwebp/5a7782a9-2aed-4f7a-8d53-0238a1590b0b.webp"
              alt=""
              className="flex-1 object-cover md:h-[400px] h-[300px] rounded-3xl"
            />
            <img
              src="./assets/VillaUbudwebp/74be57fd-31d6-4ac4-83ba-63f10542329e.webp"
              alt=""
              className="flex-1 object-cover md:h-[400px] h-[300px] rounded-3xl"
            />
          </div>
          <div className="flex md:gap-4 gap-8 w-full flex-wrap">
            <img
              src="./assets/VillaUbudwebp/e43d64a0-cf3f-4334-bcc7-1a503059fe2d.webp"
              alt=""
              className="flex-1 object-cover md:h-[400px] h-[300px] rounded-3xl"
            />
            <img
              src="./assets/VillaUbudwebp/b5815cce-1c44-43f2-a385-ddb00f87af85.webp"
              alt=""
              className="flex-1 object-cover md:h-[400px] h-[300px] rounded-3xl"
            />
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Ubud;
