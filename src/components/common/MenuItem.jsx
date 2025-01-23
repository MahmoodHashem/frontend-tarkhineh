function MenuItem({image, title}) {
  return (
    <div className="relative pt-8">
      <div className="relative max-w-80 h-44 border-2 border-primary-400 rounded-md p-4 ">
        {/* Elevated image */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[90%]">
          <img src={image} alt={title} className="object-cover rounded-2xl" />
        </div>

        <button className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-primary text-white px-2 w-32 py-2 rounded-sm hover:bg-primary-800 transition-colors text-sm">
          {title}
        </button>
      </div>
    </div>
  );
}

export default MenuItem;
