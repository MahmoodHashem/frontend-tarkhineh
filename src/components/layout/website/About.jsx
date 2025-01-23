import {Diagram, User, MenuBoard, HomeWifi, ArrowLeft} from '../../icons';

function About() {
  return (
    <section className="bg-[url('/images/about_layer.png')] bg-cover bg-center py-16">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-28 items-center">
          {/* Text Content */}
          <div className="flex flex-col items-start text-white ">
            <h2 className="text-xl md:text-3xl font-bold mb-6">
              رستوران‌های زنجیره‌ای ترخینه
            </h2>
            <p className="mb-8 leading-7 text-justify">
              مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های ایرانیان است و باعث افتخار
              ماست که بیش از 20 سال است خدمت‌گزار مردم شریف ایران هستیم. ما در
              رستوران‌های زنجیره‌ای ترخینه همواره تلاش کردیم که در محیطی اصیل بر
              پایه معماری و طراحی مدرن در کنار طبیعتی دلنواز، غذایی سالم و درخور
              شان شما عزیزان ارائه دهیم.{' '}
            </p>
            <button className="flex items-center justify-between gap-2 border text-white px-8 py-3 rounded-sm transition-colors self-end">
              اطلاعات بیشتر
              <ArrowLeft className="w-6 h-6 fill-white" />
            </button>
          </div>

          {/* Icons Grid */}
          <div className="grid grid-cols-2 gap-8 text-center">
            <div className="flex flex-col items-center text-white">
              <HomeWifi className="mb-4 w-12 h-12" />
              <span>محیطی دلنشین و آرام </span>
            </div>
            <div className="flex flex-col items-center text-white">
              <MenuBoard className="mb-4 w-12 h-12" />
              <span>منوی متنوع</span>
            </div>
            <div className="flex flex-col items-center text-white">
              <User className=" fill-white mb-4 w-12 h-12" />
              <span>پرسنل مجرب و حرفه ای</span>
            </div>
            <div className="flex flex-col items-center text-white">
              <Diagram className="mb-4 w-12 h-12" />
              <span>کیفیت بالای غذاها</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
