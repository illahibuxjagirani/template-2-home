import Image from "next/image"
import rightarrow from "/public/rightarrow.png"
import cart1 from "/public/cart1.png"
import uparrow from "/public/up.png"
import downarrow from "/public/down-arrow.png"
import Link from "next/link"
import shirt7 from "/public/shirt7.png";
import shirt8 from "/public/shirt8.png";
import shirt9 from "/public/shirt9.png";
import starf from "/public/starf.png";
import starh from "/public/starh.png";
import shirt2 from "/public/shirt2.png";
import shirt3 from "/public/shirt3.png";
import pant from "/public/pant.png";
import shirt4 from "/public/shirt4.png";
import shirt5 from "/public/shirt5.png";
import pent1 from "/public/pent1.png";
import pent2 from "/public/pent2.png";


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

    <div className="px-16 flex gap-6 ">

      {/* left div */}
      <div className="w-1/4">

{/* filter div */}
<div className="flex justify-between items-center py-3">
<p className="font-bold text-2xl">Filter</p>
<Image src={cart1} alt="Cart"/>
</div>


{/* links div */}
<div className="border-y-2 border-slate-200 space-y-3 pt-3 pb-3">

<div className="flex justify-between items-center cursor-pointer">
  <p>T-Shirts</p>
  <Image src={rightarrow} alt="Right Arrow"/>
</div>

<div className="flex justify-between items-center cursor-pointer">
  <p>Shorts</p>
  <Image src={rightarrow} alt="Right Arrow"/>
</div>

<div className="flex justify-between items-center cursor-pointer">
  <p>Shirts</p>
  <Image src={rightarrow} alt="Right Arrow"/>
</div>

<div className="flex justify-between items-center cursor-pointer">
  <p>Hoodie</p>
  <Image src={rightarrow} alt="Right Arrow"/>
</div>

<div className="flex justify-between items-center cursor-pointer">
  <p>Jeans</p>
  <Image src={rightarrow} alt="Right Arrow"/>
</div>

</div>


{/* price div */}
<div className="flex justify-between items-center py-3 border-b-2 border-slate-200  my-3">
<div className="w-full max-w-xs mx-auto">

<div className="flex justify-between items-center py-3">
<p className="font-bold text-2xl">Price</p>
<Image src={uparrow} alt="Cart"/>
</div>


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
<div className="border-b-2 border-slate-200 py-6 my-3">

<div className="flex justify-between items-center py-3">
<p className="font-bold text-2xl">Color</p>
<Image src={uparrow} alt="Cart"/>
</div>

<div className="flex flex-col gap-3">

{/* five colors div */}
  <div className="flex items-center justify-around">

<div className="h-[35px] w-[35px] bg-[#00C12B] rounded-full cursor-pointer"></div>

<div className="h-[35px] w-[35px] bg-[#F50606] rounded-full cursor-pointer"></div>

<div className="h-[35px] w-[35px] bg-[#F5DD06] rounded-full cursor-pointer"></div>

<div className="h-[35px] w-[35px] bg-[#F57906] rounded-full cursor-pointer"></div>

<div className="h-[35px] w-[35px] bg-[#06CAF5] rounded-full cursor-pointer"></div>


  </div>

{/* five colors div 2*/}
  <div className="flex items-center justify-around">

<div className=" h-[35px] w-[35px] bg-[#063AF5] rounded-full cursor-pointer border-2 border-slate-100"></div>

<div className="h-[35px] w-[35px] bg-[#7D06F5] rounded-full cursor-pointer border-2 border-slate-100"></div>

<div className="h-[35px] w-[35px] bg-[#F506A4] rounded-full cursor-pointer border-2 border-slate-100"></div>

<div className="h-[35px] w-[35px] bg-[#FFFFFF] rounded-full cursor-pointer border-2 border-slate-200"></div>

<div className="h-[35px] w-[35px] bg-[#000000] rounded-full cursor-pointer border-2 border-slate-100"></div>


  </div>

</div>

</div>


{/* size div */}
<div className="py-3">

<div className="flex justify-between items-center py-3">
  <p className="font-bold text-2xl">Size</p>
  <Image src={uparrow} alt="Right Arrow"/>
</div>

<div className="space-y-3">

