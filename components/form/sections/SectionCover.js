import React from "react";
import { useSelector } from "react-redux";
import SectionLayout from "../../Layout/SectionLayout";

import Input from "../Input";

const SectionCover = () => {
  const btsMain = useSelector((state) => state.formbts.btsMain);
  return (
    <SectionLayout title='Site Survey Report & Approval'>
      <Input
        label='Site ID'
        section='1'
        value={btsMain?.section1?.siteid}
        type='text'
      />

      <Input
        label='Nama Site'
        section='2'
        value={btsMain?.section2?.namasite}
        type='text'
      />
      <Input
        label='Alamat'
        section='1'
        value={btsMain?.section1?.alamat}
        type='text'
      />

      <Input
        label='Desa'
        section='1'
        value={btsMain?.section1?.desa}
        type='text'
      />
      <Input
        label='Kecamatan'
        section='1'
        value={btsMain?.section1?.kecamatan}
        type='text'
      />
      <Input
        label='Kabupaten'
        section='1'
        value={btsMain?.section1?.kabupaten}
        type='text'
      />
      <Input
        label='Provinsi'
        section='1'
        value={btsMain?.section1?.provinsi}
        type='text'
      />
      <hr />
      <p>Koordinat (DD Format)</p>

      <hr />
      <h5>Diketahui Oleh</h5>

      <p className='m-0 p-0 cBaktiBlue font-bold'>Surveyor Penyedia</p>
      <hr style={{ width: "50%", margin: "0px 0px 8px 0px", padding: "0px" }} />
      <Input
        fakelabel='Nama'
        label='Nama Surveyor'
        section='1'
        value={btsMain?.section1?.namasurveyor}
        type='text'
      />
      <Input
        fakelabel='No Telp'
        label='Nomor Telepon'
        section='1'
        value={btsMain?.section1?.nomortelepon}
        type='number'
      />

      <p className='m-0 p-0 cBaktiBlue font-bold'>Dinas KOMINFO Kabupaten</p>
      <hr style={{ width: "50%", margin: "0px 0px 8px 0px", padding: "0px" }} />
      <Input
        label='Nama'
        segment='dinaskominfokabupaten'
        section='1'
        value={btsMain?.section1?.namadinaskominfokabupaten}
        type='text'
      />
      <Input
        label='No Telp'
        segment='dinaskominfokabupaten'
        section='1'
        value={btsMain?.section1?.notelpdinaskominfokabupaten}
        type='number'
      />

      <p className='m-0 p-0 cBaktiBlue font-bold'>PEMDA</p>
      <hr style={{ width: "50%", margin: "0px 0px 8px 0px", padding: "0px" }} />
      <Input
        label='Nama'
        segment='pemda'
        section='1'
        value={btsMain?.section1?.namapemda}
        type='text'
      />
      <Input
        label='No Telp'
        segment='pemda'
        section='1'
        value={btsMain?.section1?.notelppemda}
        type='number'
      />

      <p className='m-0 p-0 cBaktiBlue font-bold'>Kepala Desa</p>
      <hr style={{ width: "50%", margin: "0px 0px 8px 0px", padding: "0px" }} />
      <Input
        label='Nama'
        segment='kepaladesa'
        section='1'
        value={btsMain?.section1?.namakepaladesa}
        type='text'
      />
      <Input
        label='No Telp'
        segment='kepaladesa'
        section='1'
        value={btsMain?.section1?.notelpkepaladesa}
        type='number'
      />

      <p className='m-0 p-0 cBaktiBlue font-bold'>Pemilik Lahan</p>
      <hr style={{ width: "50%", margin: "0px 0px 8px 0px", padding: "0px" }} />
      <Input
        label='Nama'
        segment='pemiliklahan'
        section='1'
        value={btsMain?.section1?.namapemiliklahan}
        type='text'
      />
      <Input
        label='No Telp'
        segment='pemiliklahan'
        section='1'
        value={btsMain?.section1?.notelppemiliklahan}
        type='number'
      />
      <hr />
    </SectionLayout>
  );
};

export default SectionCover;
