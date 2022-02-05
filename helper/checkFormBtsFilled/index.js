const checkFormBtsFilled = (
  dispatch,
  formFilled,
  setFormFilled,
  btsMain,
  setBtsMain
) => {
  // hanya check section 1 - 5
  if (
    btsMain.section1.tipe === ""
    // btsMain.section1.siteid === "" ||
    // btsMain.section1.kontraktor === "" ||
    // btsMain.section1.namaproject === "" ||
    // btsMain.section1.dokumenno === "" ||
    // btsMain.section1.rev === "" ||
    // btsMain.section1.tanggalsurvey === "" ||
    // btsMain.section1.namasurveyor === "" ||
    // btsMain.section1.nomortelepon === "" ||
    // btsMain.section1.email === "" ||
    // btsMain.section1.statussite === "" ||
    // btsMain.section1.fotoktp.foto === "" ||
    // btsMain.section1.filesitesurveyreportdanapproval.foto === "" ||
    // btsMain.section2.namasite === "" ||
    // btsMain.section2.tipesite === "" ||
    // btsMain.section2.tipecoverageareasite === "" ||
    // btsMain.section2.alamatdankodepos === "" ||
    // btsMain.section2.latitude === "" ||
    // btsMain.section2.longitude === "" ||
    // btsMain.section2.contactpersonpemilik === "" ||
    // btsMain.section2.notlp === "" ||
    // btsMain.section2.alamatcontactperson === "" ||
    // btsMain.section2.akseskelokasisite === "" ||
    // btsMain.section2.jarakdarilokasisitekejalurutama === "" ||
    // btsMain.section2.akseskelokasisitejarak === "" ||
    // btsMain.section2.kondisijalanakseslokasi === "" ||
    // btsMain.section2.jalanakseslokasi === "" ||
    // btsMain.section2.aksessungaiataulaut === "" ||
    // btsMain.section2.waktuperjalanan === "" ||
    // btsMain.section2.ijinkelokasi === "" ||
    // btsMain.section2.lamaperjalanankekotaterdekat === "" || //new
    // btsMain.section2.keberangkatandarikotaterdekat === "" || //new
    // btsMain.section2.tinggitimur === "" ||
    // btsMain.section2.tinggiselatan === "" ||
    // btsMain.section2.tinggibarat === "" ||
    // btsMain.section2.tinggiutara === "" ||
    // btsMain.section2.jaraktimur === "" ||
    // btsMain.section2.jarakselatan === "" ||
    // btsMain.section2.jarakbarat === "" ||
    // btsMain.section2.jarakutara === "" ||
    // btsMain.section2.kondisigudangpenyimpanan === "" ||
    // btsMain.section2.tipeantenna === "" ||
    // btsMain.section3.koordinatgpswgs84latitude === "" ||
    // btsMain.section3.koordinatgpswgs84longitude === "" ||
    // btsMain.section3.altitudeasl === "" ||
    // btsMain.section3.tinggitowerpole === "" ||
    // btsMain.section3.tipetower === "" ||
    // btsMain.section5.posisitowerpole === "" ||
    // btsMain.section5.statuskepemilikanlahan === "" ||
    // btsMain.section5.namapemiliklahan === "" ||
    // btsMain.section5.namapemiliklahan2 === "" ||
    // btsMain.section5.nomorpemiliklahan === "" ||
    // btsMain.section5.nomorpemiliklahan2 === "" ||
    // btsMain.section5.statuskondisilahan === "" ||
    // btsMain.section5.kondisisosial === "" ||
    // btsMain.section5.keamanan === "" ||
    // btsMain.section5.panjang === "" ||
    // btsMain.section5.lebar === ""
  ) {
    console.log("ada yang belum keisi");
    dispatch(setFormFilled(false));
  } else {
    if (btsMain.section4.menggunakantransmisivsat === "Ya") {
      console.log("semuanya terisi");
      dispatch(setFormFilled(true));
    } else {
      if (
        btsMain.section22.siteatinggiantenna === "" ||
        btsMain.section22.sitebtinggiantenna === "" ||
        btsMain.section22.frequency === "" ||
        btsMain.section22.konfigurasi === "" ||
        btsMain.section22.kapasitas === "" ||
        btsMain.section22.ukuranantmain === ""
      ) {
        console.log("ada yang belum keisi di MW FO");
        dispatch(setFormFilled(false));
      } else {
        console.log("semuanya terisi di MW FO");
        dispatch(setFormFilled(true));
      }
    }
  }
};

export { checkFormBtsFilled };
