import {useState, useEffect} from 'react';

const slides = [
  {
    id: 1,
    title: 'تجربه غذای سالم و گیاهی به سبک ترخینه',
    image: '/hero-1.jpg',
    cta: 'سفارش آنلاین غذا',
  },
  {
    id: 2,
    title: 'ترخینه، بهترین گیاهخواری در شهر',
    image: '/hero-2.jpg',
    cta: 'مشاهده منو',
  },
  {
    id: 3,
    title: 'غذای گیاهی و سالم برای همه',
    image: '/hero-3.jpg',
    cta: 'مشاهده منو',
  },
];

export function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  function nextSlide(prev) {
    return (prev + 1) % slides.length;
  }

  function prevSlide(prev) {
    return (prev - 1 + slides.length) % slides.length;
  }

  return (
    <div className="relative h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={slide.image || '/placeholder.svg'}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center justify-center text-center">
            <div className="max-w-3xl px-4">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
                {slide.title}
              </h1>
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-md text-lg transition-colors">
                {slide.cta}
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
        aria-label="Previous slide"
      ></button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
        aria-label="Next slide"
      ></button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 w-2 rounded-full transition-colors ${index === currentSlide ? 'bg-white' : 'bg-white/50'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
