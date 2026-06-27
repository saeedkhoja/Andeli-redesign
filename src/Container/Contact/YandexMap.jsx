import React, { useEffect } from "react";

function YandexMap() {
  useEffect(() => {
    const loadYandexMap = () => {
      const ymaps = window.ymaps;

      ymaps.ready(() => {
        const map = new ymaps.Map("yandex-map", {
          center: [41.348833, 69.216576],
          zoom: 15,
          controls: [],
        });

        const officePlacemark = new ymaps.Placemark(
          [41.348833, 69.216576],
          {
            hintContent: "Our Office",
            balloonContent: "This is our office location",
          },
          {
            preset: "islands#redIcon",
          }
        );

        map.geoObjects.add(officePlacemark);
        // Resize map on window resize
        window.addEventListener("resize", () => {
          map.container.fitToViewport();
        });
      });
    };
    if (window.ymaps) {
      loadYandexMap();
    } else {
      const script = document.createElement("script");
      script.src = `https://api-maps.yandex.ru/2.1/?apikey=7b0c7127-aa6a-470e-970b-3034cca2805f&lang=en_US`;
      script.async = true;
      script.onload = loadYandexMap;
      document.head.appendChild(script);
    }
    return () => {
      window.removeEventListener("resize", () => {
        if (window.ymaps) {
          window.ymaps.map.container.fitToViewport();
        }
      });
    };
  }, []);

  return <div id="yandex-map" className="lg:h-full h-[200px] w-full "></div>;
}

export default YandexMap;
