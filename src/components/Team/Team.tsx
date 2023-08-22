import React from "react";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "João Silva",
      position: "CEO",
      bio: "Com vasta experiência na área financeira, João lidera nossa equipe com paixão e visão.",
      image:
        "https://d2r9epyceweg5n.cloudfront.net/stores/001/147/751/products/rosto-completo31-6398727b1357bf9af915870728409463-640-0.png",
      social: {
        twitter: "https://twitter.com/joaosilva",
        linkedin: "https://www.linkedin.com/in/joaosilva",
      },
    },
    {
      name: "João Silva",
      position: "CEO",
      bio: "Com vasta experiência na área financeira, João lidera nossa equipe com paixão e visão.",
      image:
        "https://d2r9epyceweg5n.cloudfront.net/stores/001/147/751/products/rosto-completo31-6398727b1357bf9af915870728409463-640-0.png",
      social: {
        twitter: "https://twitter.com/joaosilva",
        linkedin: "https://www.linkedin.com/in/joaosilva",
      },
    },
    {
      name: "João Silva",
      position: "CEO",
      bio: "Com vasta experiência na área financeira, João lidera nossa equipe com paixão e visão.",
      image:
        "https://d2r9epyceweg5n.cloudfront.net/stores/001/147/751/products/rosto-completo31-6398727b1357bf9af915870728409463-640-0.png",
      social: {
        twitter: "https://twitter.com/joaosilva",
        linkedin: "https://www.linkedin.com/in/joaosilva",
      },
    },

    {
      name: "João Silva",
      position: "CEO",
      bio: "Com vasta experiência na área financeira, João lidera nossa equipe com paixão e visão.",
      image:
        "https://d2r9epyceweg5n.cloudfront.net/stores/001/147/751/products/rosto-completo31-6398727b1357bf9af915870728409463-640-0.png",
      social: {
        twitter: "https://twitter.com/joaosilva",
        linkedin: "https://www.linkedin.com/in/joaosilva",
      },
    },
    {
      name: "João Silva",
      position: "CEO",
      bio: "Com vasta experiência na área financeira, João lidera nossa equipe com paixão e visão.",
      image:
        "https://d2r9epyceweg5n.cloudfront.net/stores/001/147/751/products/rosto-completo31-6398727b1357bf9af915870728409463-640-0.png",
      social: {
        twitter: "https://twitter.com/joaosilva",
        linkedin: "https://www.linkedin.com/in/joaosilva",
      },
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center">
          Minha Equipe
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <div className="relative mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="rounded-full w-32 h-32 mx-auto mb-2"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
                  <a
                    href={member.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 mx-2"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 mx-2"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-gray-600 mb-2">{member.position}</p>
              <p className="text-gray-700">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
