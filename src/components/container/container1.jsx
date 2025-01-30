import React from 'react'
import meg1 from "./meg.jpg"
import github from "./github.png"
import linkedin from "./linkedin.png"

function container1() {
  return (
    
    <section id="container1"className="shadow-lg flex flex-col items-center justify-center h-auto bg-slate-400 p-8 max-w-full">
    <div className="w-full sm:w-1/2 mb-8 sm:mb-0 flex justify-center mt-48 max-w-full">
        <img src={meg1} className="w-52 h-56 rounded-full shadow-lg" />
    </div>
    
    <div className="w-full sm:w-1/2 text-center">
        <h2 className="text-white text-5xl font-bold mb-6">Poul André G. Røinaas</h2>
        <h3 className="text-white text-2xl font-bold mb-6">-- FRONTEND UTVIKLER --</h3>
        <ul className="pl-5 text-lg text-white list-none">
            <li className="pb-2 font-light text-2xl text-white">Hei! Jeg er på utkikk etter en front-end utvikler jobb. </li>
            <li className="pb-2 font-light text-2xl text-white">Jeg er glad i design og utvikling, som UI/UX</li>
            <li className="pb-2 font-light text-2xl text-white">Ønsker du å bli bedre kjent med meg?</li>
            <li className="pb-2 font-light text-2xl text-white">Lengre ned finner du mer informasjon</li>
            <div className="w-full sm:w-1/2 mb-2 sm:mb-0 flex justify-center mt-8 max-w-full items-center space-x-4 mx-auto">
              <a href="https://github.com/PoulAndre">
              <img src={github}  className="w-12 h-auto rounded-full shadow-lg" />
              </a>
              <a href="https://www.linkedin.com/in/poul-r%C3%B8inaas-174b41345/">
              <img src={linkedin}  className="w-12 h-auto rounded-full shadow-lg" />
              </a>
            
            </div>
        </ul>
    </div>
</section>


  )
}

export default container1