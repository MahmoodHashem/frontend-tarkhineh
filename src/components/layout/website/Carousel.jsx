import {useState, useEffect} from 'react';

import {ArrowLeft, ArrowRight} from '../../icons';

const slides = [
  {
    id: 1,
    title: ' تجربه غذای سالم و گیاهی به سبک ترخینه',
    buttonText: 'سفارش آنلاین غذا',
    image: '/src/assets/images/footer_layer.png',
  },
  {
    id: 2,
    title: 'تجربه غذای سالم و گیاهی',
    buttonText: 'سفارش آنلاین غذا',
    image: '/src/assets/images/footer_layer.png',
  },
  {
    id: 3,
    title: 'تجربه غذای سالم و گیاهی',
    buttonText: 'سفارش آنلاین غذا',
    image: '/src/assets/images/footer_layer.png',
  },
  {
    id: 4,
    title: 'تجربه غذای سالم و گیاهی',
    buttonText: 'سفارش آنلاین غذا',
    image: '/src/assets/images/footer_layer.png',
  },
  {
    id: 5,
    title: 'تجربه غذای سالم و گیاهی',
    buttonText: 'سفارش آنلاین غذا',
    image: '/src/assets/images/footer_layer.png',
  },
  {
    id: 6,
    title: 'تجربه غذای سالم و گیاهی',
    buttonText: 'سفارش آنلاین غذا',
    image: '/src/assets/images/footer_layer.png',
  },
];

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  function nextSlide() {
    return setCurrentSlide((prev) => (prev + 1) % slides.length);
  }

  function prevSlide() {
    return setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[calc(100vh-270px)] overflow-hidden mb-10">
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white container">
              <h1 className="text-2xl md:text-4xl text-center font-bold mb-4">
                {slide.title}
              </h1>

              <button className="relative top-2 bg-primary hover:bg-primary-800 text-white px-8 py-3 rounded-lg shadow-4">
                {slide.buttonText}
              </button>
            </div>
          </div>
        ))}

        <button
          onClick={nextSlide}
          className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 p-2   transition-colors"
        >
          <ArrowLeft className="fill-white w-8 h-8" />
        </button>

        <button
          onClick={prevSlide}
          className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 p-2   transition-colors"
        >
          <ArrowRight className="fill-white w-8 h-8" />
        </button>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
          <div className="relative">
            <img
              src="/images/slider-indicator.svg"
              alt=""
              className="w-[154px] h-[33px]"
            />
            <div className="absolute top-2 left-1/2 -translate-x-1/2 flex gap-2 items-center px-8 py-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-primary scale-125 shadow-indicator'
                      : 'bg-neutral-300 hover:bg-neutral-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Carousel;
