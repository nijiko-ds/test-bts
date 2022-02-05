import React, { useState, useEffect, useCallback } from "react";

// dynamic import (lazy loading nya next.js)
import dynamic from "next/dynamic";

const Cover = dynamic(() => import("../../components/form/sections/Cover"));
const SectionCover = dynamic(() =>
  import("../../components/form/sections/SectionCover")
);
// import SectionCover from "../../components/form/sections/SectionCover";

// styling
import { Form, Select } from "antd";
import "antd/dist/antd.css";

// import components
import Layout from "../../components/Layout";
import Card from "../../components/dashboard/Card";

// import api
import API from "../../services";
import Dropdown from "../../components/form/Dropdown";

const FormPage = () => {
  const { Option } = Select;
  const [form] = Form.useForm();
  const userid = "5f1ee0be8b451e60ee15de8b";

  //states
  const [kodeSurveyList, setKodeSurveyList] = useState([]);
  const [selectedKode, setSelectedKode] = useState("Select Kode Survey");
  const [selectedFormType, setSelectedFormType] = useState("Select Form Type");
  const [section, setSection] = useState([]);
  const [selectedSection, setSelectedSection] = useState("Select Section");

  const [loading, setloading] = useState(false);

  const formTypes = [
    "Cover",
    "SSR",
    "MW LOS",
    "FO",
    "Potensi",
    "Evidence",
    "CME",
  ];

  const sections = [
    ["Site Survey Report & Approval"],
    [
      "Section 1 : Informasi Umum",
      "Section 2 : Informasi Geografi",
      "Section 3 : Tower Data",
      "Section 4 : Transmisi VSAT",
      "Section 5 : Informasi Umum Lahan",
      "Section 6 : Coverage Seluler Di Site",
      "Section 7 : Kondisi Lahan",
      "Section 8 : Sarana Catuan Listrik Dan Pendukungnya",
      "Section 9 : Perijinan",
      "Section 10 : Informasi Demografi",
      "Section 11 : Foto Foto Lahan Yang Akan Dibangun",
      "Section 12 : Layout Site (Sesuai Penawaran Tender)",
      "Section 13 : Foto Foto Kandidat Lahan",
      "Section 14 : Informasi Obstacle dan Panoramic",
      "Section 15 : Foto Capture G-NETTRACK 0.5 KM",
      "Section 16 : Foto Capture G-NETTRACK 2KM",
      "Section 17 : Foto Capture G-NETTRACK Rute Jalan",
      "Section 18 : Location Mapping / Coverage Plot",
      "Section 19 : Foto-Foto Pengguna Potensial",
      "Section 20 : Foto-Foto Akses ke Site",
      "Section 21 : General Comment",
    ],
    [
      "Section 22 : Informasi Desain Link Microwave",
      "Section 23 : Path Profile & Desktop Contour",
      "Section 24 : Hasil Survey LOS",
      "Section 25 : Foto Foto GPS dan Tower",
      "Section 26 : Foto Tower SITE A",
      "Section 27 : Proposed Lokasi Antenna MW SITE A",
      "Section 28 : Foto Panoramic SITE A",
      "Section 29 : Foto Tower di SITE B",
      "Section 30 : Proposed Lokasi Antenna MW SITE B",
      "Section 31 : Foto Panoramic SITE B",
      "Section 32 : Foto Line Of Sight (LOS)",
      "Section 33 : Path Profile",
      "Section 34 : Peta Lokasi keseluruhan / Global Map",
      "Section 35 : Perkiraan Link Budget (Capture-an Tools)",
    ],
    [
      "Section 36 : Informasi Umum",
      "Section 37 : Hasil Survey",
      "Section 38 : Lokasi HH/Pole",
      "Section 39 : Kondisi Fasilitas",
      "Section 40 : Kondisi Terminasi",
      "Section 41 : Foto Titik Terminasi di STO",
      "Section 42 : Hasil Survey Dan Catatan",
      "Section 43 : Rute Fiber Optik Di Google Map",
      "Section 44 : As Plan Drawing",
    ],
    ["Survey Potensi Site"],
    ["Evidence"],
    ["CME"],
    ["NOTE"],
  ];

  // fetch api
  const getPenugasanTable = () => {
    let param = {
      field: "assignto1",
      jenis: "bts",
      value: userid,
      status: "on progress",
    };

    setloading(true);

    API.getPenugasanTable(param)
      .then(async (res) => {
        if (res.status === 200) {
          setKodeSurveyList();
          await window.localStorage.setItem(
            "kodeList",
            JSON.stringify(Object.values(res.data.values))
          );
          await setKodeSurveyList(
            JSON.parse(window.localStorage.getItem("kodeList"))
          );
        } else {
          setKodeSurveyList(
            JSON.parse(window.localStorage.getItem("kodeList"))
          );
        }
        setloading(false);
      })
      .catch((err) => {
        setKodeSurveyList(null);
        setloading(false);
        setKodeSurveyList(JSON.parse(window.localStorage.getItem("kodeList")));
        // console.log(err);
      });
  };

  useEffect(() => {
    getPenugasanTable();
  }, []);

  useEffect(() => {
    switch (selectedFormType) {
      case "Cover":
        setSection(sections[0]);
        break;
      case "SSR":
        setSection(sections[1]);
        break;
      case "MW LOS":
        setSection(sections[2]);
        break;
      case "FO":
        setSection(sections[3]);
        break;
      case "Potensi":
        setSection(sections[4]);
        break;
      case "Evidence":
        setSection(sections[5]);
        break;
      case "CME":
        setSection(sections[6]);
        break;

      default:
        setSection(sections[0]);
        break;
    }
  }, [selectedFormType]);

  console.log("selected form type ", selectedFormType);

  return (
    <Layout title="Form Penugasan">
      <div className="flex flex-col justify-between gap-2 p-4 pb-10 shadowBaktiBottom rounded-b-3xl bgBaktiBlueLight">
        <label>Kode Survey</label>
        {/* <Select
          className="w-full"
          placeholder="Select Kode Survey"
          optionFilterProp="children"
          defaultValue={selectedKode}
          onChange={(e) => setSelectedFormType(e)}
          size="large"
          defaultOpen={true}
        >
          {kodeSurveyList?.map((d, i) => {
            return (
              <Option value={d?.kode} key={i}>
                {d?.kode}
              </Option>
            );
          })}
        </Select> */}
        <Dropdown
          className="w-full"
          placeholder="Select Kode Survey"
          defaultValue={selectedKode}
          setter={setSelectedKode}
          size="large"
          defaultOpen={true}
          options={kodeSurveyList}
          value="_id"
          label="kode"
        />
        {/* ====================================== */}
        <label>Select Form Type</label>
        <Dropdown
          className="w-full"
          placeholder="Select Form Type"
          defaultValue={selectedFormType}
          setter={setSelectedFormType}
          size="large"
          defaultOpen={true}
          options={formTypes}
          value={null}
          label={null}
        />
        {/* <Select
          className="w-full"
          placeholder="Select Form Type"
          optionFilterProp="children"
          defaultValue={selectedFormType}
          onChange={(e) => setSelectedFormType(e)}
          size="large"
        >
          {formTypes.map((d, i) => {
            return (
              <Option value={d} key={i}>
                {d}
              </Option>
            );
          })}
        </Select> */}
        {/* ====================================== */}
        <label>Select Section</label>
        <Dropdown
          className="w-full"
          placeholder="Select Form Type"
          defaultValue={selectedSection}
          setter={setSelectedSection}
          size="large"
          defaultOpen={true}
          options={section}
          value={null}
          label={null}
        />
        {/* <Select
          className="w-full"
          placeholder="Select Section"
          optionFilterProp="children"
          defaultValue={selectedSection}
          onChange={(e) => setSelectedFormType(e)}
          size="large"
        >
          {section.map((d, i) => {
            return (
              <Option value={d} key={i}>
                {d}
              </Option>
            );
          })}
        </Select> */}
      </div>
      {/* {selectedSection === "Site Survey Report & Approval" && <SectionCover />} */}
      <Cover />
      <SectionCover />
    </Layout>
  );
};

export default FormPage;
