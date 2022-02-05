import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../../components/Layout/Layout";

const Surveys = () => {
  const [employees, setEmployees] = useState([]);

  const [payload, setPayload] = useState({
    name: "",
    gender: "",
    email: "",
    phone: "",
    birthday: "",
    photo: "",
    attachment: "",
  });

  useEffect(() => {
    axios
      .get("https://api-testing.naufalibnusalam.com/api/employees")
      .then((res) => {
        if (res.status === 200) {
          setEmployees(res.data.data);
        }
      })
      .catch((err) => {
        console.error("API FAIL :  > ", err.response);
      });
  }, []);

  return (
    <Layout title='Hasil Survey'>
      <div className='flexboxColCenter h-screen '>
        {employees?.map((e, i) => {
          return (
            <div key={i}>
              <p>Name : {e.name}</p>
              <p>Gender : {e.gender}</p>
              <p>Email : {e.email}</p>
              <p>Phone : {e.phone}</p>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default Surveys;
