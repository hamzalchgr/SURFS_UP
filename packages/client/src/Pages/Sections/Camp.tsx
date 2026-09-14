import { AlarmClock, ArrowUpRight, Bus, Compass, Home } from 'lucide-react';

const Camp = () => {
   return (
      <section className="camp">
         <div className="camp__intro">
            <p className="camp__eyebrow">What you’re signing up for</p>
            <h2 className="heading-2">
               We teach surfing. The new friends, missed sunsets, and
               spontaneous road trips come naturally.
            </h2>
         </div>

         <div className="camp__content">
            <div className="camp__overview">
               <div className="camp__heading">
                  <p className="camp__eyebrow">overview</p>
                  <h2 className="heading-2">MORE THAN A SURF TRIP</h2>
               </div>

               <p className="camp__desc">
                  Wake up near the ocean, surf with local coaches, explore the
                  island and come home with a new group of friends.
               </p>

               <a href="#camp" className="camp__link">
                  <span>Discover the camp</span>
                  <span className="camp__link-icon">
                     <ArrowUpRight size={18} />
                  </span>
               </a>
            </div>

            <div className="camp__grid">
               <div className="grid__card__details">
                  <div>
                     <p>Where</p>
                     <p>Canggu, Bali</p>
                  </div>
                  <div>
                     <p>When</p>
                     <p>12 – 26 October 2026</p>
                  </div>
                  <div>
                     <p>Duration</p>
                     <p>14 days</p>
                  </div>
                  <div>
                     <p>Group</p>
                     <p>Up to 18 people</p>
                  </div>
               </div>

               <div className="grid__card__img">
                  <img
                     src="https://framerusercontent.com/images/bNKFJSYow2UpTekbZuKSUAo8iKk.png?width=1200&height=750"
                     alt=""
                     loading="eager"
                  />
               </div>

               <div className="grid__card__community">
                  <div>Community</div>
                  <p>
                     Half the group books the next camp before this one ends.
                  </p>
               </div>
            </div>
         </div>

         <div className="camp__include">
            <div className="camp__heading">
               <p className="camp__eyebrow">what's included</p>
               <h2 className="heading-2">
                  EVERYTHING YOU NEED FOR TWO UNFORGETTABLE WEEKS
               </h2>
            </div>

            <ul className="camp__include__grid">
               <li className="include__card relative md:col-span-2">
                  <img
                     src="https://framerusercontent.com/images/56u73cTlewCcKNRyZyM3TX4TlY.png?scale-down-to=2048&width=2752&height=1536"
                     alt=""
                     loading="eager"
                  />

                  <span>Daily surf coaching</span>
               </li>

               <li className="include__card flex flex-col justify-between p-8">
                  <div className="card__icon">
                     <Home size={20} />
                  </div>
                  <div className="flex flex-col gap-2">
                     <p className="text-[19px] font-semibold text-[#20221f]">
                        Villa accommodation
                     </p>
                     <p className="text-[#666666]">
                        A modern tropical villa five minutes from the beach,
                        pool included.
                     </p>
                  </div>
               </li>

               <li className="include__card flex flex-col justify-between p-8">
                  <div className="card__icon">
                     <AlarmClock size={20} />
                  </div>
                  <div className="flex flex-col gap-2">
                     <p className="text-[19px] font-semibold text-[#20221f]">
                        Breakfast every morning
                     </p>
                     <p className="text-[#666666]">
                        Smoothie bowls, eggs and proper coffee before or after the session.
                     </p>
                  </div>
               </li>

               <li className="include__card flex flex-col justify-between p-8">
                  <div className="card__icon">
                     <Bus size={20} />
                  </div>
                  <div className="flex flex-col gap-2">
                     <p className="text-[19px] font-semibold text-[#20221f]">
                        Equipment & transfers
                     </p>
                     <p className="text-[#666666]">
                        Boards, leashes, rash guards and every ride to the breaks.
                     </p>
                  </div>
               </li>

               <li className="include__card flex flex-col justify-between p-8 bg-[#ffee7d]">
                  <div className="card__icon bg-white">
                     <Compass size={20} />
                  </div>
                  <div className="flex flex-col gap-2">
                     <p className="text-[19px] font-semibold text-[#20221f]">
                        Island experiences
                     </p>
                     <p className="text-[#666666]">
                        Waterfalls, temples and a volcano sunrise, three trips included.
                     </p>
                  </div>
               </li>

               <li className="include__card relative md:col-span-2">
                  <img
                     src="https://framerusercontent.com/images/gAwDNfKJYsvZYE7J0sfWt8Kco.png?width=1200&height=820"
                     alt=""
                     loading="eager"
                  />

                  <span>Photo & video sessions</span>
               </li>
            </ul>
         </div>
      </section>
   );
};

export default Camp;
