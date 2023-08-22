const Empresa = () => {
  return (
    <section className="bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-blue-600">
              Missão
            </h2>
            <p className="text-gray-700">
              Criar, desenvolver e entregar projetos baseados no "Índice
              Cardeal", que busca o equilíbrio perfeito entre bem-estar e
              finanças. Buscamos inovação em nossas soluções de desenvolvimento,
              excelência e qualidade na prestação de serviços, sempre oferecendo
              preços justos para nossos clientes e parceiros.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-blue-600">
              Visão
            </h2>
            <p className="text-gray-700">
              Estabelecer uma reputação nacional como uma empresa comprometida
              com a excelência, a transparência e a responsabilidade social.
              Buscamos garantir o sucesso de nossos empreendimentos por meio de
              uma abordagem ética e transparente, contribuir para a construção
              de um futuro próspero para as comunidades em que atuamos.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-blue-600">
              Valores
            </h2>
            <ul className="text-gray-700 space-y-2">
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
    </section>
  );
};

export default Empresa;