<div className="flex gap-5 items-center">
  <p className="bg-slate-200 p-3 rounded-full cursor-pointer">XX-Small</p>
  <p className="bg-slate-200 p-3 rounded-full cursor-pointer">X-Small</p>
</div>

<div className="flex gap-5">
  <p className="bg-slate-200 p-3 rounded-full cursor-pointer">Small</p>
  <p className="bg-slate-200 p-3 rounded-full cursor-pointer">Medium</p>
</div>

<div className="flex gap-5">
  <p className="bg-slate-200 p-3 rounded-full cursor-pointer">Large</p>
  <p className="bg-slate-200 p-3 rounded-full cursor-pointer">X-Large</p>
</div>

<div className="flex gap-5">
  <p className="bg-slate-200 p-3 rounded-full cursor-pointer">XX-Large</p>
  <p className="bg-slate-200 p-3 rounded-full cursor-pointer">3X-Large</p>
</div>

<div className="flex gap-5">
  <p className="bg-slate-200 p-3 rounded-full cursor-pointer">4X-Large</p>
</div>

</div>


</div>


{/* dress style div */}

<div className="border-t-2 border-slate-200 py-3">
<div className="flex justify-between items-center py-3">
  <p className="font-bold text-2xl">Dress Style</p>
  <Image src={uparrow} alt="Right Arrow"/>
</div>


{/* links div */}
<div className="space-y-3">

<div className="flex justify-between items-center cursor-pointer">
  <p>Casual</p>
  <Image src={rightarrow} alt="Right Arrow"/>
</div>

<div className="flex justify-between items-center cursor-pointer">
  <p>Formal</p>
  <Image src={rightarrow} alt="Right Arrow"/>
</div>

<div className="flex justify-between items-center cursor-pointer">
  <p>Shirts</p>
  <Image src={rightarrow} alt="Right Arrow"/>
</div>

<div className="flex justify-between items-center cursor-pointer">
  <p>Party</p>
  <Image src={rightarrow} alt="Right Arrow"/>
</div>

<div className="flex justify-between items-center cursor-pointer">
  <p>Gym</p>
  <Image src={rightarrow} alt="Right Arrow"/>
</div>

</div>
</div>


{/* filter button */}
<div className="flex justify-center items-center py-3 border-t-2 border-slate-200">
<button className="bg-slate-900 hover:bg-slate-950 w-3/4 py-3 text-white rounded-full mx-3">Apply Filter</button>
</div>

      </div>



      {/* right div */}
      <div className="w-full">

{/* top div */}
<div className="flex justify-between items-center py-5">
  <p className="font-bold text-2xl">Casual</p>

  <div className="flex gap-6">
    <p>Showing 1-10 of 100 Products</p>

    <div className="flex gap-2">
      <p>Sort By:</p>
      <div className="flex gap-1 cursor-pointer">
        <p className="font-bold">Most Popular</p>
        <Image src={downarrow} alt="Down Arrow"/>
      </div>
    </div>
  </div>

</div>



{/* main details div */}
<div className="space-y-14 py-5">


{/* 1st div */}
<div className="flex justify-between items-center">
  
{/* shirt 7 */}
<Link href={"/products"} className="space-y-3 cursor-pointer">
  <Image src={shirt7} alt="Image" className="h-[250px] w-[250px]"/>

  <p className="font-bold md:text-base text-xs">Gradient Graphic T-shirt</p>

  <div className="flex gap-3 items-center">
<div className="flex">
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
</div>
<p className="text-sm">4.0/5</p>
  </div>


<div className="flex gap-3 items-center">

<p className="font-bold">$145</p>
</div>
</Link>


{/* shirt 8 */}
<Link href={"/products"} className="space-y-3 cursor-pointer hidden md:block">
  <Image src={shirt8} alt="Image" className="h-[250px] w-[250px]"/>

  <p className="font-bold capitalize">Polo with Tipping Details</p>

  <div className="flex gap-3 items-center">
<div className="flex">
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
</div>
<p className="text-sm">3.0/5</p>
  </div>

<p className="font-bold">$80</p>
</Link>


{/* shirt 9 */}
<Link href={"/products"} className="space-y-3 cursor-pointer hidden md:block">
  <Image src={shirt9} alt="Image" className="h-[250px] w-[250px]"/>

  <p className="font-bold">Black Striped T-shirt</p>

  <div className="flex gap-3 items-center">
