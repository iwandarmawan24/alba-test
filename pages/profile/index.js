/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Layout from 'components/layout/Layout';

// eslint-disable-next-line react/prop-types
export default function Profile() {
  const [token, setToken] = useState('');
  const [showToken, setShowToken] = useState(false);

  useEffect(() => {
    const tokenData = JSON.parse(localStorage.getItem('token'));
    if (tokenData) setToken(tokenData.token);
  });

  const MEDSOS_DATA = ['Facebook', 'Twitter', 'Instagram', 'Email'];
  const ACTIVITIES_DATA = [{
    uuid: 'fhsoaf1',
    desc: 'Updated his status',
    time: '24 min ago',
  },
  {
    uuid: 'fhsoaf2',
    desc: 'Updated his status',
    time: '42 min ago',
  },
  {
    uuid: 'fhsoaf3',
    desc: 'Updated his status',
    time: '1 day ago',
  },
  ];
  return (
    <Layout withFooter={false}>
        <div>
            <Head>
                <title>Profile</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="h-[calc(100vh - 80px)] bg-white">
                <div className="container mx-auto my-[90px]">
                    <div>

                        <div className="bg-white relative shadow rounded-lg w-5/6 md:w-5/6  lg:w-4/6 xl:w-3/6 mx-auto">
                            <div className="flex justify-center">
                                <img src="/assets/images/avatar.png" alt="" className="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110" />
                            </div>

                            <div className="mt-16">
                                <h1 className="font-bold text-center text-3xl text-gray-900">Alba Profile</h1>
                                <p className="text-center text-sm text-gray-400 font-medium">Alba tech profile</p>
                                <p>
                                    <span />
                                </p>
                                {token ? (
                                    <div className="my-5 px-6">
                                        {
                                            showToken ? (
                                                <div
                                                  onClick={() => setShowToken(false)}
                                                  className="text-white block rounded-lg text-center font-medium leading-6 px-6 py-3 bg-black hover:bg-yellow-400 hover:text-black"
                                                >
                                                    <span className="font-bold">{token}</span>
                                                </div>
                                            ) : (
                                                <div
                                                  onClick={() => setShowToken(true)}
                                                  className="text-black block rounded-lg text-center font-medium leading-6 px-6 py-3 bg-yellow-400 hover:bg-black hover:text-white"
                                                >
                                                    <span className="font-bold">Show your Token</span>
                                                </div>
                                            )
                                        }
                                    </div>
                                ) : ''}
                                <div className="flex justify-between items-center my-5 px-6">
                                    {
                                        MEDSOS_DATA.map((data) => (
                                            <div className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3" key={data}>{data}</div>
                                        ))
                                    }
                                </div>

                                <div className="w-full">
                                    <h3 className="font-medium text-gray-900 text-left px-6">Recent activites</h3>
                                    <div className="mt-5 w-full flex flex-col items-center overflow-hidden text-sm">
                                        {
                                            ACTIVITIES_DATA.map((data) => (
                                                <div class="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                                                    <img src="/assets/images/avatar.png" alt="" class="rounded-full h-6 shadow-md inline-block mr-2" />
                                                    {data.desc}
                                                    &nbsp;
                                                    <span class="text-gray-500 text-xs">{data.time}</span>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
  );
}