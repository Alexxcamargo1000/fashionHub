import { Heart } from 'lucide-react'
import Image from 'next/image'

export function CardProduct() {
  return (
    <div className="group flex max-w-[305px] flex-col gap-5 rounded-lg border border-slate-300 shadow">
      <div className=" relative flex h-[305px] items-center justify-center overflow-hidden rounded-lg  bg-violet-100">
        <Image
          src="/tenis.png"
          alt="ténis"
          width={300}
          height={300}
          quality={100}
          className=" max-w-[232px] object-contain transition-transform group-hover:scale-105"
        />

        <button className="absolute right-2 top-2 flex items-center justify-center rounded-full bg-white p-3 text-slate-950">
          <Heart />
        </button>
      </div>
      <div className="p-3">
        <div className="flex items-center justify-between">
          <span className="text-lg font-medium text-violet-500">
            TDX Sinkers
          </span>
          <span>₹ 675.00</span>
        </div>
        <p className="text-xs text-violet-400 ">5 types of shoos available</p>
        <div className="mt-3 flex justify-between">
          <button className="rounded-full bg-violet-600 px-4 py-2 text-sm  font-semibold text-white hover:bg-violet-700">
            Add To Cart
          </button>
          <button className="rounded-full border border-violet-600 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-violet-100">
            Add Shortlist
          </button>
        </div>
      </div>
    </div>
  )
}
