import clsx from 'clsx';
import { useState } from 'react';

const PROGRAM = [
   {
      week: 1,
      program: [
         {
            activityName: 'Arrival & welcome',
            desc: 'Airport pick-up, villa check-in, first dinner together and a sunset walk to the beach.',
            img: 'https://framerusercontent.com/images/kvRYvabnXWDkHtchIknLiWh1SU.png?scale-down-to=2048&width=2752&height=1192',

            activityList: [
               'Welcome dinner at the villa',
               'Level split & safety briefing',
               'First look at the break',
            ],
         },
         {
            activityName: 'Surf foundations',
            desc: 'Morning sessions every day: pop-up, paddling, whitewater rides and your first green waves.',
            img: 'https://framerusercontent.com/images/bNKFJSYow2UpTekbZuKSUAo8iKk.png?width=1200&height=750',

            activityList: [
               'Daily coached sessions',
               'Video review evenings',
               'Yoga & mobility class',
            ],
         },
      ],
   },
   {
      week: 2,
      program: [
         {
            activityName: 'Progress & exploration',
            desc: 'Bigger days, new breaks and the island days you will talk about for years.',
            img: 'https://framerusercontent.com/images/W9uFF5A42d30zLUfIm8iEsTPfGs.png?width=1200&height=658',

            activityList: [
               'Surf trips to new spots',
               'Waterfall & temple day',
               'Volcano sunrise mission',
            ],
         },
         {
            activityName: 'Final sessions & farewell',
            desc: 'Last dawn patrol, best-wave awards and one long goodbye dinner.',
            img: 'https://framerusercontent.com/images/7PpxleHSHr8OxZBYVywRvFt438.png?width=992&height=1200',

            activityList: [
               'Final coached session',
               'Photo & video handover',
               'Farewell dinner on the beach',
            ],
         },
      ],
   },
];

const Program = () => {
   const [week, setWeek] = useState(0);

   const displayWeek = PROGRAM[week].program;

   return (
      <section className="program">
         <div className="camp__heading">
            <p className="camp__eyebrow">program</p>
            <h2 className="heading-2">FOURTEEN DAYS, FULLY LIVED</h2>
         </div>

         <div className="flex flex-col gap-8">
            <div className="btns__container">
               <button
                  className={clsx(week ? ' bg-transparent' : ' bg-[#b8dde5]')}
                  onClick={() => setWeek(0)}
               >
                  Week one
               </button>
               <button
                  className={clsx(!week ? 'bg-transparent' : ' bg-[#b8dde5]')}
                  onClick={() => setWeek(1)}
               >
                  Week two
               </button>
            </div>

            <ul className="grid md:grid-cols-2 gap-5">
               {displayWeek.map(({ activityName, desc, img, activityList }, index) => (
                  <li key={index} className="activity__card">
                     <p className="activity__name">{activityName}</p>
                     <p className="activity__desc">{desc}</p>

                     <div className="activity__img">
                        <img src={img} alt="" loading="eager" />
                     </div>

                     <ul className="activity__list">
                        {activityList.map((act: string) => (
                           <li>{act}</li>
                        ))}
                     </ul>
                  </li>
               ))}
            </ul>
         </div>
      </section>
   );
};

export default Program;
