import React from 'react'

const Loader: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-full h-[200px]">
      <div className="relative w-[70px] h-[70px] animate-spin-slow">
        {/* Petals */}
        <div className="absolute w-[35px] h-[35px] bg-[#f1e7dd] rounded-full shadow-sm animate-pulse-soft left-[17px] top-0" />
        <div className="absolute w-[35px] h-[35px] bg-[#f1e7dd] rounded-full shadow-sm animate-pulse-soft left-0 top-[17px]" />
        <div className="absolute w-[35px] h-[35px] bg-[#f1e7dd] rounded-full shadow-sm animate-pulse-soft left-[17px] bottom-0" />
        <div className="absolute w-[35px] h-[35px] bg-[#f1e7dd] rounded-full shadow-sm animate-pulse-soft right-0 top-[17px]" />

        {/* Center */}
        <div className="absolute w-[28px] h-[28px] bg-[#e6d9cf] rounded-full shadow-inner left-[21px] top-[21px]" />
      </div>
    </div>
  )
}

export default Loader
