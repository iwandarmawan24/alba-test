import React from 'react';
import Button from 'components/base/Button';
import Image from 'next/image';
import SectionWrap from 'components/home/SectionWrap';
import PORTOFOLIO_DATA from 'utils/PORTOFOLIO_DATA';

const Portofolio = () => (
  <SectionWrap
    sectionName="Portfolio"
    sectionDesc="The software that we build takes our clients to the next level"
  >
    <div className="w-full lg:container mx-auto px-4 pt-8">
      <div className="flex flex-row flex-wrap justify-between">
        {
                        PORTOFOLIO_DATA.map((data, index) => (
                          <div key={`${data.slug}-${index}`} className="w-[30%] max-sm:w-[100%]">
                            <div className="w-full h-[200px] relative">
                              <Image
                                src="/assets/images/porto/mobile_app.png"
                                alt="Picture of the author"
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="p-4 border rounded border-[#C4C4C4]">
                              <p className="text-[#C4C4C4] line-clamp-1">{data.type}</p>
                              <p className="text-[#FFCE07] text-xl font-bold h-[4rem] max-sm:h-fit">{data.title}</p>
                              <p className="line-clamp-3">{data.desc}</p>
                            </div>
                          </div>
                        ))
                    }
      </div>
      <div className="flex flex-row flex-wrap justify-center my-8">
        <Button text="Learn More" />
      </div>
    </div>
  </SectionWrap>
);

export default Portofolio;
