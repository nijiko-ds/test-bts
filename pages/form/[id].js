import React from "react";
import { useRouter } from "next/router";

import Layout from "../../components/Layout";

const Form = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout title='Form Penugasan'>
      <h1>ini Form penugasan</h1>
      <h1>{id}</h1>
    </Layout>
  );
};

export default Form;
