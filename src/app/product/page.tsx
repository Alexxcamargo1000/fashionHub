import { ChevronRight, Heart, Share2, Star } from 'lucide-react'
import Image from 'next/image'

export default function ProductPage() {
  return (
    <div>
      <div className="mt-10 flex gap-28  ">
        <div>
          <Image src={'/product-1.png'} width={600} height={600} alt="" />
        </div>
        <div className="flex-1">
          <div className="flex max-w-fit rounded-lg bg-violet-100 px-3 py-2 text-violet-300">
            <span>Home</span>
            <ChevronRight />
            <span>Decoration</span>
            <ChevronRight />
            <span>Furniture</span>
            <ChevronRight />
            <span>Storage</span>
            <ChevronRight />
            <span className="font-semibold text-violet-400">Sideboard</span>
          </div>

          <div className="space-y-8 divide-y-2 divide-slate-300">
            <div>
              <div className="mt-8 flex items-start justify-between">
                <h1 className="text-2xl font-semibold ">Embrace Sideboard</h1>
                <div className="flex gap-2">
                  <button className="flex items-center gap-1 rounded-lg bg-red-100 p-2 font-bold text-red-300">
                    <Heart />
                    109
                  </button>
                  <button className="flex items-center gap-1 rounded-lg bg-violet-100 p-2 font-bold text-violet-400">
                    <Share2 />
                  </button>
                </div>
              </div>
              <p className="text-slate-400">Teixeira Design Studio</p>
            </div>

            <div className="flex items-center gap-10 py-8">
              <div className="space-y-1">
                <span className="block text-4xl font-black text-violet-700">
                  $71.56
                </span>
                <span className="text-xl text-slate-400 line-through">
                  $71.56
                </span>
              </div>
              <div>
                <button className="flex items-center gap-1 rounded-lg bg-violet-100 p-2 font-bold text-violet-400">
                  <Star />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
