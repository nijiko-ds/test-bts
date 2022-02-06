import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
// styling
import "antd/dist/antd.css";

// import components
import Layout from "../../components/Layout/Layout";
import Card from "../../components/dashboard/Card";

// import api
import API from "../../services";
import TablePenugasan from "../../components/dashboard/TablePenugasan";

import { setBtsMain } from "../../slices/formbts";
import { destroyBtsForm } from "../../helper/destroyBtsForm";

const Dashboard = () => {
  const dispatch = useDispatch();
  const btsMain = useSelector((state) => state.formbts.btsMain);

  const [permintaanBTS, setPermintaanBTS] = useState("");
  const [dilakukanBTS, setDilakukanBTS] = useState("");
  const [loadingCard, setloadingCard] = useState(false);

  const userid = "5f1ee0be8b451e60ee15de8b";

  const getPermintaanBTS = useCallback(() => {
    setloadingCard(true);
    let params = {
      field: "assignto1",
      jenis: "bts",
      value: userid,
      status: "on progress",
    };
    API.getPenugasanTable(params)
      .then((res) => {
        if (res.status === 200) {
          console.log("permintaan bts ", res?.data?.message?.split(" ")[0]);
          setPermintaanBTS(res?.data?.message?.split(" ")[0]);
          window.localStorage.setItem(
            "permintaanBTS",
            res?.data?.message?.split(" ")[0]
          );
        } else {
          setPermintaanBTS(window.localStorage.getItem("permintaanBTS"));
        }
        setloadingCard(false);
      })
      .catch((err) => {
        setloadingCard(false);
        setPermintaanBTS(window.localStorage.getItem("permintaanBTS"));
        console.log(err);
      });
  }, []);

  const getDilakukanBTS = useCallback(() => {
    setloadingCard(true);
    let formData = new FormData();
    formData.append("userId", userid);
    API.getsurveybyuserbts(formData)
      .then((res) => {
        if (res.status === 200) {
          console.log("dilakukan bts ", res?.data?.message?.split(" ")[0]);
          setDilakukanBTS(res?.data?.message?.split(" ")[0]);
          window.localStorage.setItem(
            "dilakukanBTS",
            res?.data?.message?.split(" ")[0]
          );
        } else {
          setDilakukanBTS(window.localStorage.getItem("dilakukanBTS"));
        }
        setloadingCard(false);
      })
      .catch((err) => {
        setloadingCard(false);
        setDilakukanBTS(window.localStorage.getItem("dilakukanBTS"));
        console.log(err);
      });
  }, []);

  useEffect(() => {
    getPermintaanBTS();
    getDilakukanBTS();
    destroyBtsForm(dispatch, btsMain, setBtsMain);
  }, []);

  return (
    <Layout title='Dashboard'>
      <div className='flex flex-row justify-between gap-4 p-4 pb-10 shadowBaktiBottom rounded-b-xl bgBaktiBlueLight pt-24'>
        <Card
          title='Permintaan Survey Masuk'
          content={loadingCard ? "..." : permintaanBTS}
        />
        <Card
          title='Survey Sudah Dilakukan'
          content={loadingCard ? "..." : dilakukanBTS}
        />
      </div>
      <TablePenugasan />
    </Layout>
  );
};
export default Dashboard;
