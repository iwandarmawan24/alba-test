import React from 'react';
import { element, string } from 'prop-types';

const SectionWrap = ({ children, sectionName, sectionDesc }) => (
    <div className="min-h-[100vh] bg-white">
        <div className="w-full flex flex-col items-center lg:container mx-auto px-4 pt-4">
            <p className="text-[#C4C4C4]">{sectionName}</p>
            <p className="text text-3xl font-bold text-center">{sectionDesc}</p>
        </div>
        {children}
    </div>
);

SectionWrap.propTypes = {
  children: element.isRequired,
  sectionName: string.isRequired,
  sectionDesc: string.isRequired,
};

export default SectionWrap;
