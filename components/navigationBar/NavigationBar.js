import React from "react";
import { Space, Col, Row } from "antd";
import { useRouter } from "next/router";
import Link from "next/link";

const NavigationBar = () => {
  const { asPath } = useRouter();

  const router = useRouter();
  console.log(router.pathname);
  const iconDashboard = () => {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-6 w-6'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z'
        />
      </svg>
    );
  };

  const iconForm = () => {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-6 w-6'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3'
        />
      </svg>
    );
  };
  const iconSurveys = () => {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-6 w-6'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01'
        />
      </svg>
    );
  };
  const iconProfile = () => {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-6 w-6'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z'
        />
      </svg>
    );
  };

  return (
    <div className='container top-auto flex justify-around align-center min-w-full'>
      <Link href='/dashboard'>
        <div
          className={`flexboxColCenter ${
            asPath === "/dashboard" ? "cBaktiBlue" : "cBaktiBlueLight"
          }`}
        >
          {iconDashboard()}
          <a
            className={`text-xs ${
              asPath === "/dashboard" ? "cBaktiBlue" : "cBaktiBlueLight"
            }`}
          >
            Dashboard
          </a>
        </div>
      </Link>
      {/* <Link href='/form'>
        <div className='flexboxColCenter cBaktiBlueLight'>
          {iconForm()}
          <a className='text-xs cBaktiBlueLight'>Form</a>
        </div>
      </Link> */}
      <Link href='/surveys'>
        <div
          className={`flexboxColCenter ${
            asPath === "/surveys" ? "cBaktiBlue" : "cBaktiBlueLight"
          }`}
        >
          {iconSurveys()}
          <a
            className={`text-xs ${
              asPath === "/surveys" ? "cBaktiBlue" : "cBaktiBlueLight"
            }`}
          >
            Surveys
          </a>
        </div>
      </Link>
      <Link href='/profile'>
        <div
          className={`flexboxColCenter ${
            asPath === "/profile" ? "cBaktiBlue" : "cBaktiBlueLight"
          }`}
        >
          {iconProfile()}
          <a
            className={`text-xs ${
              asPath === "/profile" ? "cBaktiBlue" : "cBaktiBlueLight"
            }`}
          >
            Profile
          </a>
        </div>
      </Link>
    </div>
  );
};

export default NavigationBar;
