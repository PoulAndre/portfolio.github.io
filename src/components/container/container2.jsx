import React from 'react'

function container2() {
  return (
    <section id="container2" className="shadow-lg flex items-center justify-start h-auto pt-20 pb-20 bg-zinc-600 p-8 flex-col sm:flex-row overflow-x-hidden">

                <div className="w-full sm:w-1/2 pl-8 mt-56">
                    <h2 className="text-gray-300 text-3xl font-bold mb-4">Kunnskap</h2>
                    <ul className="items-center flex space-x-12 list-none pl-5 text-lg text-gray-300">
                      <div className="shadow-slate-400 flex justify-center rounded-md bg-slate-200 h-20 w-full items-center">
                        <li className="text-black">Kalkulartor</li>
                        </div>
                        <div className="shadow-slate-400 flex justify-center rounded-md bg-slate-200 h-20 w-full items-center">
                        <li className="text-black">TestSide</li>
                        </div>
                        <div className="shadow-slate-400 flex justify-center rounded-md bg-slate-200 h-20 w-full items-center">
                        <li className="text-black">Noe annet</li>
                        </div>
                    </ul>
                </div>

                <div className="w-full sm:w-1/2 mb-8 sm:mb-0 pl-20">
                    
                    </div>

        </section>
  )
}

export default container2