import React from "react";
import { useRouter } from "next/router";

// styling
import "antd/dist/antd.css";

import Layout from "../../components/Layout";
import Dropdown from "../../components/form/Dropdown";

const Form = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout title="Form Penugasan">
      <h1>ini Form penugasan</h1>
      <h1>{id}</h1>

      <Dropdown
        options={[
          { value: "male", label: "Laki-laki" },
          { value: "female", label: "Perempuan" },
          { value: "undefined", label: "Transgender" },
        ]}
        savedValue="jenis_kelamin"
        label="Jenis Kelamin"
        placeholder="Pilih jenis kelamin"
      />
    </Layout>
  );
};

export default Form;
