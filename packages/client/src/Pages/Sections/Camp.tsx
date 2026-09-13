import { ArrowUpRight } from 'lucide-react';

const Camp = () => {
   return (
      <section className="px-5 md:px-7 lg:px-25 pb-25 lg:pb-35">
         <div className="py-25 lg:py-35 flex flex-col gap-5 text-[#666143]">
            <p className="uppercase font-medium text-sm">
               What you’re signing up for
            </p>
            <h2 className="heading-2">
               We teach surfing. The new friends, missed sunsets, and
               spontaneous road trips come naturally.
            </h2>
         </div>

         <div className="flex flex-col gap-11">
            <div className="flex flex-col gap-5">
               <div className="flex flex-col gap-5 text-[#666143]">
                  <p className="uppercase font-medium text-sm">overview</p>
                  <h2 className="heading-2">MORE THAN A SURF TRIP</h2>
               </div>

               <p className="text-[#777a73] max-w-[350px] font-medium text-[17px]">
                  Wake up near the ocean, surf with local coaches, explore the
                  island and come home with a new group of friends.
               </p>

               <a href="#camp" className="flex items-center gap-3 font-medium">
                  <span>Discover the camp</span>
                  <span className="h-11 w-11 rounded-full grid place-items-center bg-[#ffee7d] hover:bg-[#666143] hover:text-white">
                     <ArrowUpRight size={18} />
                  </span>
               </a>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
               <div className="p-7.5 h-[280px] bg-[#666143] flex flex-col justify-center rounded-[28px] font-medium text-white">
                  <div className="flex items-center justify-between py-4">
                     <p>Where</p>
                     <p>Canggu, Bali</p>
                  </div>
                  <div className="flex items-center justify-between py-4">
                     <p>When</p>
                     <p>12 – 26 October 2026</p>
                  </div>
                  <div className="flex items-center justify-between py-4">
                     <p>Duration</p>
                     <p>14 days</p>
                  </div>
                  <div className="flex items-center justify-between py-4">
                     <p>Group</p>
                     <p>Up to 18 people</p>
                  </div>
               </div>

               <div className="block md:hidden lg:block rounded-[28px] overflow-hidden">
                  <img
                     className="h-full w-full object-center object-cover"
                     src="https://framerusercontent.com/images/bNKFJSYow2UpTekbZuKSUAo8iKk.png?width=1200&height=750"
                     alt=""
                  />
               </div>

               <div className="p-7.5 h-[280px] bg-[#666143] flex flex-col rounded-[28px] justify-between">
                  <div className='px-4 py-2 text-sm leading-none rounded-full bg-[#ffee7d] w-fit text-[#666143] font-medium'>Community</div>
                  <p className='text-[22px] font-medium text-white leading-normal'>
                     Half the group books the next camp before this one ends.
                  </p>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Camp;
