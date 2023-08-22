import React from "react";

const HeaderSection = () => {
  return (
    <header className="h-[100vh]">
      <div
        className="h-full bg-cover bg-center text-white relative flex items-center justify-center" // Adicionamos "flex items-center justify-center"
        style={{
          backgroundImage: "url(/bannerhome.webp)",
        }}
      ></div>
    </header>
  );
};

export default HeaderSection;
