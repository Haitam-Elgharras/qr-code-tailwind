import React from 'react';

const App = () => {
  return (
    <div className="flex flex-col items-center bg-[#d6e2f0] w-screen h-screen">
      <div className="container w-80 bg-white mt-10 rounded-xl flex py-[20px] px-[20px] flex-col items-center">

        <div>
          <img src="../public/images/image-qr-code.png" alt="" className="rounded-xl" />
        </div>

        <div className="text text-center mt-6">
          <h3 className="font-bold text-2xl text-[#1f3251]">
            Improve your front-end skills by building projects
          </h3>
          <p className="font-normal text-[15px] text-[#7b879d] mt-4 mb-6">
            Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
          </p>
        </div>
        
      </div>
      <div className="mt-8 text-[11px] text-center">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" className="text-[#3e52a3]" target="_blank" rel="noopener noreferrer">Frontend Mentor</a>.
        Coded by <a href="#" className="text-[#3e52a3]">Haitam ELGHARRAS</a>.
      </div>
    </div>
  );
}

export default App;