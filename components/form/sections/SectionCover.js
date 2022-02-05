import React from "react";
import { useSelector } from "react-redux";
import SectionLayout from "../../Layout/SectionLayout";

import Input from "../Input";
import LatitudeLongitude from "../LongitudeLatitude";

const SectionCover = ({ t, idSurvey, kodeSurvey }) => {
  const btsMain = useSelector((state) => state.formbts.btsMain);
  return (
    <SectionLayout title={t} idSurvey={idSurvey} kodeSurvey={kodeSurvey}>
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
      <hr className='mb-3' />
      <h5 className='font-extrabold text-m'>Koordinat (DD Format)</h5>
      <LatitudeLongitude
        section='3'
        latLabel='Koordinat GPS WGS84 - Latitude'
        lonLabel='Koordinat GPS WGS84 - Longitude'
      />
      <hr className='mb-3' />
      <h5 className='font-extrabold text-m'>Diketahui Oleh</h5>

      <p className='m-0 mb-2 p-0 pb-2 cBaktiBlue font-bold border-b bBaktiBlue'>
        Surveyor Penyedia
      </p>
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

      <p className='m-0 mb-2 p-0 pb-2 cBaktiBlue font-bold border-b bBaktiBlue'>
        Dinas KOMINFO Kabupaten
      </p>
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

      <p className='m-0 mb-2 p-0 pb-2 cBaktiBlue font-bold border-b bBaktiBlue'>
        PEMDA
      </p>
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

      <p className='m-0 mb-2 p-0 pb-2 cBaktiBlue font-bold border-b bBaktiBlue'>
        Kepala Desa
      </p>
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

      <p className='m-0 mb-2 p-0 pb-2 cBaktiBlue font-bold border-b bBaktiBlue'>
        Pemilik Lahan
      </p>
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
      <hr className='mb-3' />
    </SectionLayout>
  );
};

export default SectionCover;
