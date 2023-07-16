import Image from 'next/image'
import Link from 'next/link';

import TestimonialImage01 from '@/public/images/CapstonePoster.png'
import TestimonialImage02 from '@/public/images/Canada.png'
import TestimonialImage03 from '@/public/images/Canada.png'

export default function Testimonials() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2">Technical Projects</h2>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-2 lg:gap-6 items-start lg:max-w-none">


            <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden md:max-w-2xl">
              <div className="md:flex">
                <div className="md:shrink-0">
                  <Image className="h-48 w-full object-cover md:h-full md:w-48" src={TestimonialImage01}
                       alt="Modern building architecture"/>
                </div>
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>
                  <Link href="/#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible
                    accommodation for your team</Link>

                  <p className="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food
                    and take in some sunshine? We have a list of places to do just that.</p>
                </div>
              </div>
            </div>

            <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden md:max-w-2xl">
              <div className="md:flex">
                <div className="md:shrink-0">
                  <Image className="h-48 w-full object-cover md:h-full md:w-48" src={TestimonialImage01}
                       alt="Modern building architecture"/>
                </div>
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>
                  <Link href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible
                    accommodation for your team</Link>
                  <p className="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food
                    and take in some sunshine? We have a list of places to do just that.</p>
                </div>
              </div>
            </div>

            <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden md:max-w-2xl">
              <div className="md:flex">
                <div className="md:shrink-0">
                  <Image className="h-48 w-full object-cover md:h-full md:w-48" src={TestimonialImage01}
                       alt="Modern building architecture"/>
                </div>
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>
                  <Link href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible
                    accommodation for your team</Link>
                  <p className="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food
                    and take in some sunshine? We have a list of places to do just that.</p>
                </div>
              </div>
            </div>

            <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden md:max-w-2xl">
              <div className="md:flex">
                <div className="md:shrink-0">
                  <Image className="h-48 w-full object-cover md:h-full md:w-48" src={TestimonialImage01}
                       alt="Modern building architecture"/>
                </div>
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>
                  <Link href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible
                    accommodation for your team</Link>
                  <p className="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food
                    and take in some sunshine? We have a list of places to do just that.</p>
                </div>
              </div>
            </div>


          </div>

        </div>
      </div>
    </section>
  )
}
