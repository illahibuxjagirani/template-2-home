import Image from "next/image"
import rightarrow from "/public/rightarrow.png"
import cart1 from "/public/cart1.png"
import uparrow from "/public/up.png"
import Link from "next/link"


export default function Casual(){
  return(
    <div>


    {/* routes link */}
    <div className="mx-16 flex items-center gap-3 py-8 border-t-2 border-slate-200">
    <Link href={'/'}>Home</Link>
    <p><Image src={rightarrow} alt="Right Arrow"/></p>
    <p>Casual</p>
    
    </div>


    {/* main div */}

    <div>

      {/* left div */}
      <div className="w-1/4">

{/* filter div */}
<div>
<p>Filter</p>
<Image src={cart1} alt="Cart"/>
</div>


{/* links div */}
<div>

<div>
  <p>T-Shirts</p>
  <Image src={rightarrow} alt="Right Arrow"/>
</div>

<div>
  <p>Shorts</p>
  <Image src={rightarrow} alt="Right Arrow"/>
</div>

<div>
  <p>Shirts</p>
  <Image src={rightarrow} alt="Right Arrow"/>
</div>

<div>
  <p>Hoodie</p>
  <Image src={rightarrow} alt="Right Arrow"/>
</div>

<div>
  <p>Jeans</p>
  <Image src={rightarrow} alt="Right Arrow"/>
</div>

</div>


{/* price div */}
<div>
<div className="w-full max-w-xs mx-auto">

  <label className="block text-sm font-medium text-gray-700">Price</label>


  <div className="relative flex justify-between items-center mt-4">
    {/* Track */}
    <div className="absolute top-1/2 left-0 w-full h-2 bg-gray-200 rounded-lg -translate-y-1/2"></div>

    {/* Active range (highlighted) */}
    <div
      className="absolute top-1/2 h-2 bg-black rounded-lg -translate-y-1/2"
      style={{ left: "25%", right: "25%" }}
    ></div>

    {/* Slider thumbs */}
    <div
      className="absolute w-4 h-4 bg-black rounded-full top-1/2 -translate-y-1/2 left-1/4 cursor-pointer"
    ></div>
    <div
      className="absolute w-4 h-4 bg-black rounded-full top-1/2 -translate-y-1/2 right-1/4 cursor-pointer"
    ></div>
  </div>

  {/* Price Labels */}
  <div className="flex justify-between text-sm mt-2 text-gray-600">
    <span>$50</span>
    <span>$200</span>
  </div>
</div>


</div>


{/* color div */}
<div>
<div>
  <p>Colors</p>
  <Image src={uparrow} alt="Right Arrow"/>
</div>

<div className=" space-y-3">

{/* five colors div */}
  <div className="flex gap-3">

<div className="h-[30px] w-[30px] bg-[#00C12B] rounded-full cursor-pointer"></div>

<div className="h-[30px] w-[30px] bg-[#F50606] rounded-full cursor-pointer"></div>

<div className="h-[30px] w-[30px] bg-[#F5DD06] rounded-full cursor-pointer"></div>

<div className="h-[30px] w-[30px] bg-[#F57906] rounded-full cursor-pointer"></div>

<div className="h-[30px] w-[30px] bg-[#06CAF5] rounded-full cursor-pointer"></div>


  </div>

{/* five colors div 2*/}
  <div className="flex gap-3">

<div className="h-[30px] w-[30px] bg-[#063AF5] rounded-full cursor-pointer border-2 border-slate-100"></div>

<div className="h-[30px] w-[30px] bg-[#7D06F5] rounded-full cursor-pointer border-2 border-slate-100"></div>

<div className="h-[30px] w-[30px] bg-[#F506A4] rounded-full cursor-pointer border-2 border-slate-100"></div>

<div className="h-[30px] w-[30px] bg-[#FFFFFF] rounded-full cursor-pointer border-2 border-slate-200"></div>

<div className="h-[30px] w-[30px] bg-[#000000] rounded-full cursor-pointer border-2 border-slate-100"></div>


  </div>

</div>

</div>


{/* size div */}
<div>

</div>


{/* dress style div */}

<div>

</div>


{/* filter button */}
<div>
<button>Apply Filter</button>
</div>

      </div>



      {/* right div */}
      <div>

      </div>

    </div>



    </div>
  )
}