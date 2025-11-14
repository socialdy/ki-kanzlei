export const LogoSliderPsychotherapeuten = () => {
  const logos = [
    { name: "Logo 1", src: "/img/testimonials/psychotherapeuten/testimonial-1.png" },
    { name: "Logo 2", src: "/img/testimonials/psychotherapeuten/testmonial-2.png" },
    { name: "Logo 3", src: "/img/testimonials/psychotherapeuten/testmonial-3.png" },
    { name: "Logo 4", src: "/img/testimonials/psychotherapeuten/testimonial-4.png" },
    { name: "Logo 5", src: "/img/testimonials/psychotherapeuten/testimonial-5.png" },
    { name: "Logo 6", src: "/img/testimonials/psychotherapeuten/testimonial-6.png" },
    { name: "Logo 7", src: "/img/testimonials/psychotherapeuten/testimonial-7.png" },
    { name: "Logo 8", src: "/img/testimonials/psychotherapeuten/testimonial-8.png" },
    { name: "Logo 9", src: "/img/testimonials/psychotherapeuten/testmonial-9.png" },
    { name: "Logo 10", src: "/img/testimonials/psychotherapeuten/testmonial10.png" },
    { name: "Logo 11", src: "/img/testimonials/psychotherapeuten/testimonial-11.png" },
  ];

  return (
    <div className="relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
      <div className="flex animate-scroll-right-to-left">
        {/* First set of logos */}
        {logos.map((logo, index) => (
          <div
            key={`first-${index}`}
            className="flex-shrink-0 mx-3 md:mx-6 flex items-center justify-center"
          >
            <img 
              src={logo.src} 
              alt={logo.name}
              className="w-32 h-20 object-contain drop-shadow-sm"
            />
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {logos.map((logo, index) => (
          <div
            key={`second-${index}`}
            className="flex-shrink-0 mx-3 md:mx-6 flex items-center justify-center"
          >
            <img 
              src={logo.src} 
              alt={logo.name}
              className="w-32 h-20 object-contain drop-shadow-sm"
            />
          </div>
        ))}
      </div>
    </div>
  );
};


