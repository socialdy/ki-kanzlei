export const LogoSliderHotels = () => {
  const logos = [
    { name: "Hotel Gerl", src: "/img/testimonials/hotels/logo-gerl.svg" },
    { name: "Hotel Bergblick", src: "/img/testimonials/hotels/hotel_alpen_aussicht.png" },
    { name: "Hotel Astoria", src: "/img/testimonials/hotels/hotel_astoria.png" },
    { name: "Hotel Florum", src: "/img/testimonials/hotels/hotel_florum.jpg" },
    { name: "Hotel Prägant", src: "/img/testimonials/hotels/hotel_prägant.jpg" },
    { name: "Hotel Romantik", src: "/img/testimonials/hotels/hotel_romantik.svg" },
    { name: "Hotel Spa", src: "/img/testimonials/hotels/hotel_spa.png" },
  ];

  return (
    <div className="relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-transparent via-transparent to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-transparent via-transparent to-transparent z-10 pointer-events-none"></div>
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

