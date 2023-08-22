import Skill from "../../components/skill";

const Empreendimentos2 = () => {
  const numberOfDivs = 29; // Total de divs que você quer renderizar
  const sectionTitles = [
    "",
    "Residencial Gontijo",
    "Jardim America",
    "Jardim Vitória",
    "Residencial Manancial",
    "Nova Floresta I, II, III E IV",
    "Jardim Paraíso",
    "Jardim Vitória",
    "Belo Horizonte II",
    "Santa Rita de Cássia",
    "Residencial Amazonas",
    "Residencial Vista Alegre",
    "Jardim Vitória",
    "Residencial Peluzzo",
    "Nossa Senhora das Valias",
    "Alta Villa",
    "Residencial dos Jacarandás",
    "Novo Paraíso I e II",
    "Jardim Botânico",
    "Belo Horizonte",
    "Jardim Vitória",
    "Jardim Vitória",
    "Jardim Vitória II",
    "Jardim Vitória I E II",
    "Nossa Senhora das Lourdes",
    "Santa Maria",
    "Residencial Morada Nova IV",
    "Jardim Vitória",
    "Jardim Natal I",
    "Versol Costa",
  ];

  const renderDivs = () => {
    const divs = [];
    for (let i = 1; i <= numberOfDivs; i++) {
      divs.push(
        <div
          key={i}
          className="flex flex-col lg:flex-row border-b-4 border-black"
        >
          <div className="lg:w-1/2">
            <img src={`/FotosCardeal(${i}).webp`} className="h-full" alt="" />
          </div>
          <div className="lg:w-1/2">
            <Skill
              title={sectionTitles[i]}
              ruas={10}
              terra={15}
              esgoto={30}
              pluvial={20}
            />
          </div>
        </div>
      );
    }
    return divs;
  };

  return (
    <div className="  lg:pt-0">
      <div>{renderDivs()}</div>
    </div>
  );
};

export default Empreendimentos2;
