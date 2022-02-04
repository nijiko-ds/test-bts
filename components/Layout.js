import React from "react";

import Head from "next/head";

import style from "../styles/mobile.module.css";
// import components
import NavigationBar from "./navigationBar/NavigationBar";

const Layout = ({ title, children }) => {
  return (
    <div className='container h-screen min-h-screen max-h-screen mx-auto max-w-xl relative overflow-hidden'>
      <Head className='h-10'>
        <title>{title}</title>
        <meta
          name='SMASLAB BTS Mobile'
          content='SMASLAB by Badan Aksesibilitas Telekomunikasi dan Informasi'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <header className='h-24 px-4 flexboxRowBetween bgBaktiBlueLight2'>
        <h1 className='text-xl'>{title}</h1>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-5 w-5'
          viewBox='0 0 20 20'
          fill='currentColor'
        >
          <path d='M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z' />
        </svg>
      </header>

      <main className='mb-auto h-full overflow-auto no-scrollbar pb-56'>
        {children}
      </main>

      <footer className='mt-auto h-14 absolute bottom-0 w-full flexboxColCenter bgW shadowBaktiTop'>
        <NavigationBar />
      </footer>
    </div>
  );
};

export default Layout;
