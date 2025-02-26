import Email from "../assets/icon-email.webp";
import X from "../assets/icon-x.png";
import Facebook from "../assets/Icon-facebook.webp";
import Line from "../assets/line-vertical.png";
import Menu from "../assets/menu.png";

function Side({ setIsMenuVisible }) {
  return (
    <div className="absolute top-0 h-dvh md:w-20 w-16 bg-neutral-400/15 backdrop-blur-sm flex flex-col items-center justify-between py-6">
      <button onClick={() => setIsMenuVisible(true)} className="h-auto w-5/12 transition-transform hover:scale-125">
        <img src={Menu} alt="Menu" />
      </button>

      <div className="flex flex-col items-center h-full justify-around">
        <img src={Line} alt="Line" className="w-3 xl:h-14 sm:h-30 h-12 " />
        <p className="font-extrabold lg:text-2xl text-4xl text-center font-mono -rotate-90">
          MyTinerary
        </p>
        <img src={Line} alt="Line" className="w-3 xl:h-14 sm:h-24 h-12" />
      </div>

      <div className="flex flex-col items-center space-y-4">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="h-auto w-5/12 transition-transform hover:scale-150 mb-5">
          <img src={Facebook} alt="Icon facebook" />
        </a>

        <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="h-auto w-4/12 transition-transform hover:scale-150">
          <img src={X} alt="X Icon" />
        </a>

        <a href="https://mail.google.com" target="_blank" rel="noopener noreferrer" className="h-auto w-6/12 transition-transform hover:scale-150">
          <img src={Email} alt="Icon email" />
        </a>
      </div>

      <div className="flex flex-col-reverse lg:flex-col text-center font-mono lg:text-sm text-3xl font-bold pt-20 lg:pt-0">
        <p className="-rotate-90 lg:rotate-0 mb-4 lg:mb-0">By</p>
        <p className="-rotate-90 lg:rotate-0 mb-14 lg:mb-0">Augusto</p>
      </div>
    </div>
  );
}

export default Side;
