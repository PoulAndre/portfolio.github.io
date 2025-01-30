import React from 'react'

function navigasjon() {
  return (
    <div className=" flex h-15 w-screen justify-center bg-slate-400 shadow-sm p-2 overflow-x-hidden">
        <div className="flex p-3 justify-center space-x-5">
            <a href="#container1"className="text-s text-white hover:text-black">Om meg</a>
            <a href="#container2" className="text-s text-white hover:text-black">Kunnskap</a>
            <a href="#" className="text-s text-white hover:text-black">Prosjekter</a>
            <a href="#" className="text-s text-white hover:text-black">Kontakt Info</a>
        </div>
    </div>
  )
}

export default navigasjon