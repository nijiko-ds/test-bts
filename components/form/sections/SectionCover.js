import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBtsMain } from "../../../slices/formbts";
import DetailInput from "../DetailInput";

const SectionCover = () => {
  const dispatch = useDispatch();
  const btsMain = useSelector((state) => state.formbts.btsMain);
  return (
    <div className='p-6'>
      <input
        type='text'
        value={btsMain.section1.tipe}
        onChange={(e) => {
          dispatch(
            setBtsMain({
              ...btsMain,
              section1: {
                ...btsMain.section1,
                tipe: e.target.value,
              },
            })
          );
        }}
      />

      {/* ===============  */}
      <DetailInput
        label='Site ID'
        section='1'
        value={btsMain?.section1?.siteid}
        type='text'
      />

      <DetailInput
        label='Nama Site'
        section='2'
        value={btsMain?.section2?.namasite}
        type='text'
      />
      <DetailInput
        label='Alamat'
        section='1'
        value={btsMain?.section1?.alamat}
        type='text'
      />

      <DetailInput
        label='Desa'
        section='1'
        value={btsMain?.section1?.desa}
        type='text'
      />
      <DetailInput
        label='Kecamatan'
        section='1'
        value={btsMain?.section1?.kecamatan}
        type='text'
      />
      <DetailInput
        label='Kabupaten'
        section='1'
        value={btsMain?.section1?.kabupaten}
        type='text'
      />
      <DetailInput
        label='Provinsi'
        section='1'
        value={btsMain?.section1?.provinsi}
        type='text'
      />
    </div>
  );
};

export default SectionCover;
