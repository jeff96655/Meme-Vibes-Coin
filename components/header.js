import { useState, useCallback } from "react";
import MemevibesMenu from "./memevibes-menu";
import PortalPopup from "./portal-popup";

const Header = () => {
  const [isMemevibesMenuOpen, setMemevibesMenuOpen] = useState(false);

  const onFrameButtonClick = useCallback(() => {
    window.open("https://jeffspace.vercel.app");
  }, []);

  const onFrameButton1Click = useCallback(() => {
    window.open("https://jeffspace.vercel.app");
  }, []);

  const openMemevibesMenu = useCallback(() => {
    setMemevibesMenuOpen(true);
  }, []);

  const closeMemevibesMenu = useCallback(() => {
    setMemevibesMenuOpen(false);
  }, []);

  return (
    <>
      <div className="fixed my-0 mx-[!important] top-[0px] left-[0px] bg-gray-200 shadow-[0px_0px_0px_1px_rgba(0,_0,_0,_0.6)] w-[1440px] h-[60px] overflow-hidden shrink-0 z-[13]">
        <div className="absolute top-[9px] left-[0px] flex flex-row items-start justify-center gap-[400px] md:gap-[330px]">
          <img
            className="relative rounded-21xl w-[50px] h-[50px] overflow-hidden shrink-0 object-cover"
            alt=""
            src="/frame-1351@2x.png"
          />
          <div className="relative w-[696px] h-10">
            <div className="absolute top-[9px] left-[77px] w-[619px] h-[22px] md:hidden">
              <button
                className="cursor-pointer [border:none] p-0 bg-gold absolute top-[0px] left-[494px] rounded-3xs shadow-[0px_4px_0px_1px_#000] w-[125px] h-[22px] overflow-hidden hidden"
                onClick={onFrameButtonClick}
              >
                <b className="absolute top-[0px] left-[24px] text-mid font-inika text-black text-center">
                  Developer
                </b>
              </button>
              <button
                className="cursor-pointer [border:none] p-0 bg-gold absolute top-[0px] left-[332px] rounded-3xs shadow-[0px_4px_0px_1px_#000] w-[125px] h-[22px] overflow-hidden"
                onClick={onFrameButton1Click}
              >
                <b className="absolute top-[0px] left-[24px] text-mid font-inika text-black text-center">
                  Developer
                </b>
              </button>
              <button className="cursor-pointer [border:none] p-0 bg-gold absolute top-[0px] left-[170px] rounded-3xs shadow-[0px_4px_0px_1px_#000] w-[125px] h-[22px] overflow-hidden">
                <b className="absolute top-[0px] left-[48px] text-mid font-inika text-black text-center">
                  Buy
                </b>
              </button>
              <button className="cursor-pointer [border:none] p-0 bg-gold absolute top-[0px] left-[0px] rounded-3xs shadow-[0px_4px_0px_1px_#000] w-[125px] h-[22px] overflow-hidden">
                <b className="absolute top-[0px] left-[17px] text-mid font-inika text-black text-center">
                  Community
                </b>
              </button>
            </div>
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[0px] w-10 h-10 bg-[url('/menu@2x.png')] bg-cover bg-no-repeat bg-[top] hidden md:flex md:w-10"
              onClick={openMemevibesMenu}
            />
          </div>
        </div>
      </div>
      {isMemevibesMenuOpen && (
        <PortalPopup placement="Centered" onOutsideClick={closeMemevibesMenu}>
          <MemevibesMenu onClose={closeMemevibesMenu} />
        </PortalPopup>
      )}
    </>
  );
};

export default Header;
