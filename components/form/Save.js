import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// indexDB
// import Localbase from "localbase";
// const Localbase = require("localbase");

import { message } from "antd";

// import redux
import { setBtsMain } from "../../slices/formbts";
import { setFormFilled } from "../../slices/formfilled";
import { destroyBtsForm } from "../../helper/destroyBtsForm";
import { checkFormBtsFilled } from "../../helper/checkFormBtsFilled";

function Save(props) {
  const { simpanDisabled, idSurvey } = props;
  // indexDB
  // let db = new Localbase("db");
  // db.config.debug = false;
  // redux
  const dispatch = useDispatch();
  const btsMain = useSelector((state) => state.formbts.btsMain);
  const formFilled = useSelector((state) => state.formFilled.formFilled);

  // db.collection(eval("strBtsMain").concat(idSurvey)).delete();
  const moment = require("moment");
  let today = new Date();
  let todayDate = moment(today).format("YYYY-MM-DD");

  // section strings
  let strBtsMain = "btsMain";

  useEffect(() => {
    // if (idSurvey !== undefined) {
    //   db.collection(eval("strBtsMain").concat(idSurvey))
    //     .get()
    //     .then((data) => {
    //       if (data[0]) {
    //         dispatch(setBtsMain(data[0].btsMain));
    //       } else {
    //         destroyBtsForm(dispatch, btsMain, setBtsMain);
    //       }
    //     });
    // }
  }, []);

  useEffect(() => {
    if (btsMain?.section1?.tanggalsurvey === "") {
      dispatch(
        setBtsMain({
          ...btsMain,
          section1: {
            ...btsMain?.section1,
            tanggalsurvey: todayDate,
          },
        })
      );
    }
  }, [btsMain]);

  // const handleSimpanLocalStorage = () => {
  //   console.log("huh? ", idSurvey);
  //   if (idSurvey !== undefined) {
  //     db.collection(eval("strBtsMain").concat(idSurvey))
  //       .get()
  //       .then((data) => {
  //         if (data.length === 0) {
  //           db.collection(eval("strBtsMain").concat(idSurvey)).add({
  //             id: 0,
  //             btsMain: btsMain,
  //           });
  //         } else {
  //           db.collection(eval("strBtsMain").concat(idSurvey))
  //             .doc({ id: 0 })
  //             .set({
  //               id: 0,
  //               btsMain: btsMain,
  //             });
  //         }
  //         message.success("Sukses menyimpan data form");
  //       });
  //   } else {
  //     message.error(
  //       'Gagal simpan data. Silahkan isi "Kode Survey" Terlebih Dahulu!'
  //     );
  //   }
  // };

  return (
    <div className='flexboxRowCenter my-10'>
      <button
        disabled={simpanDisabled}
        className={`px-4 py-2 bgBaktiBlue rounded cW w-6/12`}
        onClick={() => {
          console.log("clicked");
          // handleSimpanLocalStorage();
          checkFormBtsFilled(
            dispatch,
            formFilled,
            setFormFilled,
            btsMain,
            setBtsMain
          );
        }}
      >
        Simpan
      </button>
    </div>
  );
}

export default Save;
