import React from "react";
import { useSelector } from "react-redux";
import SectionLayout from "../../Layout/SectionLayout";

import Input from "../Input";
import _ from "lodash";
const Section1 = ({ t, idSurvey, kodeSurvey }) => {
  const btsMain = useSelector((state) => state.formbts.btsMain);
  return (
    <SectionLayout title={t} idSurvey={idSurvey} kodeSurvey={kodeSurvey}>
      {/* ================= MIGRASI DARI SECTION 1 (SHEET HEAD ON SSR) */}
      <div className='border border-gray-300 rounded p-4 mb-3'>
        <h5>Informasi Survey</h5>
        <hr />
        <div className='d-flex flex-row gap8'>
          <Input
            label='Kontraktor'
            section='1'
            value={btsMain?.section1?.kontraktor}
            type='text'
          />
          <Input
            label='Nama Project'
            section='1'
            value={btsMain?.section1?.namaproject}
            type='text'
          />
          <Input
            label='Dokumen No'
            section='1'
            value={btsMain?.section1?.dokumenno}
            type='text'
          />
          <Input
            label='Rev'
            section='1'
            value={btsMain?.section1?.rev}
            type='text'
          />
        </div>
        <div className='d-flex flex-row gap8'>
          <Input
            label='Nama Surveyor'
            section='1'
            value={btsMain?.section1?.namasurveyor}
            type='text'
          />
          <Input
            label='Nomor Telepon'
            section='1'
            value={btsMain?.section1?.nomortelepon}
            type='number'
          />
          <Input
            label='Email'
            section='1'
            value={btsMain?.section1?.email}
            type='email'
          />
        </div>
      </div>
      {/* ================= MIGRASI DARI SECTION 1 (SHEET HEAD ON SSR) END */}
      <Input
        label='Nama Site'
        section='2'
        type='text'
        value={btsMain?.section2?.namasite}
      />

      {btsMain?.section2?.tipesite === "Lainnya" && (
        <Input
          isExtraInput={true}
          label='Tipe Site Lainnya'
          section='2'
          type='text'
          value={btsMain?.section2?.tipesitelainnya}
        />
      )}

      <Input
        label='Alamat dan Kode Pos'
        section='2'
        type='text'
        value={btsMain?.section2?.alamatdankodepos}
      />
      {/* <LatitudeLongitude
            section='2'
            latLabel='Latitude'
            lonLabel='Longitude'
          /> */}
      <Input
        fakelabel='Contact Person Pemilik'
        label='Nama'
        segment='pemiliklahan'
        section='1'
        type='text'
        value={btsMain?.section1?.namapemiliklahan}
      />
      <Input
        fakelabel='No Tlp'
        label='No Telp'
        segment='pemiliklahan'
        section='1'
        type='text'
        value={btsMain?.section1?.notelppemiliklahan}
      />
      <Input
        label='Alamat Contact Person'
        section='2'
        type='text'
        value={btsMain?.section2?.alamatcontactperson}
      />

      {btsMain?.section2?.akseskelokasisite === "Lainnya" && (
        <Input
          label='Akses ke Lokasi Site Lainnya'
          section='2'
          type='text'
          value={btsMain?.section2?.akseskelokasisitelainnya}
        />
      )}
      <Input
        label='Jarak Dari Lokasi Site ke Jalur Utama '
        section='2'
        type='number'
        satuan='meter'
        value={btsMain?.section2?.jarakdarilokasisitekejalurutama}
      />
      <Input
        label='Akses ke Lokasi Site (jarak)'
        section='2'
        type='number'
        satuan='meter'
        value={btsMain?.section2?.akseskelokasisitejarak}
      />

      {_.includes(btsMain?.section2?.kondisijalanakseslokasi, "Lainnya") && (
        <Input
          isExtraInput={true}
          label='Kondisi Jalan Akses Lokasi Lainnya'
          section='2'
          type='text'
          value={btsMain?.section2?.kondisijalanakseslokasilainnya}
        />
      )}

      {_.includes(btsMain?.section2?.jalanakseslokasi, "Lainnya") && (
        <Input
          isExtraInput={true}
          label='Jalan Akses Lokasi Lainnya'
          section='2'
          type='text'
          value={btsMain?.section2?.jalanakseslokasilainnya}
        />
      )}
      {/* dropdown akses sunngai laut : kapal biasa, kapal sewa, lainnya(ada input) */}

      {_.includes(btsMain?.section2?.aksessungaiataulaut, "Lainnya") && (
        <Input
          isExtraInput={true}
          label='Akses Sungai atau Laut Lainnya'
          section='2'
          type='text'
          value={btsMain?.section2?.aksessungaiataulautlainnya}
        />
      )}

      {btsMain?.section2?.waktuperjalanan === "Waktu Kerja" && (
        <Input
          isExtraInput={true}
          label='Waktu Kerja'
          section='2'
          type='text'
          satuan='jam'
          value={btsMain?.section2?.waktukerja}
        />
      )}

      <Input
        label='Lama Perjalanan ke Kota Terdekat'
        section='2'
        satuan='jam'
        type='number'
        value={btsMain?.section2?.lamaperjalanankekotaterdekat}
      />
      <Input
        label='Keberangkatan Dari kota Terdekat'
        section='2'
        type='text'
        value={btsMain?.section2?.keberangkatandarikotaterdekat}
      />
      <p className='text-xl'>Ketinggian Halangan</p>
      <div className='d-flex flex-row gap16'>
        <Input
          label='Tinggi Timur'
          section='2'
          type='number'
          satuan='meter'
          value={btsMain?.section2?.tinggitimur}
        />
        <Input
          label='Tinggi Selatan'
          section='2'
          type='number'
          satuan='meter'
          value={btsMain?.section2?.tinggiselatan}
        />
        <Input
          label='Tinggi Barat'
          section='2'
          type='number'
          satuan='meter'
          value={btsMain?.section2?.tinggibarat}
        />
        <Input
          label='Tinggi Utara'
          section='2'
          type='number'
          satuan='meter'
          value={btsMain?.section2?.tinggiutara}
        />
      </div>
      <p className='text-xl'>Jarak Halangan dari Tower</p>
      <div className='d-flex flex-row gap16'>
        <Input
          label='Jarak Timur'
          section='2'
          type='number'
          satuan='meter'
          value={btsMain?.section2?.jaraktimur}
        />
        <Input
          label='Jarak Selatan'
          section='2'
          type='number'
          satuan='meter'
          value={btsMain?.section2?.jarakselatan}
        />
        <Input
          label='Jarak Barat'
          section='2'
          type='number'
          satuan='meter'
          value={btsMain?.section2?.jarakbarat}
        />
        <Input
          label='Jarak Utara'
          section='2'
          type='number'
          satuan='meter'
          value={btsMain?.section2?.jarakutara}
        />
      </div>

      {btsMain?.section2?.kondisigudangpenyimpanan === "Lainnya" && (
        <Input
          isExtraInput={true}
          label='Kondisi Gudang Penyimpanan Lainnya'
          section='2'
          type='text'
          value={btsMain?.section2?.kondisigudangpenyimpananlainnya}
        />
      )}

      {btsMain?.section2?.tipeantenna === "Omni" && (
        <>
          <Input
            isExtraInput={true}
            label='Jumlah'
            segment='omni'
            section='2'
            type='number'
            value={btsMain?.section2?.jumlahomni}
          />
          <Input
            disabled={true}
            isExtraInput={true}
            label='Azimuth'
            segment='omni'
            section='2'
            type='text'
            alttype='number'
            satuan='derajat'
            value={360}
          />
          <Input
            isExtraInput={true}
            label='Unit'
            segment='omni'
            section='2'
            type='number'
            value={btsMain?.section2?.unitomni}
          />
          <Input
            isExtraInput={true}
            label='Ketinggian Omni'
            fakelabel='RF Antenna Height'
            section='2'
            type='text'
            alttype='number'
            satuan='meter'
            value={btsMain?.section2?.ketinggianomni}
          />
        </>
      )}
      {btsMain?.section2?.tipeantenna === "Sectoral" && (
        <>
          <Input
            isExtraInput={true}
            label='Jumlah'
            segment='sectoral'
            section='2'
            type='number'
            value={btsMain?.section2?.jumlahsectoral}
          />
          <Input
            isExtraInput={true}
            label='Azimuth'
            segment='sectoral'
            section='2'
            type='text'
            alttype='number'
            satuan='derajat'
            value={btsMain?.section2?.azimuthsectoral}
          />
          <Input
            isExtraInput={true}
            label='Unit'
            segment='sectoral'
            section='2'
            type='number'
            value={btsMain?.section2?.unitsectoral}
          />
          <Input
            isExtraInput={true}
            label='RF Antenna Height'
            section='2'
            type='text'
            alttype='number'
            satuan='meter'
            value={btsMain?.section2?.rfantennaheight}
          />
        </>
      )}
    </SectionLayout>
  );
};

export default Section1;
