import { CardProduct } from '@/components/CardProduct'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="py-12">
      <div className="grid grid-cols-2 rounded-2xl bg-violet-300 p-16">
        <div>
          <h1 className="max-w-sm text-3xl font-bold text-violet-600">
            Grab Upto 50% Off On Selected Headphone
          </h1>

          <button className="mt-11 rounded-full bg-violet-700 px-8 py-3 font-bold text-slate-50">
            Buy Now
          </button>
        </div>
        <div className="relative">
          <div className="absolute -top-10 bottom-0 left-0 right-0 flex items-center justify-center">
            <Image
              src="/woman.png"
              alt="mulher com um fone "
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>

      <div className="mb-12 mt-16 flex gap-3">
        <span className="flex cursor-pointer  items-center gap-2 rounded-full bg-violet-100 px-3 py-2 text-sm hover:bg-violet-200">
          Headphone type <ChevronDown className="h-4 w-4" />
        </span>
        <span className="flex cursor-pointer  items-center gap-2 rounded-full bg-violet-100 px-3 py-2 text-sm hover:bg-violet-200">
          Price <ChevronDown className="h-4 w-4" />
        </span>
        <span className="flex cursor-pointer  items-center gap-2 rounded-full bg-violet-100 px-3 py-2 text-sm hover:bg-violet-200">
          Review <ChevronDown className="h-4 w-4" />
        </span>
        <span className="flex cursor-pointer  items-center gap-2 rounded-full bg-violet-100 px-3 py-2 text-sm hover:bg-violet-200">
          Color <ChevronDown className="h-4 w-4" />
        </span>
        <span className="flex cursor-pointer  items-center gap-2 rounded-full bg-violet-100 px-3 py-2 text-sm hover:bg-violet-200">
          Material <ChevronDown className="h-4 w-4" />
        </span>
        <span className="flex cursor-pointer  items-center gap-2 rounded-full bg-violet-100 px-3 py-2 text-sm hover:bg-violet-200">
          Offer <ChevronDown className="h-4 w-4" />
        </span>
        <span className="ml-auto flex cursor-pointer items-center gap-2 rounded-full border border-violet-200 px-3 py-2 text-sm hover:bg-violet-200">
          Headphone type <ChevronDown className="h-4 w-4" />
        </span>
      </div>

      <div className="">
        <div className="grid grid-cols-4 gap-4 max-lg:grid-cols-3">
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </div>
      </div>
    </div>
  )
}
