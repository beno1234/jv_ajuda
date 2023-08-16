const Testimonials = () => {
  return (
    <section className="py-10 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-l from-blue-800 to-black">
      <div className="px-4 md:px-8 lg:px-16 xl:px-32">
        <div className="text-center mb-10">
          <h6 className="text-white font-light text-sm md:text-base lg:text-lg uppercase tracking-[2px] teko">
            O que nossos
          </h6>
          <h4 className="font-medium text-white text-2xl md:text-4xl lg:text-5xl tracking-[1px] playfont">
            Clientes falam ?
          </h4>
        </div>
        <div className="grid gap-8 md:gap-12 lg:gap-16 grid-cols-1 md:grid-cols-2">
          <div className="relative mx-auto">
            <div className="mx-4 md:mx-0">
              <span className="absolute -top-8 right-8 md:right-12 w-16 md:w-20 z-20">
                <img src="/quote.svg" alt="Quote" width={250} />
              </span>
              <div className="p-6 md:p-10 border-4 border-white border-solid border-t-0 relative">
                <div className="cont">
                  <p className="text-base md:text-lg font-normal italic text-white playfont">
                    "I just love their design for all stunning details. You must
                    know what can you do for a project before taking it, but
                    with Archo, the sky is the limit."
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative mx-auto">
            <div className="mx-4 md:mx-0">
              <span className="absolute -top-8 right-8 md:right-12 w-16 md:w-20 z-20">
                <img src="/quote.svg" alt="Quote" width={250} />
              </span>
              <div className="p-6 md:p-10 border-4 border-white border-solid border-t-0 relative">
                <div className="cont">
                  <p className="text-base md:text-lg font-normal italic text-white playfont">
                    "I just love their design for all stunning details. You must
                    know what can you do for a project before taking it, but
                    with Archo, the sky is the limit."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
