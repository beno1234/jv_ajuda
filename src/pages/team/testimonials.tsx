const Testimonials = () => {
  return (
    <section className="py-32 block bg-gradient-to-l from-blue-800 to-black">
      <div className="px-32">
        <div className="relative mx-auto mb-20 text-center">
          <div className="flex justify-center">
            <div className="lg:col-span-6 md:col-span-8 sm:col-span-10">
              <h6 className="text-white font-light text-base uppercase tracking-[4px] mb-3 teko">
                O que nossos
              </h6>
              <h4 className="font-medium text-white text-4xl tracking-[2px] playfont">
                Clientes falam ?
              </h4>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="lg:col-12">
            <div className="relative">
              <div className="mx-5">
                <span className="absolute top-[-20px] right-[12%] w-[10%] z-20 ">
                  <img src="/quote.svg" width={250} />
                </span>
                <div className="p-14 pr-10 pb-10 border-[10px] border-solid border-white border-t-0 relative">
                  <div className="cont">
                    <p className="text-lg font-normal italic text-white playfont">
                      "I just love their design for all stunning details. You
                      must know what can you do for a project before taking it,
                      but with Archo, the sky is the limit."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-12">
            <div className="relative">
              <div className="mx-5">
                <span className="absolute top-[-20px] right-[12%] w-[10%] z-20 ">
                  <img src="/quote.svg" width={250} />
                </span>
                <div className="p-14 pr-10 pb-10 border-[10px] border-solid border-white border-t-0 relative">
                  <div className="cont">
                    <p className="text-lg font-normal italic text-white playfont">
                      "I just love their design for all stunning details. You
                      must know what can you do for a project before taking it,
                      but with Archo, the sky is the limit."
                    </p>
                  </div>
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
