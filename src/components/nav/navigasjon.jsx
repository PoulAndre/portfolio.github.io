import React from 'react'

function navigasjon() {
  return (
    <div className=" flex h-15 w-screen justify-center bg-zinc-600 shadow-sm p-2 overflow-x-hidden">
        <div className="flex p-3 justify-center space-x-5">
            <a href="#container1"className="text-xl text-white hover:text-lime-500">Om meg</a>
            <a href="#container2" className="text-xl text-white hover:text-black">Kunnskap</a>
            <a href="#" className="text-xl text-white hover:text-black">Prosjekter</a>
            <a href="#" className="text-xl text-white hover:text-black">Kontakt Info</a>
        </div>
    </div>
  )
}

export default navigasjon