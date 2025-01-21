import React from 'react'
import meg1 from "./meg.jpg"

function container1() {
  return (
    
    <section id="container1"className="shadow-lg flex flex-col items-center justify-center h-auto bg-zinc-600 p-8 max-w-full">
    <div className="w-full sm:w-1/2 mb-8 sm:mb-0 flex justify-center mt-48 max-w-full">
        <img src={meg1} className="w-52 h-56 rounded-full shadow-lg" />
    </div>
    
    <div className="w-full sm:w-1/2 text-center">
        <h2 className="text-white text-3xl font-bold mb-4">Poul André Røinaas</h2>
        <h3 className="text-white text-2xl font-bold mb-4">Om meg</h3>
        <ul className="pl-5 text-lg text-white list-none">
            <li>Hei! Mitt navn er Poul André Røinaas, og jeg er på utkikk etter en frontend jobb. </li>
            <li>FYLLE UT MED MER TEKST </li>
            <li>FYLLE UT MED MER TEKST </li>
        </ul>
    </div>
</section>


  )
}

export default container1