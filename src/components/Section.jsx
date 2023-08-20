const Section = () => {
  return (
    <div className="section mt-10">
      <div className="flex justify-center">
        <div className="w-[90%] h-12 mx-auto relative">
          <input
            type="text"
            className="w-full p-3 h-[48px] bg-neutral-100 rounded-[9px] shadow-md focus:outline-none pr-12 placeholder-stone-300"
            placeholder="What do you want to create?"
          />
          <button className="w-[54px] h-[48px] absolute right-0 top-0 bg-red-600 rounded-[7px] flex items-center justify-center">
            <img src="/src/assets/images/pen-white-icon.svg" alt="pen white icon" />
          </button>
        </div>
      </div>
      <div className="section-tabs w-[90%] mt-5 flex mx-auto gap-3 justify-around">
        <button className="w-1/3 py-4 flex items-center justify-center bg-neutral-100 rounded-[7px]">
          <p className="text-center text-black text-sm font-semibold">
            High Quality
          </p>
        </button>
        <button className="w-1/3 py-4 flex items-center justify-center bg-neutral-100 rounded-[7px]">
          <p className="text-center text-black text-sm font-semibold">
            Pop Art
          </p>
        </button>
        <button className="w-1/3 py-4 flex items-center justify-center bg-neutral-100 rounded-[7px]">
          <p className="text-center text-black text-sm font-semibold">
            Realistic Look
          </p>
        </button>
      </div>
      <div className="section-style-preview mt-5 flex justify-center">
        <div className="w-[90%] p-2 bg-zinc-200 bg-opacity-20 rounded-[9px] shadow-md flex justify-between px-5">
          <div className="left-content flex flex-col items-center justify-center">
            <p className="text-stone-800 text-[13px] font-semibold">
              Style preview
            </p>
            <img src="/src/assets/images/anime-boy.png" alt="anime boy" />
          </div>
          <div className="flex items-center gap-1">
            <div>
              <img
                src="/src/assets/images/hand-cursor-icon.svg"
                alt="hand cursor icon"
              />
            </div>
            <div className="right-content flex flex-col items-center justify-center gap-2">
              <h1 className="text-black text-sm uppercase font-semibold">
                Minimalistic
              </h1>
              <div className="flex items-center">
                <button className="btn-action w-auto px-5 py-2 bg-red-600 rounded-[7px] shadow-inner">
                  <p className="text-center text-neutral-100 text-base uppercase font-semibold">
                    Cartoon
                  </p>
                </button>
              </div>
              <div className="flex items-center gap-1">
                <img src="/src/assets/images/padlock-icon.svg" alt="padlock icon" />
                <p className="text-center text-stone-300 text-sm font-semibold uppercase">
                  Artistic
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