<div className="flex">
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
<Image src={starh} alt="Image" className="w-[12.49px] h-[18.49px]"/>
</div>
<p className="text-sm">4.5/5</p>
  </div>

  <div className="flex gap-3 items-center">

<p className="font-bold">$210</p>
</div>

</Link>

</div>


{/* 2nd div */}
<div className="flex justify-between items-center">


{/* pant */}
<Link href={"/products"} className="space-y-3 cursor-pointer">
  <Image src={pant} alt="Image" className="h-[250px] w-[250px]"/>

  <p className="font-bold md:text-base text-xs">SKINNY FIT JEANS</p>

  <div className="flex gap-3 items-center">
<div className="flex">
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
<Image src={starh} alt="Image" className="w-[12.49px] h-[18.49px]"/>
</div>
<p>3.5/5</p>
  </div>


<div className="flex gap-3 items-center">

<p className="font-bold">$240</p>
<p className="text-[#00000066] line-through">$260</p>
<p className="text-[#FF3333] bg-[#FF33331A] px-2 text-sm">-20%</p>
</div>
</Link>


{/* shirt2 */}
<Link href={"/products"} className="space-y-3 cursor-pointer hidden md:block">
  <Image src={shirt2} alt="Image" className="h-[250px] w-[250px]"/>

  <p className="font-bold">CHECKERED SHIRT</p>

  <div className="flex gap-3 items-center">
<div className="flex">
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
<Image src={starh} alt="Image" className="w-[12.49px] h-[18.49px]"/>
</div>
<p>4.5/5</p>
  </div>

<p className="font-bold">$180</p>
</Link>


{/* shirt3 */}
<Link href={"/products"} className="space-y-3 cursor-pointer hidden md:block">
  <Image src={shirt3} alt="Image" className="h-[250px] w-[250px]"/>

  <p className="font-bold">SLEEVE STRIPED T-SHIRT</p>

  <div className="flex gap-3 items-center">
<div className="flex">
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
<Image src={starh} alt="Image" className="w-[12.49px] h-[18.49px]"/>
</div>
<p>4.5/5</p>
  </div>

  <div className="flex gap-3 items-center">

<p className="font-bold">$130</p>
<p className="text-[#00000066] line-through">$160</p>
<p className="text-[#FF3333] bg-[#FF33331A] px-2 text-sm">-30%</p>
</div>

</Link>
</div>


{/* 3rd div */}
<div className="flex  justify-between items-center">
{/* shirt 4 */}
<Link href={"/products"} className="space-y-3 cursor-pointer">
  <Image src={shirt4} alt="Image" className="h-[250px] w-[250px]"/>

  <p className="font-bold md:text-base text-xs">VERTICAL STRIPED SHIRT</p>

  <div className="flex gap-3 items-center">
<div className="flex">
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
</div>
<p className="text-sm">5.0/5</p>
  </div>

  <div className="flex gap-3 items-center font-bold">

<p className="font-bold">$212</p>
<p className="text-[#00000066] line-through">$232</p>
<p className="text-[#FF3333] bg-[#FF33331A] px-2 text-sm">-20%</p>
</div>

</Link>

{/* shirt 5 */}
<Link href={"/products"} className="space-y-3 cursor-pointer">
  <Image src={shirt5} alt="Image" className="h-[250px] w-[250px]"/>

  <p className="font-bold md:text-base text-xs">COURAGE GRAPHIC T-SHIRT</p>

  <div className="flex gap-3 items-center">
<div className="flex">
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
</div>
<p className="text-sm">4.0/5</p>
  </div>


<div className="flex gap-3 items-center">

<p className="font-bold">$145</p>
</div>
</Link>


{/* pent1 */}
<Link href={"/products"} className="space-y-3 cursor-pointer hidden md:block">
  <Image src={pent1} alt="Image" className="h-[250px] w-[250px]"/>

  <p className="font-bold capitalize">Loose Fit Bermuda shorts</p>

  <div className="flex gap-3 items-center">
<div className="flex">
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
</div>
<p className="text-sm">3.0/5</p>
  </div>

<p className="font-bold">$80</p>
</Link>

</div>

</div>

      </div>

    </div>



    </div>
  )
}