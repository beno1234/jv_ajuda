import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#252531] text-white pt-24">
      <div className="px-16">
        <div className="flex space-x-32">
          <div className="lg:w-1/5 ">
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
          </div>
          <div className="flex lg:w-4/5 space-x-8">
            <div className="lg:w-1/4">
              <div className="mb-8">
                <h6 className="text-[#b19777] text-xs uppercase tracking-[2px] mb-4">
                  Links Úteis
                </h6>
                <ul className="m-0">
                  <li>Páginas</li>
                  <li>Conta</li>
                  <li>Blocos</li>
                  <li>Docs</li>
                </ul>
              </div>
            </div>
            <div className="lg:w-1/4">
              <div className="mb-8">
                <h6 className="text-[#b19777] text-xs uppercase tracking-[2px] mb-4">
                  Telefone
                </h6>
                <p className="text-sm">+7(111)123456789</p>
                <p className="text-sm">+1(000)987654321</p>
              </div>
            </div>
            <div className="lg:w-1/4">
              <div className="mb-8">
                <h6 className="text-[#b19777] text-xs uppercase tracking-[2px] mb-4">
                  Email
                </h6>
                <p className="text-sm">contact@Archo.com</p>
                <p className="text-sm">Username@website.com</p>
              </div>
            </div>
            <div className="lg:w-1/4">
              <div className="mb-8">
                <h6 className="relative pb-3 text-[#b19777] text-xs uppercase tracking-[2px] mb-4">
                  Visite
                  <div className="absolute left-0 right-0 bottom-0 w-full bg-[rgba(255, 255, 255, 0.1)] h-[1px]"></div>
                </h6>
                <p className="text-sm">
                  B17 Princess Road, Londres, Grande Londres NW18JR, Reino Unido
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-12 mt-14 border-t border-solid border-white-opacity-02">
        <div className="px-16">
          <div className="flex justify-between">
            <div className="w-full lg:w-1/2  lg:mb-0">
              <div className="text-left">
                <p className="text-sm">
                  © 2020, Modelo Archo. Feito com paixão por
                  <a>UiThemez</a>
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="text-right">
                <p className="text-sm">
                  <a>UiThemez</a>
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
