import React, { useState, useEffect } from "react";
import Link from "next/link";

import API from "../../services";

const TablePenugasan = () => {
  const userid = "5f1ee0be8b451e60ee15de8b";
  const moment = require("moment");

  const [loading, setloading] = useState(false);
  const [tableData, settableData] = useState([]);

  const [table, setTable] = useState("");

  //pagination states
  const [pageNumber, setpageNumber] = useState(1); // which page we are in
  const [usersPerPage, setusersPerPage] = useState(50);

  // fetch api
  const getPenugasanTable = () => {
    let param = {
      field: "assignto1",
      jenis: "bts",
      value: userid,
      status: "on progress",
      row: usersPerPage,
      page: pageNumber,
    };

    setloading(true);

    API.getPenugasanTable(param)
      .then(async (res) => {
        if (res.status === 200) {
          console.log("Data penugasan ", res.data.values);
          await window.localStorage.setItem(
            "tableDataPenugasanBTS",
            JSON.stringify(res.data.values)
          );
          await settableData(
            JSON.parse(window.localStorage.getItem("tableDataPenugasanBTS"))
          );
        } else {
          settableData(
            JSON.parse(window.localStorage.getItem("tableDataPenugasanBTS"))
          );
        }
        setloading(false);
      })
      .catch((err) => {
        settableData(null);
        setloading(false);
        settableData(
          JSON.parse(window.localStorage.getItem("tableDataPenugasanBTS"))
        );
        // console.log(err);
      });
  };

  useEffect(() => {
    getPenugasanTable();
  }, []);

  return (
    <div>
      <div className='p-4 flexboxColCenter text-lg'>
        <h1 className='text-m font-bold cBaktiBlue'>Daftar Penugasan</h1>
      </div>
      {/* ==== table head  */}
      <div className='flexboxRowCenter px-4 font-bold text-center'>
        <p className='w-6/12'>Kode Survey</p>
        <p className='w-6/12'>Tanggal</p>
      </div>

      <div className='px-4 mb-4'>
        <hr />
      </div>

      {/* ==== table body */}
      {loading ? (
        <div className='flexboxColCenter mt-10'>........</div>
      ) : (
        tableData.length > 0 &&
        tableData?.map((data, i) => {
          console.log("data idzzz", data?._id);
          return (
            <Link href={`/form/${data._id}`}>
              <div key={i} className='flexboxRowStart px-4 cursor-pointer'>
                <p className='flex flex-col px-2 flexboxColStart w-6/12'>
                  {data?.kode ?? "-"} {data?.lokasisurvey?.desa?.name ?? "-"}
                </p>
                <p className='px-2 flexboxColCenter w-6/12'>
                  {moment(data?.target)?.format("DD/MM/YYYY") ?? "-"}
                </p>
              </div>
            </Link>
          );
        })
      )}
    </div>
  );
};

export default TablePenugasan;
