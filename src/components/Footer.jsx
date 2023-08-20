const Footer = () => {
  return (
    <div className="footer mt-10 flex justify-center">
      <div className="w-[90%] h-auto bg-zinc-200 bg-opacity-25 rounded-lg">
        <div className="flex flex-col my-2 items-center justify-center">
          <h1 className="text-red-600 text-xl font-bold uppercase">
            Get Inspired!
          </h1>
          <h2 className="text-black text-xl uppercase font-medium">
            Best Users Designs
          </h2>
          <div className="footer-see-more flex gap-2 items-center">
            <p className="text-stone-900 text-lg font-semibold">See More</p>
            <img
              src="/src/assets/images/right-arrow-icon.svg"
              alt="right arrow icon"
            />
          </div>
          <img src="/src/assets/images/gothic-red-icon.svg" alt="gothic red icon" />
          <div className="w-[90%] h-12 mx-auto relative">
            <input
              type="text"
              className="w-full p-3 bg-zinc-200 rounded-lg text-base shadow-md focus:outline-none pr-12 placeholder-black font-normal"
              placeholder="punk heart, gothic"
            />
            <button className="w-1/3 h-full absolute right-0 top-0 bg-gradient-to-b from-neutral-300 to-neutral-300 rounded-tr-[9px] flex items-center justify-center">
              <p className="text-black text-opacity-75 text-[15px] uppercase font-normal">
                Artistic
              </p>
            </button>
          </div>
          <button className="w-2/4 h-11 my-5 bg-red-600 rounded-md">
            <p className="text-white text-xl font-semibold uppercase">Buy</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
