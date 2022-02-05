import Layout from "../components/Layout/Layout";
import Link from "next/link";
import dynamic from "next/dynamic";
import Script from "next/script";

import { useSelector } from "react-redux";

// css
import "antd/dist/antd.css";

import { Button } from "antd";

import Increment from "../components/Increment";
import Decrement from "../components/Decrement";

import Dashboard from "./dashboard";

export default function Home() {
  // const count = useSelector((state) => state.counter.value);  <<<< DONT DELETE THIS

  return (
    <>
      <Script src='https://unpkg.com/localbase/dist/localbase.dev.js' />
      <Dashboard />
    </>
  );
}
