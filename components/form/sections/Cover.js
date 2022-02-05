import React from "react";
import Dropdown from "../../form/Dropdown";
import { useDispatch, useSelector } from "react-redux";
import { setBtsMain } from "../../../slices/formbts";

const Cover = () => {
  const dispatch = useDispatch();
  const btsMain = useSelector((state) => state.formbts.btsMain);
  console.log("defaultvalue cek ", btsMain?.section2.tipeantenna);
  return (
    <div className="p-6">
      <label>Tipe</label>
      <Dropdown
        className="w-full"
        options={["Main Candidate", "Alternative 1", "Alternative 2"]}
        value={null}
        label={null}
        section="1"
        valueToBeSet="tipe"
        defaultValue={btsMain?.section1?.tipe}
      />
      <label>Tipe Antenna</label>
      <Dropdown
        className="w-full"
        options={["Omni", "Sectoral"]}
        // value={null}
        label={null}
        section="2"
        valueToBeSet="tipeantenna"
        value={btsMain?.section2?.tipeantenna}
        defaultValue={btsMain?.section2?.tipeantenna}
      />
      <label>Status Site</label>
      <Dropdown
        className="w-full"
        options={["Ok", "Ada Sinyal"]}
        value={null}
        label={null}
        section="1"
        valueToBeSet="statussite"
        defaultValue={btsMain?.section1?.statussite}
      />
      <label>Tipe Site</label>
      <Dropdown
        className="w-full"
        options={[
          "Perdesaan",
          "Perbatasan dengan Negara Lain",
          "Lapangan/Greenfield",
          "Atap/Rooftop",
          "Lainnya",
        ]}
        value={null}
        label={null}
        section="2"
        valueToBeSet="tipesite"
        defaultValue={btsMain?.section1?.tipesite}
      />
      <label>Akses ke Lokasi Site</label>
      <Dropdown
        className="w-full"
        options={["Akses Darat", "Akses Laut", "Akses Udara", "Lainnya"]}
        value={null}
        label={null}
        section="2"
        valueToBeSet="akseskelokasisite"
        defaultValue={btsMain?.section1?.akseskelokasisite}
      />
      <label>Waktu Perjalanan</label>
      <Dropdown
        className="w-full"
        options={["24 Jam", "Waktu Kerja", "Jadwal Kapal"]}
        value={null}
        label={null}
        section="2"
        valueToBeSet="waktuperjalanan"
        defaultValue={btsMain?.section1?.waktuperjalanan}
      />
      <label>Ijin ke Lokasi</label>
      <Dropdown
        className="w-full"
        options={["Iya", "Tidak"]}
        value={null}
        label={null}
        section="2"
        valueToBeSet="ijinkelokasi"
        defaultValue={btsMain?.section1?.ijinkelokasi}
      />
      <label>Kondisi Gudang Penyimpanan</label>
      <Dropdown
        className="w-full"
        options={["Terkunci Security 24 Jam", "Ruang Terbuka", "Lainnya"]}
        value={null}
        label={null}
        section="2"
        valueToBeSet="kondisigudangpenyimpanan"
        defaultValue={btsMain?.section1?.kondisigudangpenyimpanan}
      />
      <label>Tipe Antenna</label>
      <Dropdown
        className="w-full"
        options={["Omni", "Sectoral"]}
        // value={null}
        label={null}
        section="2"
        valueToBeSet="tipeantenna"
        value={btsMain?.section2?.tipeantenna}
        defaultValue={btsMain?.section2?.tipeantenna}
      />
    </div>
  );
};

export default Cover;
