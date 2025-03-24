"use client"
import Image from "next/image";

const PartnerLogos = () => {
    const images = [
        "/logo1.png",
        "logo2.webp",
        "/logo3.png",
      ].map((image) => ({
        id: Math.random(),
        image
      }));
    return (
        <div className="relative w-full md:w-[66%] lg:w-[60%] 2xl:w-[65%] overflow-hidden h-32 mt-2">
        <div className="absolute flex items-center justify-center">
          <section className="flex gap-2 animate-[swipe_var(--speed)_linear_infinite_backwards]" style={{ "--speed": `${20000}ms` }}>
            {images.map(({ id, image }) => (
              <div className="image" key={id}>
                <img src={image}   className="max-w-[310px] min-h-20 max-h-20 py-0 object-contain" />
              </div>
            ))}
          </section>
          <section className="flex ml-2 gap-2 animate-[swipe_var(--speed)_linear_infinite_backwards]" style={{ "--speed": `${20000}ms` }}>
            {images.map(({ id, image }) => (
              <div className="image" key={id}>
                <img src={image}  className="max-w-[310px] min-h-20 max-h-20 py-0  object-contain"/>
              </div>
            ))}
          </section>
          <section className="flex ml-2 gap-2 animate-[swipe_var(--speed)_linear_infinite_backwards]" style={{ "--speed": `${20000}ms` }}>
            {images.map(({ id, image }) => (
              <div className="image" key={id}>
                <img src={image}  className="max-w-[310px] min-h-20 max-h-20 py-0 object-contain"/>
              </div>
            ))}
          </section>
        </div>
      </div>
      
    )
}

export default PartnerLogos