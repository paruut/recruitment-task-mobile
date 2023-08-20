const Header = () => {
  return (
    <div className="header mt-12">
      <div className="header-logo flex justify-center">
        <img src="/src/assets/images/logo.svg" alt="logo" />
      </div>
      <div className="header-description mt-5 text-center">
        <span className="text-red-600 text-xl font-bold">
          Generate your ART
          <br />
        </span>
        <span className="text-black text-xl font-semibold">
          by typing in field below any words
          <br /> that comes to your mind!
        </span>
      </div>
      <div className="header-order  mt-10 ">
        <div className="stepper-wrapper">
          <div className="stepper-item stepper-active">
            <div className="step-counter">
              <p className="text-center text-base font-medium">1</p>
            </div>
            <div className="step-name">
              <p className="text-red-600 leading-4 text-sm font-semibold text-center">
                Generate <br />
                image
              </p>
            </div>
          </div>
          <div className="stepper-item ">
            <div className="step-counter">
              <p className="text-center text-base font-medium text-neutral-400">
                2
              </p>
            </div>
            <div className="step-name text-center">
              <p className="text-stone-300 leading-4 text-sm font-semibold text-center">
                Choose your
                <br /> product
              </p>
            </div>
          </div>
          <div className="stepper-item ">
            <div className="step-counter">
              {" "}
              <p className="text-center text-base font-medium text-neutral-400">
                3
              </p>
            </div>
            <div className="step-name text-center">
              <p className="text-stone-300 text-sm font-semibold text-center">
                Third
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
