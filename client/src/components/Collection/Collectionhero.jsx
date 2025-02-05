import Jewel from "../../assets/CollectionImg/jewel.png";

function Collectionhero(){
    return(
        <div className="relative h-screen w-screen">
           <div className="absolute z-0">
           <img src={Jewel} alt="jewel" className="h-screen w-screen object-cover" />
           </div>

           <div className="absolute z-10 top-[110px] left-[50px] sm:top-[30px] sm:left-5">
             <p className="font-Montserrat  text-white text-[40px] sm:text-[66px] ">Collection of</p>
           </div>

           <div className="absolute z-10 top-[140px] left-[40px] sm:top-[60px] sm:left-[160px]">
                <p className="font-Montserrat text-[80px] sm:text-[128px] text-white">Amulya</p>
           </div>

           <div className="absolute z-10 top-[230px] left-[50px] sm:top-[200px] sm:left-[600px]">
                <p className="font-Montserrat text-white text-[40px] sm:text-[50px] ">Jewels</p>
           </div>

           <div className="absolute z-10 h-[50px] w-[300px] left-[40px] top-[450px] sm:h-[90px] sm:w-[320px] sm:top-[540px] sm:left-[80px] text-center">
            <p className="text-[#F2F2F2] text-[25px] sm:text-[15px]">
            Say “I Do” With The Perfect Ring Seal your vows with your dream rings. Explore our wedding ring styles and find the perfect rings to start your forever.
            </p>
           </div>

            
        </div>
    )
}

export default Collectionhero;