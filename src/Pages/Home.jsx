import { Helmet } from "react-helmet";
import Navbar from "./Navbar";
import LazyLoad from "react-lazyload";
import { redirect } from "react-router-dom";
import Footer from "./template/Footer";
function Home() {
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

      <div className="bg-cover bg-center md:h-screen w-full overflow-clip relative">
        <LazyLoad>
          <img
            src="./assets/VillaUluwatuwebp/08fa3c14-9c70-49a2-bf54-3cb11ee00d66.webp"
            alt=""
            className="object-cover w-full"
          />
        </LazyLoad>
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-white via-white to-transparent md:px-16 md:py-16 px-6 py-6">
          <p className="font-spectral md:text-6xl text-4xl font-extralight">
            MATCH YOUR VILLA
          </p>
          <p className="font-spectral md:text-6xl text-4xl font-extralight">
            TO YOUR DREAM
          </p>
        </div>
      </div>

      {/* Card */}
      <div className=" md:mt-48 mt-24 w-full md:px-16 px-6">
        {/* Card */}
        <div className="flex flex-row flex-wrap w-full px-12 py-12 bg-[#EDEDEE] justify-between md:gap-0 gap-8 md:items-start items-center rounded-[32px] shadow-xl">
          <div className="flex flex-col md:max-w-[50%] gap-6">
            <div className="flex flex-col md:gap-4 text-primaryBrown">
              <p className=" font-spectral font-light md:text-6xl text-4xl">
                Umara
              </p>
              <p className=" font-spectral font-light md:text-6xl text-4xl ">
                Property
              </p>
            </div>
            <p className=" font-roboto font-light md:text-3xl text-lg">
              Experience luxury and tranquility with our beautiful villas in
              Bali. We offer seamless and personalized care for your temporary
              home. From expert maintenance to bespoke guest experiences, our
              team is dedicated to providing exceptional service, so you can
              enjoy the stunning beauty of Bali with peace of mind.
            </p>
          </div>
          <div className="flex flex-col items-center md:pl-4 md:border-l md:border-[#CFCFCE]">
            <LazyLoad>
              <img
                src="/assets/logo/logoumara.png"
                alt=""
                className="md:w-[400px] w-[200px]"
              />
            </LazyLoad>
            <div>
              <p className=" font-roboto font-light text-xl">
                propertyumara@yahoo.com
              </p>
              <p className=" font-roboto font-light text-xl">
                +62 821-1530-5519 (By WA)
              </p>
              <p className=" font-roboto font-light text-xl">Bali, Indonesia</p>
            </div>
          </div>
        </div>
      </div>

      {/* Feature */}
      <div className=" md:mt-48 mt-24 w-full md:px-16 px-6">
        <div className="flex flex-row flex-wrap w-full px-12 py-12 justify-between md:gap-0 gap-8 md:items-start items-center">
          <div className="flex flex-col md:max-w-[50%] md:gap-4">
            <p className=" font-spectral font-light md:text-6xl text-4xl text-primaryBrown">
              Your
            </p>
            <p className=" font-spectral font-light md:text-6xl text-4xl text-primaryBrown">
              Excelent Villa
            </p>
            <p className=" font-spectral font-light md:text-6xl text-4xl text-primaryBrown">
              Ends Here
            </p>
          </div>
          <div className="flex flex-col md:gap-8 gap-6 md:w-[40%]">
            <div className="flex md:gap-6 gap-4 items-center">
              <img src="./assets/icon/loc.png" alt="" className="w-[48px]" />
              <p className="font-roboto md:text-xl text-lg ">
                Strategies Location
              </p>
            </div>
            <div className="flex md:gap-6 gap-4 items-center">
              <img src="./assets/icon/wifi.png" alt="" className="w-[48px]" />
              <p className="font-roboto md:text-xl text-lg ">Free Wifi</p>
            </div>
            <div className="flex md:gap-6 gap-4 items-center">
              <img src="./assets/icon/pet.png" alt="" className="w-[48px]" />
              <p className="font-roboto md:text-xl text-lg ">Pet friendly</p>
            </div>
            <div className="flex md:gap-6 gap-4 items-center">
              <img src="./assets/icon/sec.png" alt="" className="w-[48px]" />
              <p className="font-roboto md:text-xl text-lg ">
                24 hours Security
              </p>
            </div>
            <div className="flex md:gap-6 gap-4 items-center">
              <img src="./assets/icon/am.png" alt="" className="w-[48px]" />
              <p className="font-roboto md:text-xl text-lg ">Free Amanities</p>
            </div>
          </div>
        </div>
      </div>

      {/* Uluwatu */}
      <div className=" md:mt-48 mt-24 w-full md:px-16 px-6 gap-12 flex md:flex-row flex-col flex-wrap">
        <a href="/ubud" className="md:flex-1">
          <div className="overflow-clip md:h-[500px] h-[500px] rounded-2xl relative">
            <LazyLoad>
              <img
                src="./assets/VillaUbudwebp/59dc0bea-2008-48f9-baf3-a4789e74ab8d.webp"
                alt=""
                className="w-full h-[500px] object-cover"
              />
            </LazyLoad>
            <div className="absolute bottom-0 left-0 py-4 text-center w-full bg-gradient-to-t from-white/90 via-white/50  to-transparent">
              <p className="md:text-4xl text-2xl font-spectral font-thin">
                Ubud Villa
              </p>
            </div>
          </div>
        </a>
        <a href="/uluwatu" className="md:flex-1">
          <div className=" overflow-clip md:h-[500px] h-[500px] rounded-2xl relative">
            <LazyLoad>
              <img
                src="./assets/VillaUluwatuwebp/47a3b8be-b58f-43e7-9d71-e2f4a012664b.webp"
                alt=""
                className="h-[500px] object-cover"
              />
              <div className="absolute bottom-0 left-0 py-4 text-center w-full bg-gradient-to-t from-white/90 via-white/50  to-transparent">
                <p className="md:text-4xl text-2xl font-spectral font-thin">
                  Uluwatu Villa
                </p>
              </div>
            </LazyLoad>
          </div>
        </a>
        <a href="/kerobokan" className="md:flex-1">
          <LazyLoad>
            <div className=" overflow-clip md:h-[500px] h-[500px] rounded-2xl relative">
              <img
                src="./assets/VillaUmarawebp/493eec7d-d3e1-4e74-8a56-6e66bd7421a6.webp"
                alt=""
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute bottom-0 left-0 py-4 text-center w-full bg-gradient-to-t from-white/90 via-white/50  to-transparent">
                <p className="md:text-4xl text-2xl font-spectral font-thin">
                  Kerobokan Villa
                </p>
              </div>
            </div>
          </LazyLoad>
        </a>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
