import React from 'react';
import Button from 'components/base/Button';

const First = ()  => {
    return (
        <div className="h-[calc(100vh - 80px)] bg-white bg-[url('/assets/images/first-section-bg.png')]
        bg-no-repeat bg-[right_30px] max-sm:bg-[length:500px] max-md:bg-[length:600px]
        ">
          <div className="w-full py-32 lg:container mx-auto px-4 max-sm:pt-32 max-md:bg-[length:600px]">
            <div className="py-2 px-1 bg-white max-w-[500px] border border-black">
              <p className="max-sm:text-3xl sm:text-5xl font-bold whitespace-normal">Build or scale up</p>
            </div>
            <div className="px-1">
              <p className="max-sm:text-3xl sm:text-5xl ">Your development team</p>
            </div>
            <div className="px-1">
              <div>
                <div></div>
                <p className="mb-4 font-bold">in weeks, not months</p>
              </div>
              <Button text={"Book Now"}></Button>
            </div>
          </div>
        </div>
    )
};

export default First;