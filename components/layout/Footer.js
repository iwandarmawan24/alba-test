import React from 'react';
import Image from 'next/image';

const Footer = () => (
    <div className="w-full lg:container mx-auto px-4 mt-8" id="contact">
        <hr />
        <div className="w-full flex flex-row mt-4 mb-4 flex-wrap">
            <div className="w-[45%] max-sm:w-[100%]">
                <Image
                  src="/assets/images/logo-alba.svg"
                  alt="Picture of the author"
                  className="mb-2"
                  width={100}
                  height={50}
                />
                <p className="text-sm mb-8">
                    Albatech acts as a corporate partner to help digitize
                    their business to accelerate trends in remote work.
                </p>
                <div className="flex flex-row">
                    <div className="relative w-[20px] h-[20px] mr-4">
                        <Image
                          src="/assets/images/Fb.svg"
                          alt="Picture of the author"
                          fill
                        />
                    </div>
                    <div className="relative w-[20px] h-[20px] mr-4">
                        <Image
                          src="/assets/images/Ig.svg"
                          alt="Picture of the author"
                          fill
                        />
                    </div>
                    <div className="relative w-[20px] h-[20px] mr-4">
                        <Image
                          src="/assets/images/Linked.svg"
                          alt="Picture of the author"
                          fill
                        />
                    </div>
                </div>
            </div>
            <div className="w-[25%] max-sm:w-[50%]">
                <p className="font-bold text-base mb-4">Website</p>
                <p className="text-sm mb-2">About</p>
                <p className="text-sm mb-2">Portofolio</p>
                <p className="text-sm mb-2">Blog</p>
                <p className="text-sm mb-2">Career</p>
            </div>
            <div className="w-[30%] max-sm:w-[50%]">
                <p className="font-bold text-base mb-4">Contact</p>
                <p className="text-sm mb-2">
                    The Prominence Blok 38D No.25 Jl. Jalur Sutera Barat,
                    Alam Sutera, Kota Tangerang, Banten 15143

                </p>
                <p className="text-sm mb-2">
                    <span className="text-bold">P:</span>
                    &nbsp;
                    +62 81 1889 3383
                </p>
                <p className="text-sm mb-2">
                    <span className="text-bold">E:</span>
                    &nbsp;
                    info@albatech.id
                </p>
            </div>
        </div>
        <hr />
        <div className="w-full flex flex-row justify-between">
            <p className="text-[#Bec1c1] text-sm">©PT. Alba Digital Teknologi 2021 | All Rights Reserved</p>
            <p className="text-[#Bec1c1] text-sm">Privacy policy | Terms of service</p>
        </div>
    </div>
);

export default Footer;
