import React from 'react';
import SectionWrap from 'components/home/SectionWrap';
import PACKAGE_DATA, { TECH_STACK } from 'utils/COMPLETEPACKAGE_DATA';
import Image from 'next/image';

const CompletePackage = () => {
  const PACKAGE_DATA_BLACK = [{
    count: '1000+',
    type: 'Design',
  }, {
    count: '30+',
    type: 'Products',
  }, {
    count: '1000+',
    type: 'Web Developments',
  }];

  return (
        <SectionWrap
          sectionName="Complete Pakcage"
          sectionDesc="From product design software continous delivery"
          sectionId="completepackage"
        >
            <>
                <div className="w-full lg:container mx-auto px-4">
                    <div className="flex flex-row flex-wrap justify-between mt-8">
                        {
                            PACKAGE_DATA.map((data) => (
                                <div
                                  key={data.slug}
                                  className="w-[32%] max-md:w-[48%] max-sm:w-[100%] mb-4
                                border hover:border-[#FFCE07] border-[#C4C4C4] p-4 rounded-md"
                                >
                                    <div className="relative h-[60px] w-[50px] mb-4 ">
                                        <Image
                                          src={`/assets/images/package/${data.slug}.svg`}
                                          alt="Picture of the author"
                                          fill
                                        />
                                    </div>
                                    <p className="mb-2 text-[#FFCE07] font-bold text-base">{data.title}</p>
                                    <p className="text-sm">{data.desc}</p>
                                </div>
                            ))
                        }
                    </div>
                    <div className="flex flex-row flex-wrap justify-start my-8">
                        {
                            TECH_STACK.map((data, index) => (
                                <div
                                  key={`${index}-${data}`}
                                  className="relative w-[16%] max-md:w-[24%]
                            max-sm:w-[48%] h-[60px] mb-4"
                                >
                                    <Image
                                      src={`/assets/images/techstack/${data}.svg`}
                                      alt="Picture of the author"
                                      fill
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="w-full bg-black">
                    <div className="w-full lg:container mx-auto px-4 pt-4 pb-8">
                        <div className="flex flex-row justify-center">
                            <p className="text-[#FFCE07] text text-2xl font-semibold text-center">Our Progress Comes with a Collaboration Between Creativity, Ideas, and Technology</p>
                        </div>
                        <div className="flex flex-row justify-between text-white pt-4 px-8">
                            {
                                PACKAGE_DATA_BLACK.map((data, index) => (
                                    <div key={`packageData-${index}`} className="flex flex-col items-center">
                                        <p className="text-3xl">{data.count}</p>
                                        <p className="text-center">{data.type}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </>
        </SectionWrap>
  );
};

export default CompletePackage;
