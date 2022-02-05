import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  btsMain: {
    section1: {
      tipe: "",
      siteid: "",
      kontraktor: "",
      namaproject: "",
      dokumenno: "",
      rev: "",
      tanggalsurvey: "",
      namasurveyor: "",
      nomortelepon: "",
      email: "",
      statussite: "",
      fotoktp: {
        foto: "",
        extension_file: "",
      },
      fotocapdesa: {
        foto: "",
        extension_file: "",
      },
      filesitesurveyreportdanapproval: {
        foto: "",
        extension_file: "",
      },
      alamat: "",
      desa: "",
      kecamatan: "",
      jarakkecamatan: "",
      kabupaten: "",
      jarakkabupaten: "",
      provinsi: "",
      latitude: "",
      longitude: "",
      namasurveyorpenyedia: "",
      namadinaskominfokabupaten: "",
      namapemda: "",
      namakepaladesa: "",
      namapemiliklahan: "",
      notelpsurveyorpenyedia: "",
      notelpdinaskominfokabupaten: "",
      notelppemda: "",
      notelpkepaladesa: "",
      notelppemiliklahan: "",
      tanggalsurveyorpenyedia: "",
      tanggaldinaskominfokabupaten: "",
      tanggalpemda: "",
      tanggalkepaladesa: "",
      tanggalpemiliklahan: "",
      keputusanfinalsurveyorpenyedia: "",
      keputusanfinaldinaskominfokabupaten: "",
      keputusanfinalpemda: "",
      keputusanfinalkepaladesa: "",
      keputusanfinalpemiliklahan: "",
    },
    section2: {
      namasite: "",
      tipesite: "",
      tipesitelainnya: "",
      tipecoverageareasite: "",
      alamatdankodepos: "",
      latitude: "",
      longitude: "",
      contactpersonpemilik: "",
      notlp: "",
      alamatcontactperson: "",
      akseskelokasisite: "",
      akseskelokasisitelainnya: "",
      jarakdarilokasisitekejalurutama: "",
      akseskelokasisitejarak: "",
      kondisijalanakseslokasi: "",
      kondisijalanakseslokasilainnya: "",
      jalanakseslokasi: "",
      jalanakseslokasilainnya: "",
      aksessungaiataulaut: "",
      aksessungaiataulautlainnya: "",
      waktuperjalanan: "",
      waktukerja: "",
      ijinkelokasi: "",
      lamaperjalanankekotaterdekat: "", //new
      keberangkatandarikotaterdekat: "", //new
      tinggitimur: "",
      tinggiselatan: "",
      tinggibarat: "",
      tinggiutara: "",
      jaraktimur: "",
      jarakselatan: "",
      jarakbarat: "",
      jarakutara: "",
      kondisigudangpenyimpanan: "",
      kondisigudangpenyimpananlainnya: "",
      tipeantenna: "Omni",
      jumlahomni: "",
      azimuthomni: 360,
      unitomni: "",
      ketinggianomni: "",
      jumlahsectoral: "",
      azimuthsectoral: "",
      unitsectoral: "",
      rfantennaheight: "",
    },
    section3: {
      koordinatgpswgs84latitude: "",
      koordinatgpswgs84longitude: "",
      altitudeasl: "",
      tinggitowerpole: "18 meter",
      tinggitowerpolelainnya: "",
      tipetower: "",
      tipetowerlainnya: "",
    },
    section4: {
      menggunakantransmisivsat: "",
      penempatanantenna: "",
      mountingantenna: "",
      diameterantenna: "",
      diameterantennalainnya: "",
      tipefrekuensisatelit: "",
      tipefrekuensisatelitlainnya: "",
      satelityangakandigunakan: "",
      satelityangakandigunakanlainnya: "",
      lampiranprintscreensurveyvsat: {
        foto: "",
        extension_file: "",
      },
      lampiranprintscreenlosvsat: {
        foto: "",
        extension_file: "",
      },
      lampiranprintscreenmapvsat: {
        foto: "",
        extension_file: "",
      },
      azimuth: "",
      elevasi: "",
      obstacle: "",
      keteranganobstacle: "",
    },
    section5: {
      posisitowerpole: "",
      statuskepemilikanlahan: "",
      statuskepemilikanlahanlainnya: "",
      jumlahpemiliklahan: "",
      namapemiliklahan: "",
      namapemiliklahan2: "",
      nomorpemiliklahan: "",
      nomorpemiliklahan2: "",
      statuskondisilahan: "",
      statuskondisilahanlainnya: "",
      kondisisosial: "",
      keamanan: "",
      luaslahan: "",
      panjang: "",
      lebar: "",
    },
    section6: {
      ketersediaancoveragedalamradius2kmdarisitetelkomsel: "",
      ketersediaansinyaltelkomsel: "",
      levelsinyaldihpjikaadacoveragetelkomsel: "",
      kekuatansignaltelkomsel: "",
      calldisitetelkomsel: "",
      smsdisitetelkomsel: "",
      internetspeedtest4gtelkomsel: "",
      ketersediaancoveragedalamradius2kmdarisiteindosat: "",
      ketersediaansinyalindosat: "",
      levelsinyaldihpjikaadacoverageindosat: "",
      kekuatansignalindosat: "",
      calldisiteindosat: "",
      smsdisiteindosat: "",
      internetspeedtest4gindosat: "",
      ketersediaancoveragedalamradius2kmdarisitexl: "",
      ketersediaansinyalxl: "",
      levelsinyaldihpjikaadacoveragexl: "",
      kekuatansignalxl: "",
      calldisitexl: "",
      smsdisitexl: "",
      internetspeedtest4gxl: "",
      sinyalkuat2gtelkomsel: "",
      sinyallemah2gtelkomsel: "",
      sinyalkuat3gtelkomsel: "",
      sinyallemah3gtelkomsel: "",
      sinyalkuat4gtelkomsel: "",
      sinyallemah4gtelkomsel: "",
      sinyalkuat2gindosat: "",
      sinyallemah2gindosat: "",
      sinyalkuat3gindosat: "",
      sinyallemah3gindosat: "",
      sinyalkuat4gindosat: "",
      sinyallemah4gindosat: "",
      sinyalkuat2gxl: "",
      sinyallemah2gxl: "",
      sinyalkuat3gxl: "",
      sinyallemah3gxl: "",
      sinyalkuat4gxl: "",
      sinyallemah4gxl: "",
      internetspeedtestdltelkomsel: "",
      internetspeedtestultelkomsel: "",
      internetspeedtestdlindosat: "",
      internetspeedtestulindosat: "",
      internetspeedtestdlxl: "",
      internetspeedtestulxl: "",
    },
    section7: {
      tinggi1: "",
      tinggi2: "",
      tinggi3: "",
      tinggi4: "",
      tinggi5: "",
      tinggi6: "",
      tinggi7: "",
      tinggi8: "",
      tinggi9: "",
      tinggi10: "",
      tinggi11: "",
      tinggi12: "",
      tinggi13: "",
      tinggi14: "",
      tinggi15: "",
      tinggi16: "",
      topografiumum: "",
      posisiutaraadadiderajatberapa: "",
      derajatkemiringan: "",
      topografiumumlainnya: "",
      keteranganareacakupanbanyakcakupan: [],
      keteranganareacakupanlainnya: "",
      keteranganlahan: "",
      keteranganlahanlainnya: "",
      statuslahan: "",
      pengurusanimb: "",
      klasifikasitanah: "",
      klasifikasitanahlainnya: "",
      obyekpenghalang: "",
      obyekpenghalanglainnya: "",
      kebutuhanpengkondisianlahan: "",
      kebutuhanpengkondisianlahanlainnya: "",
      tataruang: "",
      jenislahan: "",
      sumberairbersihterdekat: "",
      jaraksumberairbersihterdekat: "",
      jenislahanlainnya: "",
      dekatlautsungaijurangtebing: "",
      jarakdenganlaut: "",
      jarakdengansungai: "",
      jarakdenganjurang: "",
      jarakdengantebing: "",
      dekatdenganlainnya: "",
      jarakdenganlainnya: "",
      resikobencana: "",
      ketinggianbanjir: "",
      resikobencanalainnya: "",
      sumberdayasetempatsdasdm: "",
      sumberdayalainnya: "",
      resikorelokasi: "",
      resikokomplain: "",
    },
    section8: {
      pengelolasumberlistrik: "",
      jenissumberlistrik: "",
      jenissumberlistriklainnya: "",
      phaselistrik: "",
      kapasitassumberlistrik: "",
      durasioperasisumberlistrik: "",
      mulai: "",
      selesai: "",
      jarakperangkatkesumberlistrikterdekat: "",
      listrikbisadipakaiuntukperangkat: "",
      kategorigrid: "",
      pasokanbbm: "",
      jenisbbmyangseringtersedia: "",
      jenisbbmyangseringtersedialainnya: "",
      hargabbmdilokasi: "",
      posisiobjekpenghalangterhadapmodulsuryalayout: {
        foto: "",
        extension_file: "",
      },
      bayanganobjekmenutupiareamodulsurya: "",
      posisilintanglokasi: "",
      orientasikemiringanpanelsuryayangoptimal: "",
      beritaacarakelistrikan: {
        foto: "",
        extension_file: "",
      },
    },
    section9: {
      statuskepemilikansurattanah: "",
      statuskepemilikansurattanahlainnya: "",
      ijinyangdibutuhkan: "",
      ijinyangdibutuhkanlainnya: "",
      idpemiliklahan: "",
      kawasan: "",
      kawasanlainnya: "",
    },
    section10: {
      // ============ bagian a
      populasiorangkk: "",
      orang: "",
      kk: "",
      kepadatanpenduduk: "",
      distribusipenduduk: "",
      distribusipenduduklainnya: "",
      desaterdekat: "",
      namadesaterdekat: "",
      jarakbtsexistingterdekat: "",
      aksesdankondisijalan: "",
      fotoaksesdankondisijalan: {
        foto: "",
        extension_file: "",
      },
      kondisigeografis: "",
      latitude: "",
      longitude: "",
      transportasidesa: "",
      fototransportasidesa: {
        foto: "",
        extension_file: "",
      },
      potensidesa: "",
      fotopotensidesa: {
        foto: "",
        extension_file: "",
      },
      fotokondisigeografis: {
        foto: "",
        extension_file: "",
      },
      matapencaharian: "",
      jumlahpemilikhp: "",
      tipejenishp: [],
      jenissimcardoperator: [],
      wargayangdapatdilatihtentangpengoperasianperangkatdasartraining: "",
      rumahyangmemilikigensetsolarpanel: "",
      catatanlainnya: "",
      aksesinternetnonselular: "",
      catatanaksesnonselular: "",
      // ============ bagian b
      jumlahpenduduk: "",
      jumlahpendudukpria: "",
      jumlahpendudukwanita: "",
      umur20th: "",
      umur2130th: "",
      umur3140th: "",
      umur4150th: "",
      umur5160th: "",
      umur60th: "",
      tidaksekolah: "",
      sd: "",
      smp: "",
      smu: "",
      akademi: "",
      sarjana: "",
      empat4bidangpekerjaanutama: "",
      pengeluaranratarataperbulanrumahtangga: "",
      harapanpengeluaranpulsaperbulanrumahtangga: "",
      pasardesa: "",
      jarakpasardesa: "",
      pasarkota: "",
      jarakpasarkota: "",
      sekolah: "",
      jaraksekolah: "",
      industri: "",
      jarakindustri: "",
      koperasi: "",
      jarakkoperasi: "",
      puskesmasrsu: "",
      jarakpuskesmasrsu: "",
      dermaga: "",
      jarakdermaga: "",
      tambang: "",
      jaraktambang: "",
      perkebunan: "",
      jarakperkebunan: "",
      kiosvoucher: "",
      fotokiosvoucher: {
        foto: "",
        extension_file: "",
      },
      jarakkiosvoucher: "",
      bank: "",
      fotobank: {
        foto: "",
        extension_file: "",
      },
      jarakbank: "",
      kantorpos: "",
      fotokantorpos: {
        foto: "",
        extension_file: "",
      },
      jarakkantorpos: "",
      tokoritel: "",
      fototokoritel: {
        foto: "",
        extension_file: "",
      },
      jaraktokoritel: "",
      kioslistrik: "",
      fotokioslistrik: {
        foto: "",
        extension_file: "",
      },
      jarakkioslistrik: "",
      operator: "",
      fotooperator: {
        foto: "",
        extension_file: "",
      },
      jarakoperator: "",
      keterangantambahan: "",
    },
    section11: {
      foto: {
        foto: "",
        extension_file: "",
      },
      latitude: "",
      longitude: "",
      keterangan: "",
    },
    section12: {
      fotolayoutsite: {
        foto: "",
        extension_file: "",
      },
      latitudelayoutsite: "",
      longitudelayoutsite: "",
      deskripsilayoutsite: "",
      fototower: {
        foto: "",
        extension_file: "",
      },
      latitudetower: "",
      longitudetower: "",
      deskripsitower: "",
      fotodenahlokasiarea: {
        foto: "",
        extension_file: "",
      },
      latitudedenahlokasiarea: "",
      longitudedenahlokasiarea: "",
      deskripsidenahlokasiarea: "",
      towerkesourcepowerifany: "",
      towerkeantennavsat: "",
      towerkesolarpanel: "",
    },
    section13: {
      fotolahankandidat: {
        foto: "",
        extension_file: "",
      },
      latitudelahankandidat: "",
      longitudelahankandidat: "",
      keteranganlahankandidat: "",
      fotomarkinggps: {
        foto: "",
        extension_file: "",
      },
      latitudemarkinggps: "",
      longitudemarkinggps: "",
      keteranganmarkinggps: "",
    },
    section14: {
      photo0: {
        foto: "",
        extension_file: "",
      },
      distance0: "",
      obstacletype0: "",
      obstacleheight0: "",
      topography0: "",
      landscape0: "",
      landscape0lainnya: "",
      demography0: "",
      demography0lainnya: "",
      description0: "",
      photo45: {
        foto: "",
        extension_file: "",
      },
      distance45: "",
      obstacletype45: "",
      obstacleheight45: "",
      topography45: "",
      landscape45: "",
      landscape45lainnya: "",
      demography45: "",
      demography45lainnya: "",
      description45: "",
      photo90: {
        foto: "",
        extension_file: "",
      },
      distance90: "",
      obstacletype90: "",
      obstacleheight90: "",
      topography90: "",
      landscape90: "",
      landscape90lainnya: "",
      demography90: "",
      demography90lainnya: "",
      description90: "",
      photo135: {
        foto: "",
        extension_file: "",
      },
      distance135: "",
      obstacletype135: "",
      obstacleheight135: "",
      topography135: "",
      landscape135: "",
      landscape135lainnya: "",
      demography135: "",
      demography135lainnya: "",
      description135: "",
      photo180: {
        foto: "",
        extension_file: "",
      },
      distance180: "",
      obstacletype180: "",
      obstacleheight180: "",
      topography180: "",
      landscape180: "",
      landscape180lainnya: "",
      demography180: "",
      demography180lainnya: "",
      description180: "",
      photo225: {
        foto: "",
        extension_file: "",
      },
      distance225: "",
      obstacletype225: "",
      obstacleheight225: "",
      topography225: "",
      landscape225: "",
      landscape225lainnya: "",
      demography225: "",
      demography225lainnya: "",
      description225: "",
      photo270: {
        foto: "",
        extension_file: "",
      },
      distance270: "",
      obstacletype270: "",
      obstacleheight270: "",
      topography270: "",
      landscape270: "",
      landscape270lainnya: "",
      demography270: "",
      demography270lainnya: "",
      description270: "",
      photo315: {
        foto: "",
        extension_file: "",
      },
      distance315: "",
      obstacletype315: "",
      obstacleheight315: "",
      topography315: "",
      landscape315: "",
      landscape315lainnya: "",
      demography315: "",
      demography315lainnya: "",
      description315: "",
    },
    section15: {
      photo0: {
        foto: "",
        extension_file: "",
      },
      latitude0: "",
      longitude0: "",
      description0: "",
      photo30: {
        foto: "",
        extension_file: "",
      },
      latitude30: "",
      longitude30: "",
      description30: "",
      photo60: {
        foto: "",
        extension_file: "",
      },
      latitude60: "",
      longitude60: "",
      description60: "",
      photo90: {
        foto: "",
        extension_file: "",
      },
      latitude90: "",
      longitude90: "",
      description90: "",
      photo120: {
        foto: "",
        extension_file: "",
      },
      latitude120: "",
      longitude120: "",
      description120: "",
      photo150: {
        foto: "",
        extension_file: "",
      },
      latitude150: "",
      longitude150: "",
      description150: "",
      photo180: {
        foto: "",
        extension_file: "",
      },
      latitude180: "",
      longitude180: "",
      description180: "",
      photo210: {
        foto: "",
        extension_file: "",
      },
      latitude210: "",
      longitude210: "",
      description210: "",
      photo240: {
        foto: "",
        extension_file: "",
      },
      latitude240: "",
      longitude240: "",
      description240: "",
      photo270: {
        foto: "",
        extension_file: "",
      },
      latitude270: "",
      longitude270: "",
      description270: "",
      photo300: {
        foto: "",
        extension_file: "",
      },
      latitude300: "",
      longitude300: "",
      description300: "",
      photo330: {
        foto: "",
        extension_file: "",
      },
      latitude330: "",
      longitude330: "",
      description330: "",
    },
    section16: {
      photo0: {
        foto: "",
        extension_file: "",
      },
      latitude0: "",
      longitude0: "",
      description0: "",
      photo30: {
        foto: "",
        extension_file: "",
      },
      latitude30: "",
      longitude30: "",
      description30: "",
      photo60: {
        foto: "",
        extension_file: "",
      },
      latitude60: "",
      longitude60: "",
      description60: "",
      photo90: {
        foto: "",
        extension_file: "",
      },
      latitude90: "",
      longitude90: "",
      description90: "",
      photo120: {
        foto: "",
        extension_file: "",
      },
      latitude120: "",
      longitude120: "",
      description120: "",
      photo150: {
        foto: "",
        extension_file: "",
      },
      latitude150: "",
      longitude150: "",
      description150: "",
      photo180: {
        foto: "",
        extension_file: "",
      },
      latitude180: "",
      longitude180: "",
      description180: "",
      photo210: {
        foto: "",
        extension_file: "",
      },
      latitude210: "",
      longitude210: "",
      description210: "",
      photo240: {
        foto: "",
        extension_file: "",
      },
      latitude240: "",
      longitude240: "",
      description240: "",
      photo270: {
        foto: "",
        extension_file: "",
      },
      latitude270: "",
      longitude270: "",
      description270: "",
      photo300: {
        foto: "",
        extension_file: "",
      },
      latitude300: "",
      longitude300: "",
      description300: "",
      photo330: {
        foto: "",
        extension_file: "",
      },
      latitude330: "",
      longitude330: "",
      description330: "",
    },
    section17: {
      pilihanoperator: [],
      phototelkomsel: {
        foto: "",
        extension_file: "",
      },
      filekmltelkomsel: {
        foto: "",
        extension_file: "",
      },
      latitudetelkomsel: "",
      longitudetelkomsel: "",
      descriptiontelkomsel: "",
      photoindosat: {
        foto: "",
        extension_file: "",
      },
      filekmlindosat: {
        foto: "",
        extension_file: "",
      },
      latitudeindosat: "",
      longitudeindosat: "",
      descriptionindosat: "",
      photoxl: {
        foto: "",
        extension_file: "",
      },
      filekmlxl: {
        foto: "",
        extension_file: "",
      },
      latitudexl: "",
      longitudexl: "",
      descriptionxl: "",
      photonocoverage: {
        foto: "",
        extension_file: "",
      },
      filekmlnocoverage: {
        foto: "",
        extension_file: "",
      },
      latitudenocoverage: "",
      longitudenocoverage: "",
      descriptionnocoverage: "",
    },
    section18: {
      filelocationmapping: {
        foto: "",
        extension_file: "",
      },
      fotolocationmapping: {
        foto: "",
        extension_file: "",
      },
      latitudelocationmapping: "",
      longitudelocationmapping: "",
      deskripsilocationmapping: "",
      latitudekandidat1: "",
      longitudekandidat1: "",
      elevasikandidat1: "",
      latitudekandidat2: "",
      longitudekandidat2: "",
      elevasikandidat2: "",
    },
    section19: {
      jumlahinput: "",
      penggunapotensial: [1],
      photo1: {
        foto: "",
        extension_file: "",
      },
      photo2: {
        foto: "",
        extension_file: "",
      },
      photo3: {
        foto: "",
        extension_file: "",
      },
      photo4: {
        foto: "",
        extension_file: "",
      },
      photo5: {
        foto: "",
        extension_file: "",
      },
      photo6: {
        foto: "",
        extension_file: "",
      },
      photo7: {
        foto: "",
        extension_file: "",
      },
      photo8: {
        foto: "",
        extension_file: "",
      },
      photo9: {
        foto: "",
        extension_file: "",
      },
      photo10: {
        foto: "",
        extension_file: "",
      },
      photo11: {
        foto: "",
        extension_file: "",
      },
      photo12: {
        foto: "",
        extension_file: "",
      },
      photo13: {
        foto: "",
        extension_file: "",
      },
      photo14: {
        foto: "",
        extension_file: "",
      },
      photo15: {
        foto: "",
        extension_file: "",
      },
      latitude1: "",
      latitude2: "",
      latitude3: "",
      latitude4: "",
      latitude5: "",
      latitude6: "",
      latitude7: "",
      latitude8: "",
      latitude9: "",
      latitude10: "",
      latitude11: "",
      latitude12: "",
      latitude13: "",
      latitude14: "",
      latitude15: "",
      longitude1: "",
      longitude2: "",
      longitude3: "",
      longitude4: "",
      longitude5: "",
      longitude6: "",
      longitude7: "",
      longitude8: "",
      longitude9: "",
      longitude10: "",
      longitude11: "",
      longitude12: "",
      longitude13: "",
      longitude14: "",
      longitude15: "",
      description1: "",
      description2: "",
      description3: "",
      description4: "",
      description5: "",
      description6: "",
      description7: "",
      description8: "",
      description9: "",
      description10: "",
      description11: "",
      description12: "",
      description13: "",
      description14: "",
      description15: "",
      degree1: "",
      degree2: "",
      degree3: "",
      degree4: "",
      degree5: "",
      degree6: "",
      degree7: "",
      degree8: "",
      degree9: "",
      degree10: "",
      degree11: "",
      degree12: "",
      degree13: "",
      degree14: "",
      degree15: "",
      distance1: "",
      distance2: "",
      distance3: "",
      distance4: "",
      distance5: "",
      distance6: "",
      distance7: "",
      distance8: "",
      distance9: "",
      distance10: "",
      distance11: "",
      distance12: "",
      distance13: "",
      distance14: "",
      distance15: "",
    },
    section20: {
      photoaksessite1: {
        foto: "",
        extension_file: "",
      },
      photoaksessite2: {
        foto: "",
        extension_file: "",
      },
      photoaksessite3: {
        foto: "",
        extension_file: "",
      },
      photoaksessite4: {
        foto: "",
        extension_file: "",
      },
      latitudeaksessite1: "",
      latitudeaksessite2: "",
      latitudeaksessite3: "",
      latitudeaksessite4: "",
      longitudeaksessite1: "",
      longitudeaksessite2: "",
      longitudeaksessite3: "",
      longitudeaksessite4: "",
      deskripsiaksessite1: "",
      deskripsiaksessite2: "",
      deskripsiaksessite3: "",
      deskripsiaksessite4: "",
    },
    section21: {
      generalcomment: "",
      generalcommentraw: "",
      generalcommenthtml: "",
    },
    section22: {
      pelaksanasurvey: "",
      nomortelepon: "",
      email: "",
      tanggalkunjungan: "",
      siteaidmapnearend: "",
      sitebidfarend: "",
      frequency: "",
      frequencylainnya: "",
      tipekonfigurasi: "",
      konfigurasi: "",
      konfigurasilainnya: "",
      kapasitas: "",
      ukuranantmain: "",
      ukuranantmainlainnya: "",
      ukuranantsd: "",
      siteaantennasupport: "",
      sitebantennasupport: "",
      petadigital: "",
      kandidatsitea: "",
      kandidatsiteb: "",
      pathlength: "",
      siteaazimuth: "",
      sidebazimuth: "",
      siteaelevasi: "",
      sitebelevasi: "",
      siteasudutvertical: "",
      sitebsudutvertical: "",
      siteatinggiantenna: "",
      siteatinggiantennasd: "",
      sitebtinggiantenna: "",
      sitebtinggiantennasd: "",
    },
    section23: {
      photopathprofile: {
        foto: "",
        extension_file: "",
      },
      photodesktopcontour: {
        foto: "",
        extension_file: "",
      },
      latitudepathprofile: "",
      latitudedesktopcontour: "",
      longitudepathprofile: "",
      longitudedesktopcontour: "",
      deskripsipathprofile: "",
      deskripsidesktopcontour: "",
    },
    section24: {
      sitealatitudeddformat: "",
      sitealongitudeddformat: "",
      siteblatitudeddformat: "",
      siteblongitudeddformat: "",
      siteatipetower: "",
      siteatipetowerlainnya: "",
      siteatinggitower: "",
      sitebtipetower: "",
      sitebtipetowerlainnya: "",
      sitebtinggitower: "",
      rataratatinggipohon: "",
      siteaproposedtinggiminantennamain: "",
      siteaproposedtinggiminantennasd: "",
      sitebproposedtinggiminantennamain: "",
      sitebproposedtinggiminantennasd: "",
      kesimpulanhasildarisurveylos: "",
    },
    section25: {
      photogpssitea: {
        foto: "",
        extension_file: "",
      },
      photogpssiteb: {
        foto: "",
        extension_file: "",
      },
      latitudegpssitea: "",
      latitudegpssiteb: "",
      longitudegpssitea: "",
      longitudegpssiteb: "",
      deskripsigpssitea: "",
      deskripsigpssiteb: "",
    },
    section26: {
      photo: {
        foto: "",
        extension_file: "",
      },
      latitude: "",
      longitude: "",
      deskripsi: "",
    },
    section27: {
      photo: {
        foto: "",
        extension_file: "",
      },
      latitude: "",
      longitude: "",
      deskripsi: "",
    },
    section28: {
      photo0: {
        foto: "",
        extension_file: "",
      },
      latitude0: "",
      longitude0: "",
      description0: "",
      photo30: {
        foto: "",
        extension_file: "",
      },
      latitude30: "",
      longitude30: "",
      description30: "",
      photo60: {
        foto: "",
        extension_file: "",
      },
      latitude60: "",
      longitude60: "",
      description60: "",
      photo90: {
        foto: "",
        extension_file: "",
      },
      latitude90: "",
      longitude90: "",
      description90: "",
      photo120: {
        foto: "",
        extension_file: "",
      },
      latitude120: "",
      longitude120: "",
      description120: "",
      photo150: {
        foto: "",
        extension_file: "",
      },
      latitude150: "",
      longitude150: "",
      description150: "",
      photo180: {
        foto: "",
        extension_file: "",
      },
      latitude180: "",
      longitude180: "",
      description180: "",
      photo210: {
        foto: "",
        extension_file: "",
      },
      latitude210: "",
      longitude210: "",
      description210: "",
      photo240: {
        foto: "",
        extension_file: "",
      },
      latitude240: "",
      longitude240: "",
      description240: "",
      photo270: {
        foto: "",
        extension_file: "",
      },
      latitude270: "",
      longitude270: "",
      description270: "",
      photo300: {
        foto: "",
        extension_file: "",
      },
      latitude300: "",
      longitude300: "",
      description300: "",
      photo330: {
        foto: "",
        extension_file: "",
      },
      latitude330: "",
      longitude330: "",
      description330: "",
    },
    section29: {
      photo: {
        foto: "",
        extension_file: "",
      },
      latitude: "",
      longitude: "",
      deskripsi: "",
    },
    section30: {
      photo: {
        foto: "",
        extension_file: "",
      },
      latitude: "",
      longitude: "",
      deskripsi: "",
    },
    section31: {
      photo0: {
        foto: "",
        extension_file: "",
      },
      latitude0: "",
      longitude0: "",
      description0: "",
      photo30: {
        foto: "",
        extension_file: "",
      },
      latitude30: "",
      longitude30: "",
      description30: "",
      photo60: {
        foto: "",
        extension_file: "",
      },
      latitude60: "",
      longitude60: "",
      description60: "",
      photo90: {
        foto: "",
        extension_file: "",
      },
      latitude90: "",
      longitude90: "",
      description90: "",
      photo120: {
        foto: "",
        extension_file: "",
      },
      latitude120: "",
      longitude120: "",
      description120: "",
      photo150: {
        foto: "",
        extension_file: "",
      },
      latitude150: "",
      longitude150: "",
      description150: "",
      photo180: {
        foto: "",
        extension_file: "",
      },
      latitude180: "",
      longitude180: "",
      description180: "",
      photo210: {
        foto: "",
        extension_file: "",
      },
      latitude210: "",
      longitude210: "",
      description210: "",
      photo240: {
        foto: "",
        extension_file: "",
      },
      latitude240: "",
      longitude240: "",
      description240: "",
      photo270: {
        foto: "",
        extension_file: "",
      },
      latitude270: "",
      longitude270: "",
      description270: "",
      photo300: {
        foto: "",
        extension_file: "",
      },
      latitude300: "",
      longitude300: "",
      description300: "",
      photo330: {
        foto: "",
        extension_file: "",
      },
      latitude330: "",
      longitude330: "",
      description330: "",
    },
    section32: {
      dari: "",
      ke: "",
      azimuth: "",
      gambardiambildarisiteakesitebtanpazoom: {
        foto: "",
        extension_file: "",
      },
      gambardiambildarisiteakesitebdenganzoom: {
        foto: "",
        extension_file: "",
      },
      gambardiambildarisitebkesiteatanpazoom: {
        foto: "",
        extension_file: "",
      },
      gambardiambildarisitebkesiteadenganzoom: {
        foto: "",
        extension_file: "",
      },
      latitudeakebtanpazoom: "",
      latitudeakebdenganzoom: "",
      latitudebkeatanpazoom: "",
      latitudebkeadenganzoom: "",
      longitudeakebtanpazoom: "",
      longitudeakebdenganzoom: "",
      longitudebkeatanpazoom: "",
      longitudebkeadenganzoom: "",
    },
    section33: {
      pathprofile: {
        foto: "",
        extension_file: "",
      },
      latitude: "",
      longitude: "",
      keterangan: "",
    },
    section34: {
      petalokasikeseluruhanglobalmap: {
        foto: "",
        extension_file: "",
      },
      latitude: "",
      longitude: "",
      filekmlpetalokasi: "",
    },
    section35: {
      screencapture: {
        foto: "",
        extension_file: "",
      },
    },
    section36: {
      pelaksanasurvey: "",
      nomortelepon: "",
      email: "",
      tanggalkunjungan: "",
      siteinfopoi: "",
      alamatpoi: "",
      kontakpoi: "",
      nomorteleponpoi: "",
      alamatkontakpoi: "",
      sitetypehub: "",
      sitetypehublainnya: "",
      sitehub: "",
      siteinfohub: "",
      alamathub: "",
      kontakhub: "",
      nomorteleponsto: "",
      alamatkontaksto: "",
    },
    section37: {
      jarakrute: "",
      rekomendasitipekonstruksi: "",
      ruteinformasilokasi: "",
      kodepos: "",
    },
    section38: {
      lokasihhpole: [],
    },
    section39: {
      jumlahpoleexisting: "",
      jumlahhhmhexisting: "",
      jumlahpolebaru: "",
      jumlahhhmhbaru: "",
    },
    section40: {
      existingterminationbox: "",
      existingavailableport: "",
      needaddnewterminationbox: "",
    },
    section41: {
      fototitikterminasidipoi: {
        foto: "",
        extension_file: "",
      },
      latitude: "",
      longitude: "",
      keterangan: "",
    },
    section42: {
      catatan: "",
      catatanraw: "",
      catatanhtml: "",
    },
    section43: {
      rutefiberoptikdigooglemap: {
        foto: "",
        extension_file: "",
      },
    },
    section44: {
      asplandrawing: {
        foto: "",
        extension_file: "",
      },
    },
    // Avidence
    section46: {
      jumlahinput: "",
      evidence: [1],
      photo1: {
        foto: "",
        extension_file: "",
      },
      photo2: {
        foto: "",
        extension_file: "",
      },
      photo3: {
        foto: "",
        extension_file: "",
      },
      photo4: {
        foto: "",
        extension_file: "",
      },
      photo5: {
        foto: "",
        extension_file: "",
      },
      photo6: {
        foto: "",
        extension_file: "",
      },
      photo7: {
        foto: "",
        extension_file: "",
      },
      photo8: {
        foto: "",
        extension_file: "",
      },
      photo9: {
        foto: "",
        extension_file: "",
      },
      photo10: {
        foto: "",
        extension_file: "",
      },
      photo11: {
        foto: "",
        extension_file: "",
      },
      photo12: {
        foto: "",
        extension_file: "",
      },
      photo13: {
        foto: "",
        extension_file: "",
      },
      photo14: {
        foto: "",
        extension_file: "",
      },
      photo15: {
        foto: "",
        extension_file: "",
      },
      description1: "",
      description2: "",
      description3: "",
      description4: "",
      description5: "",
      description6: "",
      description7: "",
      description8: "",
      description9: "",
      description10: "",
      description11: "",
      description12: "",
      description13: "",
      description14: "",
      description15: "",
    },
    // CME
    section47: {
      kondisitanah1: {
        foto: "",
        extension_file: "",
      },
      kondisitanah2: {
        foto: "",
        extension_file: "",
      },
      kondisitanah3: {
        foto: "",
        extension_file: "",
      },
      kondisitanah4: {
        foto: "",
        extension_file: "",
      },
      keterangankondisitanah1: "",
      latitudekondisitanah1: "",
      longitudekondisitanah1: "",
      keterangankondisitanah2: "",
      latitudekondisitanah2: "",
      longitudekondisitanah2: "",
      keterangankondisitanah3: "",
      latitudekondisitanah3: "",
      longitudekondisitanah3: "",
      keterangankondisitanah4: "",
      latitudekondisitanah4: "",
      longitudekondisitanah4: "",
      fotokecepatanangin1: {
        foto: "",
        extension_file: "",
      },
      fotokecepatanangin2: {
        foto: "",
        extension_file: "",
      },
      kecepatanangin1: "",
      keterangankecepatanangin1: "",
      latitudekecepatanangin1: "",
      longitudekecepatanangin1: "",
      kecepatanangin2: "",
      keterangankecepatanangin2: "",
      latitudekecepatanangin2: "",
      longitudekecepatanangin2: "",
      fotokemiringanlahan1: {
        foto: "",
        extension_file: "",
      },
      fotokemiringanlahan2: {
        foto: "",
        extension_file: "",
      },
      fotokemiringanlahan3: {
        foto: "",
        extension_file: "",
      },
      fotokemiringanlahan4: {
        foto: "",
        extension_file: "",
      },
      kemiringanlahan1: "",
      keterangankemiringanlahan1: "",
      latitudekemiringanlahan1: "",
      longitudekemiringanlahan1: "",
      kemiringanlahan2: "",
      keterangankemiringanlahan2: "",
      latitudekemiringanlahan2: "",
      longitudekemiringanlahan2: "",
      kemiringanlahan3: "",
      keterangankemiringanlahan3: "",
      latitudekemiringanlahan3: "",
      longitudekemiringanlahan3: "",
      kemiringanlahan4: "",
      keterangankemiringanlahan4: "",
      latitudekemiringanlahan4: "",
      longitudekemiringanlahan4: "",
      fotoairterdekat1: {
        foto: "",
        extension_file: "",
      },
      fotoairterdekat2: {
        foto: "",
        extension_file: "",
      },
      jarakkeairterdekat1: "",
      keteranganairterdekat1: "",
      latitudejarakkeairterdekat1: "",
      longitudejarakkeairterdekat1: "",
      jarakkeairterdekat2: "",
      keteranganairterdekat2: "",
      latitudejarakkeairterdekat2: "",
      longitudejarakkeairterdekat2: "",
      bedatinggidenganpermukaanairterdekat1: "",
      bedatinggidenganpermukaanairterdekat2: "",
      phtanah: "",
      kelembabantanah: "",
      fototandapotensibanjir1: {
        foto: "",
        extension_file: "",
      },
      fototandapotensibanjir2: {
        foto: "",
        extension_file: "",
      },
      tandapotensibanjir1: "",
      keterangantandapotensibanjir1: "",
      latitudetandapotensibanjir1: "",
      longitudetandapotensibanjir1: "",
      tandapotensibanjir2: "",
      keterangantandapotensibanjir2: "",
      latitudetandapotensibanjir2: "",
      longitudetandapotensibanjir2: "",
      nilaitahanantanah: "",
    },
  },
};

export const formbtsSlice = createSlice({
  name: "formbts",
  initialState,
  reducers: {
    setBtsMain: (state, action) => ({
      ...state,
      btsMain: action.payload,
    }),
  },
});

export const { setBtsMain } = formbtsSlice.actions;
export default formbtsSlice.reducer;
