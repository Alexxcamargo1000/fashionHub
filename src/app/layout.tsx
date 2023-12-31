/* eslint-disable @next/next/no-img-element */
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { ShoppingBag, Bell } from 'lucide-react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="grid h-screen  grid-rows-app divide-y divide-slate-200">
          <div className="w-full">
            <header className="mx-auto flex w-full max-w-7xl items-center gap-14 px-2 py-8">
              <strong className="text-3xl font-bold text-violet-800">
                FashionHub
              </strong>

              <nav className="space-x-12 text-slate-950">
                <Link href="/">Category</Link>
                <Link href="/">Brand</Link>
                <Link href="/">Contact</Link>
                <Link href="/">FAQ’s</Link>
              </nav>

              <div className="ml-auto flex items-center space-x-4">
                <button className="relative flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-white bg-slate-200 text-slate-900">
                  <span className=" absolute right-0 top-0  flex h-4 w-4 items-center justify-center rounded-full bg-violet-900  text-xs text-violet-50">
                    3
                  </span>

                  <ShoppingBag className="h-4 w-4" />
                </button>
                <button className="relative flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-neutral-100 text-slate-950 ">
                  <span className="absolute right-1 top-1 block rounded-full border-2 border-white bg-red-700 p-1" />
                  <Bell className="h-4 w-4" />
                </button>

                <div className="flex gap-2">
                  <img
                    className="h-12 w-12  rounded-full border border-violet-50"
                    src="https://github.com/Alexxcamargo1000.png"
                    alt=""
                  />

                  <div className="flex flex-col justify-center">
                    <span className="block text-xs font-medium text-violet-300">
                      Good Morning!
                    </span>
                    <span className="font-semibold  text-slate-950">
                      Alex Camargo
                    </span>
                  </div>
                </div>
              </div>
            </header>
          </div>
          <div className="">
            <main className="mx-auto w-full max-w-7xl">{children}</main>
          </div>

          <footer className="flex items-center justify-center py-8">
            <span>Todos direitos reservados </span>
          </footer>
        </div>
      </body>
    </html>
  )
}
