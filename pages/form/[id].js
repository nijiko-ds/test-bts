import React, { useState } from "react";
import { useRouter } from "next/router";

// styling
import { Form, Button } from "antd";
import "antd/dist/antd.css";

import Layout from "../../components/Layout";
import Input from "../../components/form/Input";
// import Dropdown from "../../components/form/Dropdown";
// import Date from "../../components/form/Date";
import { useEffect } from "react";

const FormComponent = () => {
  const [form] = Form.useForm();
  const router = useRouter();
  const { id } = router.query;

  const [nama, setNama] = useState("");
  const [jeniskelamin, setJeniskelamin] = useState("");
  const [email, setEmail] = useState("");
  const [noHp, setNoHp] = useState("");
  const [tanggallahir, setTanggallahir] = useState("");

  const [localData, setlocalData] = useState({});

  const saveLocalStorage = () => {
    let data = {
      nama: nama,
      jeniskelamin: jeniskelamin,
      email: email,
      nohp: noHp,
      tanggallahir: tanggallahir,
      foto: "",
      lampiran: "",
    };
    // if (nama !== "" && email !== "" && noHp !== "" && jeniskelamin !== "") {
    localStorage.setItem("formdata", JSON.stringify(data));
    // }
  };

  useEffect(() => {
    setlocalData(JSON.parse(window.localStorage.getItem("formdata")));
  }, []);

  useEffect(() => {
    if (localData !== undefined) {
      setNama(localData?.nama);
      setJeniskelamin(localData?.jeniskelamin);
      setEmail(localData?.email);
      setNoHp(localData?.nohp);
      setTanggallahir(localData?.tanggallahir);
    } else {
      setNama("");
      setJeniskelamin("");
      setEmail("");
      setNoHp("");
      setTanggallahir("");
    }
  }, [localData]);

  console.log("tanggaldalamid.js", tanggallahir);

  return (
    <Layout title='Form Penugasan'>
      <div className='p-4'>
        <Form layout='vertical' form={form} requiredMark={true}>
          <Input label='Nama' setState={setNama} value={nama} required={true} />
          {/* <Dropdown
            options={[
              { value: "laki-laki", label: "Laki-laki" },
              { value: "perempuan", label: "Perempuan" },
              { value: "lainnya", label: "Lainnya" },
            ]}
            savedValue='jenis_kelamin'
            label='Jenis Kelamin'
            placeholder='Pilih jenis kelamin'
            required={true}
            value={jeniskelamin}
            setState={setJeniskelamin}
          /> */}
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
          {/* <Date
            label='Tanggal Lahir'
            value={tanggallahir}
            setState={setTanggallahir}
          /> */}

          {/* ========== BUTTONS  */}
          <Form.Item
            wrapperCol={{
              xs: { span: 24, offset: 0 },
              sm: { span: 16, offset: 8 },
            }}
          >
            <Button
              type='default'
              className='mr-2'
              onClick={() => {
                saveLocalStorage();
              }}
            >
              Save
            </Button>
            <Button type='primary' htmlType='submit'>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Layout>
  );
};

export default FormComponent;
