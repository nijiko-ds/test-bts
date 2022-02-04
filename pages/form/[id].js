import React, { useState } from "react";
import { useRouter } from "next/router";

import Layout from "../../components/Layout";
import Input from "../../components/form/Input";

const Form = () => {
  const router = useRouter();
  const { id } = router.query;

  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [noHp, setNoHp] = useState("");

  return (
    <Layout title='Form Penugasan'>
      <div className='p-4'>
        <Input label='Nama' setState={setNama} value={nama} required={true} />
        <Input
          label='Email'
          setState={setEmail}
          value={email}
          type='email'
          required={true}
        />
        <Input
          label='Np Hp'
          setState={setNoHp}
          value={noHp}
          type='number'
          required={true}
        />
      </div>
    </Layout>
  );
};

export default Form;
