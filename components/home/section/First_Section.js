/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Button from 'components/base/Button';
import InputForm from 'components/base/InputForm';
import axios from 'axios';

const First = () => {
  const router = useRouter();
  const [isLoginForm, setIsLoginForm] = useState(false);
  const [signInData, setSignInData] = useState({
    email: 'eve.holt@reqres.in',
    password: 'bebas',
  });

  const [isFormError, setIsFormError] = useState(true);

  const handlerChangeForm = (e) => {
    setSignInData({ ...signInData, [e.target.name]: e.target.value });
  };

  const onSubmit = async () => {
    const post = { ...signInData };
    try {
      const res = await axios.post('https://reqres.in/api/login', post);
      localStorage.setItem('token', JSON.stringify(res.data));
      router.push('/profile');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="h-[calc(100vh - 80px)] bg-white bg-[url('/assets/images/first-section-bg.png')]
        bg-no-repeat bg-[right_30px] max-sm:bg-[length:500px] max-md:bg-[length:600px]
        "
      >
        <div className="w-full py-32 lg:container mx-auto px-4 max-sm:pt-32 max-md:bg-[length:600px]">
          <div className="py-2 px-1 bg-white max-w-[500px] border border-black">
            <p className="max-sm:text-3xl sm:text-5xl font-bold whitespace-normal">Build or scale up</p>
          </div>
          <div className="px-1">
            <p className="max-sm:text-3xl sm:text-5xl ">Your development team</p>
          </div>
          <div className="px-1">
            <div>
              <div />
              <p className="mb-4 font-bold">in weeks, not months</p>
            </div>
            <Button text="Book Now" onClick={() => setIsLoginForm(true)} />
          </div>
        </div>
      </div>
      {isLoginForm ? (
        <div className="w-[100vw] h-[100vh] fixed top-0 left-0 right-0 z-50 bg-black/50">
          <div className="w-full">
            <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
              <div className="w-full relative p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                <div
                  className="font-bold text-xl cursor-pointer text-black pt-4 pr-4 absolute top-0 right-0"
                  onClick={() => setIsLoginForm(false)}
                >
                  X
                </div>
                <p className="text-3xl font-semibold text-center text-yellow-400">
                  Sign in
                </p>
                <form className="mt-6">
                  <InputForm
                    label="Email"
                    type="email"
                    onChange={(e) => handlerChangeForm(e)}
                    name="email"
                    onErrorHandler={(val) => setIsFormError(val)}
                    placeholder="fill ur email"
                    value={signInData.email}
                  />
                  <InputForm
                    label="Password"
                    type="password"
                    onChange={(e) => handlerChangeForm(e)}
                    name="password"
                    placeholder="fill ur password"
                    value={signInData.password}
                  />

                  <div className="mt-6">
                    <Button
                      text="Login"
                      className="w-full tracking-wide transition-colors duration-200 hover:bg-yellow-200 focus:outline-none focus:bg-yyellow-200"
                      disabled={isFormError || signInData.password === ''}
                      onClick={() => onSubmit()}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )
        : ''}
    </>

  );
};

export default First;
