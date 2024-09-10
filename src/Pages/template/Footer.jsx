function Footer() {
  return (
    <div className=" md:mt-48 mt-24 w-full md:px-16 px-6 py-12 gap-12 flex md:flex-row flex-col flex-wrap bg-primaryBrown">
      <div className=" flex-1 flex items-end gap-4">
        <img
          src="./assets/logo/Group.png"
          className="md:w-[200px] w-[150px]"
          alt=""
        />
        <a href="/">
          <div className="flex-col">
            <p className="font-spectral font-thin md:text-6xl text-4xl text-white">
              Umara
            </p>
            <p className="font-spectral font-thin md:text-6xl text-4xl text-white">
              Property
            </p>
          </div>
        </a>
      </div>
      <div className=" flex-1 flex gap-4">
        <div className="flex-col gap-4 items-center w-full px-6  ">
          <p className="font-roboto font-thin md:text-3xl text-xl text-white">
            propertyumara@yahoo.com
          </p>
          <p className="font-roboto font-thin md:text-3xl text-xl text-white">
            +62 821-1530-5519 (By WA)
          </p>
          <p className="font-roboto font-thin md:text-3xl text-xl text-white">
            Bali, Indonesia
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
