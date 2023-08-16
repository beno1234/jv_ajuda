import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Empresa = () => {
  return (
    <section>
      <div className="bg-[url('/04.jpg')] bg-cover bg-no-repeat bg-fixed bg-center h-[70vh] relative">
        <div className="absolute w-full h-full top-0 left-0 z-10 bg-[#02050b] opacity-70"></div>
      </div>
      <div className="relative mt-[-20rem] z-30">
        <div className="flex flex-col md:flex-row overflow-hidden px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32">
          <div className="md:w-1/2 lg:w-1/3 md:col-span-6 py-16 px-6 md:px-4 lg:px-6 xl:px-8 bg-white border border-solid border-[#eee] border-r-0 transition-all duration-300 hover:bg-blue-900 hover:text-white box">
            <h2 className="teko font-normal numb2">01</h2>
            <h6 className="mb-3 md:mb-5">Missão</h6>
            <p className="text-sm md:text-base hover:text-white">
              Criar, desenvolver e entregar projetos baseados no "Índice
              Cardeal", que busca o equilíbrio perfeito entre bem-estar e
              finanças. Buscamos inovação em nossas soluções de desenvolvimento,
              excelência e qualidade na prestação de serviços, sempre oferecendo
              preços justos para nossos clientes e parceiros.
            </p>
          </div>
          <div className="md:w-1/2 lg:w-1/3 md:col-span-6 py-16 px-6 md:px-4 lg:px-6 xl:px-8 bg-white border border-solid border-[#eee] border-r-0 transition-all duration-300 hover:bg-blue-900 hover:text-white box">
            <h2 className="teko font-normal numb2">02</h2>
            <h6 className="mb-3 md:mb-5">Visão</h6>
            <p className="text-sm md:text-base hover:text-white">
              Estabelecer uma reputação nacional como uma empresa comprometida
              com a excelência, a transparência e a responsabilidade social.
              Buscamos garantir o sucesso de nossos empreendimentos por meio de
              uma abordagem ética e transparente, contribuir para a construção
              de um futuro próspero para as comunidades em que atuamos.
            </p>
          </div>
          <div className="md:w-full lg:w-1/3 mx-auto md:col-span-6 py-16 px-6 md:px-4 lg:px-6 xl:px-8 bg-white border border-solid border-[#eee] border-r-0 transition-all duration-300 hover:bg-blue-900 hover:text-white box">
            <div className="flex flex-col h-full justify-center items-center">
              <h2 className="teko font-normal numb2">03</h2>
              <h6 className="mb-3 md:mb-5">Valores</h6>
              <ul className="list-disc pl-6 mb-8">
                <li>Responsabilidade social</li>
                <li>Segurança e comprometimento</li>
                <li>Inovação e qualidade</li>
                <li>Integridade e transparência</li>
                <li>Exclusividade e qualidade</li>
                <li>Desenvolvimento dos colaboradores</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="relative py-32 px-4 lg:px-32">
        <div className="relative mx-auto mb-20 text-center">
          <div className="lg:col-span-6 md:col-span-8 sm:col-span-10">
            <h6 className="text-blue-900 font-light text-base uppercase tracking-[4px] mb-3 teko">
              Equipe
            </h6>
            <h4 className="font-medium text-4xl tracking-[2px] playfont">
              Nossa Equipe
            </h4>
          </div>
        </div>
        <div className="flex flex-wrap justify-center">
          {/* Repeating structure for each team member */}
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="px-4 lg:w-1/4 md:w-1/2 relative mb-8">
              <div className="overflow-hidden imagem">
                <img
                  src="/cara.jpeg"
                  className="img-cara"
                  width={250}
                  alt="Team Member"
                />
                <div className="absolute z-20 opacity-0 top-0 -left-10 bg-white py-5 px-3 social">
                  <a className="block text-sm mt-3 text-blue-900">
                    <FaFacebookF style={{ color: "#005ed3" }} />
                  </a>
                  <a className="block text-sm mt-3 text-blue-900">
                    <FaInstagram style={{ color: "#005ed3" }} />
                  </a>
                  <a className="block text-sm mt-3 text-blue-900">
                    <FaLinkedinIn style={{ color: "#005ed3" }} />
                  </a>
                </div>
              </div>
              <div className="mt-5 text-center">
                <h5>Hasib Sharif</h5>
                <span>General Manager</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Empresa;
