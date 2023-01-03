/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import { arrayOf, shape, string } from 'prop-types';
import Image from 'next/image';
import Button from 'components/base/Button';
import HamburgerButton from 'components/layout/HamburgerButton';
import { useRouter } from 'next/router';

const Navbar = ({ menuData }) => {
  const router = useRouter();
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

  const scrollToHandler = (target) => {
    const section = document.querySelector(`#${target}`);
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleClickMenu = (data) => {
    if (router.pathname === '/') {
      if (data.sectionId) {
        scrollToHandler(data.sectionId);
      }
    } else {
      router.push(`/${data.sectionId ? `?section=${data.sectionId}` : ''}`);
    }
  };

  useEffect(() => {
    if (router.pathname === '/') {
      if (router.query.section) {
        scrollToHandler(router.query.section);
      }
    }
  }, []);

  return (
        <>
            <div className="sticky top-0 z-40 w-full bg-white">
                <div className="py-4 flex flex-row items-center justify-between lg:container mx-auto px-4">
                    <div className="w-[150px]">
                        <Image
                          src="/assets/images/logo-alba.svg"
                          alt="Picture of the author"
                          className="ml-[10px]"
                          width={100}
                          height={50}
                        />
                    </div>
                    <div className="max-md:hidden md:flex flex-row items-center justify-around w-[600px]">
                        {
                            menuData.map((data, index) => (
                                <div key={`${data.slug}-${index}-lg`} className="w-full cursor-pointer" onClick={() => handleClickMenu(data)}>
                                    {
                                        data.type === 'link'
                                          ? <p className="w-full font-semibold text-center">{data.title}</p>
                                          : ''
                                    }
                                    {
                                        data.type === 'button' ? <Button key={`${data.slug}-${index}-lg`} className="w-full" text={data.title} />
                                          : ''
                                    }
                                </div>
                            ))
                        }
                    </div>
                    <HamburgerButton onClick={() => setShowHamburgerMenu(!showHamburgerMenu)} />
                </div>
            </div>
            {
                showHamburgerMenu ? (
                    <div className="fixed top-0 z-30 w-[100vw] h-[100vh] bg-white">
                        <div className="max-md:flex md:hidden flex-col justify-around w-full py-32 lg:container mx-auto px-4">
                            {
                                menuData.map((data, index) => (
                                    <>
                                        {
                                            data.type === 'link' ? <p key={`${data.slug}-${index}-md`} className="w-full font-semibold mb-4">{data.title}</p>
                                              : ''
                                        }
                                        {
                                            data.type === 'button' ? <Button key={`${data.slug}-${index}-md`} className="mb-4" text={data.title} />
                                              : ''
                                        }
                                    </>
                                ))
                            }
                        </div>
                    </div>
                ) : ''
            }
        </>
  );
};

Navbar.propTypes = {
  menuData: arrayOf(
    shape({
      slug: string.isRequired,
      title: string.isRequired,
      type: string.isRequired,
    }),
  ).isRequired,
};

export default Navbar;
