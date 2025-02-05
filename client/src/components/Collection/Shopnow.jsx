function Shopnow(){
    return(
        <div className="m-4 md:m-6 lg:m-8">
        <div className="bg-[#011728] p-4 md:p-4 rounded-lg">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-white font-light font-Montserrat md:text-2xl italic">Your True Love</span>
              <span className="text-white md:text-3xl">/</span>
              <span className="text-white font-bold text-lg font-Montserrat md:text-3xl">25% OFF SITEWIDE</span>
            </div>
            <button className="bg-white text-slate-900 px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition-colors">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    )
}

export default Shopnow;