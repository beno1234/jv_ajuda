import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebookF } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faInstagram,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
  return (
    <footer className="w-full flex flex-col bg-[#252531] text-white pt-24">
      <div className="px-5 md:px-16">
        <div className="flex flex-col md:flex-row lg:space-x-32">
          <div className="md:max-w-[350px] lg:w-1/5 mb-5">
            <div className="mb-8 ">
              {" "}
              <a>
                <img src="/icon-cardeal.png" width={70} />
              </a>
            </div>
            <p className="text-sm">
              Nossa equipe cuida de tudo, desde o desenvolvimento de ideias e
              conceitos até a realização.
            </p>

            <div className="w-full flex justify-between gap-2 mt-5 ">
              <a className="w-full max-w-[35px] flex justify-center items-center p-2 border border-white rounded-full cursor-pointer hover:bg-[#b19777]">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>

              <a className="w-full max-w-[35px] flex justify-center items-center p-2 border border-white rounded-full cursor-pointer hover:bg-[#b19777]">
                <FontAwesomeIcon icon={faInstagram} />
              </a>

              <a className="w-full max-w-[35px] flex justify-center items-center p-2 border border-white rounded-full cursor-pointer hover:bg-[#b19777]">
                <FontAwesomeIcon icon={faTiktok} />
              </a>

              <a className="w-full max-w-[35px] flex justify-center items-center p-2 border border-white rounded-full cursor-pointer hover:bg-[#b19777]">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap md:w-full lg:space-x-8">
            <div className="md:w-2/4">
              <div className="mb-8">
                <h6 className="text-[#b19777] text-xs uppercase tracking-[2px] mb-1">
                  Links Úteis
                </h6>
                <hr className="mb-4 md:hidden opacity-30" />
                <ul className="m-0">
                  <li>Home</li>
                  <li>Sobre</li>
                  <li>Empreendimentos</li>
                </ul>
              </div>
            </div>
            <div className="md:w-2/4">
              <div className="mb-8">
                <h6 className="text-[#b19777] text-xs uppercase tracking-[2px] mb-1">
                  Telefone
                </h6>
                <hr className="mb-4 md:hidden opacity-30" />
                <p className="text-sm">+7(111)123456789</p>
                <p className="text-sm">+1(000)987654321</p>
              </div>
            </div>
            <div className="md:w-2/4">
              <div className="mb-8">
                <h6 className="text-[#b19777] text-xs uppercase tracking-[2px] mb-1">
                  Email
                </h6>
                <hr className="mb-4 md:hidden opacity-30" />
                <p className="text-sm">contact@Archo.com</p>
                <p className="text-sm">Username@website.com</p>
              </div>
            </div>
            <div className="md:w-2/4">
              <div className="mb-8">
                <h6 className="relative text-[#b19777] text-xs uppercase tracking-[2px] mb-1">
                  Visite
                  <div className="absolute left-0 right-0 bottom-0 w-full bg-[rgba(255, 255, 255, 0.1)] h-[1px]"></div>
                </h6>
                <hr className="mb-4 md:hidden opacity-30" />
                <p className="text-sm">
                  B17 Princess Road, Londres, Grande Londres NW18JR, Reino Unido
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 mt-14 border-t border-solid border-white-opacity-02">
        <div className="px-5 md:px-16">
          <div className="flex justify-between">
            <div className="w-full lg:w-1/2  lg:mb-0">
              <div className="text-left">
                <p className="text-sm">© 2020, Cardeal Empreendimentos.</p>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="text-right">
                <p className="text-sm">
                  Desenvolvido por
                  <a
                    href="https://www.bmouseproductions.com/"
                    className="font-bold ml-1"
                  >
                    Bmouse Productions
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
