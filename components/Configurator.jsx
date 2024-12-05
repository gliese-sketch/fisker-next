"use client";

function Configurator() {
  const interiorSwatch = [
    {
      id: 0,
      name: "dark",
      src: "/swatch/interior/dark.png",
    },
    {
      id: 1,
      name: "light",
      src: "/swatch/interior/light.png",
    },
  ];

  const wheelsOptions = [
    {
      id: 0,
      name: "AeroStealth",
      src: "/wheels/aerostealth.png",
    },
    {
      id: 1,
      name: "SlipStream Black",
      src: "/wheels/slipstream_black.png",
    },
    {
      id: 2,
      name: "Vortex",
      src: "/wheels/vortex.png",
    },
  ];

  return (
    <div>
      {/* Headings */}
      <h1 className="text-2xl md:text-4xl font-semibold text-blue-950">
        Fisker Ocean
      </h1>
      <p className="py-2 text-xl">
        Configure your very own, with the options to choose from 6 exterior, 2
        interior and 3 wheels options.
      </p>

      {/* Exterior Colors */}
      <div className="my-3">
        <h3 className="font-bold uppercase mb-3">Exterior Color</h3>
        <div className="flex gap-2">
          {new Array(6).fill(1).map((_, index) => (
            <button
              key={index}
              onClick={() => console.log("Exterior Clicked")}
              className={`hover:scale-105 transition-transform duration-100  ${
                index === 0 ? "border-2 border-blue-300 rounded-full" : ""
              }`}
            >
              <img
                src="images/black_pearl.png"
                alt="Black Pearl"
                className="w-12"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Interior Colors */}
      <div className="my-12">
        <h3 className="font-bold uppercase mb-3">Interior Color</h3>
        <div className="flex gap-2">
          {interiorSwatch.map((color) => (
            <button
              key={color.id}
              onClick={() => console.log("Exterior Clicked")}
              className={`hover:scale-105 transition-transform duration-100  ${
                color.id === 0 ? "border-2 border-blue-300 rounded-full" : ""
              }`}
            >
              <img src={color.src} alt="Black Pearl" className="w-14" />
            </button>
          ))}
        </div>
      </div>

      {/* Wheel Options */}
      <div className="my-3">
        <h3 className="font-bold uppercase mb-3">Wheel Options</h3>
        <div className="flex gap-2">
          {wheelsOptions.map((wheel) => (
            <button
              key={wheel.id}
              onClick={() => console.log("Exterior Clicked")}
              className={`hover:scale-105 transition-transform duration-100  ${
                wheel.id === 0 ? "border-2 border-blue-300" : ""
              }`}
            >
              <img src={wheel.src} alt="Black Pearl" className="w-16" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Configurator;
