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
        withValue={null}
        withLabel={null}
        section="1"
        valueToBeSet="tipe"
        defaultValue={btsMain?.section1?.tipe}
      />
      <label>Tipe Antenna</label>
      <Dropdown
        className="w-full"
        options={["Omni", "Sectoral"]}
        withValue={null}
        withLabel={null}
        section="2"
        valueToBeSet="tipeantenna"
        defaultValue={btsMain?.section2?.tipeantenna}
      />
      <label>Status Site</label>
      <Dropdown
        className="w-full"
        options={["Ok", "Ada Sinyal"]}
        withValue={null}
        withLabel={null}
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
        withValue={null}
        withLabel={null}
        section="2"
        valueToBeSet="tipesite"
        defaultValue={btsMain?.section1?.tipesite}
      />
      <label>Akses ke Lokasi Site</label>
      <Dropdown
        className="w-full"
        options={["Akses Darat", "Akses Laut", "Akses Udara", "Lainnya"]}
        withValue={null}
        withLabel={null}
        section="2"
        valueToBeSet="akseskelokasisite"
        defaultValue={btsMain?.section1?.akseskelokasisite}
      />
      <label>Waktu Perjalanan</label>
      <Dropdown
        className="w-full"
        options={["24 Jam", "Waktu Kerja", "Jadwal Kapal"]}
        withValue={null}
        withLabel={null}
        section="2"
        valueToBeSet="waktuperjalanan"
        defaultValue={btsMain?.section1?.waktuperjalanan}
      />
      <label>Ijin ke Lokasi</label>
      <Dropdown
        className="w-full"
        options={["Iya", "Tidak"]}
        withValue={null}
        withLabel={null}
        section="2"
        valueToBeSet="ijinkelokasi"
        defaultValue={btsMain?.section1?.ijinkelokasi}
      />
      <label>Kondisi Gudang Penyimpanan</label>
      <Dropdown
        className="w-full"
        options={["Terkunci Security 24 Jam", "Ruang Terbuka", "Lainnya"]}
        withValue={null}
        withLabel={null}
        section="2"
        valueToBeSet="kondisigudangpenyimpanan"
        defaultValue={btsMain?.section1?.kondisigudangpenyimpanan}
      />
      <label>Tipe Antenna</label>
      <Dropdown
        className="w-full"
        options={["Omni", "Sectoral"]}
        withValue={null}
        withLabel={null}
        section="2"
        valueToBeSet="tipeantenna"
        defaultValue={btsMain?.section2?.tipeantenna}
      />

      <label>Tinggi Tower / Pole</label>
      <Dropdown
        className="w-full"
        options={[
          "18 meter",
          "32 meter",
          "42 meter",
          "52 meter",
          "62 meter",
          "72 meter",
          "Lainnya",
        ]}
        withValue={null}
        withLabel={null}
        section="3"
        valueToBeSet="tinggitowerpole"
        defaultValue={btsMain?.section3?.tinggitowerpole}
      />
      <label>Tipe Tower</label>
      <Dropdown
        className="w-full"
        options={[
          "Guyed Mast",
          "Guyed Mast Tubular",
          "Self Supporting Tower (Heavy)",
          "Self Supporting Tower (Medium)",
          "Self Supporting Tower (Light)",
          "Lainnya",
        ]}
        withValue={null}
        withLabel={null}
        section="3"
        valueToBeSet="tipetower"
        defaultValue={btsMain?.section3?.tipetower}
      />
      <label>Menggunakan Transmisi VSAT</label>
      <Dropdown
        className="w-full"
        options={["Ya", "Tidak"]}
        withValue={null}
        withLabel={null}
        section="4"
        valueToBeSet="menggunakantransmisivsat"
        defaultValue={btsMain?.section4?.menggunakantransmisivsat}
      />
      <label>Posisi Tower / Pole</label>
      <Dropdown
        className="w-full"
        options={[
          "Di Permukiman",
          "Jarak dari Permukiman 100 meter (max 600 meter)",
        ]}
        withValue={null}
        withLabel={null}
        section="5"
        valueToBeSet="posisitowerpole"
      />
      <label>Status Kepemilikan Lahan</label>
      <Dropdown
        className="w-full"
        options={[
          "Pemerintah",
          "Individu/Perusahaan",
          "Hutan Lindung",
          "Tanah Adat",
          "Kawasan Konservasi",
          "Hutan Produksi",
          "Lainnya",
        ]}
        withValue={null}
        withLabel={null}
        section="5"
        valueToBeSet="statuskepemilikanlahan"
      />
      <label>Jumlah Pemilik Lahan</label>
      <Dropdown
        className="w-full"
        options={["1", "2"]}
        withValue={null}
        withLabel={null}
        section="5"
        valueToBeSet="jumlahpemiliklahan"
      />
      <label>Status Kondisi Lahan</label>
      <Dropdown
        className="w-full"
        options={["Kosong", "Rumah", "Lainnya"]}
        withValue={null}
        withLabel={null}
        section="5"
        valueToBeSet="statuskondisilahan"
      />
      <label>Kondisi Sosial</label>
      <Dropdown
        className="w-full"
        options={["Kooperatif", "Kurang Kooperatif", "Tidak Kooperatif"]}
        withValue={null}
        withLabel={null}
        section="5"
        valueToBeSet="kondisisosial"
      />
      <label>Keamanan</label>
      <Dropdown
        className="w-full"
        options={["Aman", "Tidak Aman"]}
        withValue={null}
        withLabel={null}
        section="5"
        valueToBeSet="keamanan"
      />
      <label>A. Telkomsel</label>
      <br />
      <label>{`Ketersediaan Coverage dalam Radius <2km dari Site`}</label>
      <Dropdown
        className="w-full"
        options={["Ada", "Tidak Ada"]}
        withValue={null}
        withLabel={null}
        section="6"
        valueToBeSet="ketersediaancoveragedalamradius2kmdarisitetelkomsel"
      />
      <label>{`Call di Site`}</label>
      <Dropdown
        className="w-full"
        options={["Mudah (5x test)", "Gagal"]}
        withValue={null}
        withLabel={null}
        section="6"
        valueToBeSet="calldisitetelkomsel"
      />
      <label>{`SMS di Site`}</label>
      <Dropdown
        className="w-full"
        options={["Mudah (5x test)", "Gagal"]}
        withValue={null}
        withLabel={null}
        section="6"
        valueToBeSet="smsdisitetelkomsel"
      />
      <label>B. Indosat</label>
      <br />
      <label>{`Ketersediaan Coverage dalam Radius <2km dari Site`}</label>
      <Dropdown
        className="w-full"
        options={["Ada", "Tidak Ada"]}
        withValue={null}
        withLabel={null}
        section="6"
        valueToBeSet="ketersediaancoveragedalamradius2kmdarisiteindosat"
      />
      <label>{`Call di Site`}</label>
      <Dropdown
        className="w-full"
        options={["Mudah (5x test)", "Gagal"]}
        withValue={null}
        withLabel={null}
        section="6"
        valueToBeSet="calldisiteindosat"
      />
      <label>{`SMS di Site`}</label>
      <Dropdown
        className="w-full"
        options={["Mudah (5x test)", "Gagal"]}
        withValue={null}
        withLabel={null}
        section="6"
        valueToBeSet="smsdisiteindosat"
      />
      <label>C. XL</label>
      <br />
      <label>{`Ketersediaan Coverage dalam Radius <2km dari Site`}</label>
      <Dropdown
        className="w-full"
        options={["Ada", "Tidak Ada"]}
        withValue={null}
        withLabel={null}
        section="6"
        valueToBeSet="ketersediaancoveragedalamradius2kmdarisitexl"
      />
      <label>{`Call di Site`}</label>
      <Dropdown
        className="w-full"
        options={["Mudah (5x test)", "Gagal"]}
        withValue={null}
        withLabel={null}
        section="6"
        valueToBeSet="calldisitexl"
      />
      <label>{`SMS di Site`}</label>
      <Dropdown
        className="w-full"
        options={["Mudah (5x test)", "Gagal"]}
        withValue={null}
        withLabel={null}
        section="6"
        valueToBeSet="smsdisitexl"
      />
      <label>{`Sumber Air Bersih Terdekat`}</label>
      <Dropdown
        className="w-full"
        options={["Ya", "Tidak"]}
        withValue={null}
        withLabel={null}
        section="7"
        valueToBeSet="sumberairbersihterdekat"
      />
      <label>{`Resiko Relokasi`}</label>
      <Dropdown
        className="w-full"
        options={["Ya", "Tidak"]}
        withValue={null}
        withLabel={null}
        section="7"
        valueToBeSet="resikorelokasi"
      />
      <label>{`Resiko Komplain`}</label>
      <Dropdown
        className="w-full"
        options={["Ya", "Tidak"]}
        withValue={null}
        withLabel={null}
        section="7"
        valueToBeSet="resikokomplain"
      />
      <label>{`Pengelola Sumber Listrik`}</label>
      <Dropdown
        className="w-full"
        options={["PLN", "PEMDA", "Swadaya", "Tidak Ada Sumber Listrik"]}
        withValue={null}
        withLabel={null}
        section="8"
        valueToBeSet="pengelolasumberlistrik"
      />
      <label>{`Jenis Sumber Listrik`}</label>
      <Dropdown
        className="w-full"
        options={[
          "PLN",
          "Genset",
          "Micro/Mini Hydro",
          "Grid Skala Besar",
          "Lainnya",
        ]}
        withValue={null}
        withLabel={null}
        section="8"
        valueToBeSet="jenissumberlistrik"
      />
      <label>{`Phase Listrik`}</label>
      <Dropdown
        className="w-full"
        options={["1", "3"]}
        withValue={null}
        withLabel={null}
        section="8"
        valueToBeSet="phaselistrik"
      />
      <label>{`Durasi Operasi Sumber Listrik (Dalam satuan Jam)`}</label>
      <Dropdown
        className="w-full"
        options={[
          "1 jam",
          "2 jam",
          "3 jam",
          "4 jam",
          "5 jam",
          "6 jam",
          "7 jam",
          "8 jam",
          "9 jam",
          "10 jam",
          "11 jam",
          "12 jam",
          "13 jam",
          "14 jam",
          "15 jam",
          "16 jam",
          "17 jam",
          "18 jam",
          "19 jam",
          "20 jam",
          "21 jam",
          "22 jam",
          "23 jam",
          "24 jam",
        ]}
        withValue={null}
        withLabel={null}
        section="8"
        valueToBeSet="durasioperasisumberlistrik"
      />
      <label>{`Listrik Bisa Dipakai Untuk Perangkat`}</label>
      <Dropdown
        className="w-full"
        options={["Ya", "Tidak"]}
        withValue={null}
        withLabel={null}
        section="8"
        valueToBeSet="listrikbisadipakaiuntukperangkat"
      />
      <label>{`Kategori Grid`}</label>
      <Dropdown
        className="w-full"
        options={["Strong Grid", "Poor Grid", "Off Grid"]}
        withValue={null}
        withLabel={null}
        section="8"
        valueToBeSet="kategorigrid"
      />
      <label>{`Pasokan BBM`}</label>
      <Dropdown
        className="w-full"
        options={["Mudah", "Sulit"]}
        withValue={null}
        withLabel={null}
        section="8"
        valueToBeSet="pasokanbbm"
      />
      <label>{`Jenis BBM yang Sering Tersedia`}</label>
      <Dropdown
        className="w-full"
        options={["Bensin", "Solar", "Lainnya"]}
        withValue={null}
        withLabel={null}
        section="8"
        valueToBeSet="jenisbbmyangseringtersedia"
      />
      <label>{`Bayangan Objek Menutupi Area Modul Surya`}</label>
      <Dropdown
        className="w-full"
        options={["Ya", "Tidak"]}
        withValue={null}
        withLabel={null}
        section="8"
        valueToBeSet="bayanganobjekmenutupiareamodulsurya"
      />
      <label>{`Posisi Lintang Lokasi`}</label>
      <Dropdown
        className="w-full"
        options={["Lintang Utara", "Lintang Selatan"]}
        withValue={null}
        withLabel={null}
        section="8"
        valueToBeSet="posisilintanglokasi"
      />
      <label>{`Orientasi Kemiringan Panel Surya Yang Optimal`}</label>
      <Dropdown
        className="w-full"
        options={["Utara", "Selatan"]}
        withValue={null}
        withLabel={null}
        section="8"
        valueToBeSet="orientasikemiringanpanelsuryayangoptimal"
      />
      <label>{`Status Kepemilikan Surat Tanah`}</label>
      <Dropdown
        className="w-full"
        options={["SHM", "Girik/Persil", "Lainnya"]}
        withValue={null}
        withLabel={null}
        section="9"
        valueToBeSet="statuskepemilikansurattanah"
      />
      <label>{`Status Kepemilikan Surat Tanah Lainnya`}</label>
      <Dropdown
        className="w-full"
        options={["Tanah Adat", "Tanah Hibah", "Belum Ada"]}
        withValue={null}
        withLabel={null}
        section="9"
        valueToBeSet="statuskepemilikansurattanahlainnya"
      />
      <label>{`Ijin yang Dibutuhkan`}</label>
      <Dropdown
        className="w-full"
        options={[
          "Ijin Warga",
          "Ijin Prinsip",
          "Khusus (Lingkungan)",
          "Lainnya",
        ]}
        withValue={null}
        withLabel={null}
        section="9"
        valueToBeSet="ijinyangdibutuhkan"
      />
      <label>{`Ijin yang Dibutuhkan Lainnya`}</label>
      <Dropdown
        className="w-full"
        options={["INI", "Negara"]}
        withValue={null}
        withLabel={null}
        section="9"
        valueToBeSet="ijinyangdibutuhkanlainnya"
      />
      <label>{`ID Pemilik Lahan`}</label>
      <Dropdown
        className="w-full"
        options={["KTP", "Passport", "KTA (TNI / State)"]}
        withValue={null}
        withLabel={null}
        section="9"
        valueToBeSet="idpemiliklahan"
      />
      <label>{`Kawasan`}</label>
      <Dropdown
        className="w-full"
        options={["Area Peruntukkan Lain (APL)", "Hutan", "Lainnya"]}
        withValue={null}
        withLabel={null}
        section="9"
        valueToBeSet="kawasan"
      />
      <label>{`Distribusi Penduduk`}</label>
      <Dropdown
        className="w-full"
        options={["Terpisah", "Cenderung Berkumpul", "Lainnya"]}
        withValue={null}
        withLabel={null}
        section="10"
        valueToBeSet="distribusipenduduk"
      />
      <label>{`Warga yang dapat dilatih tentang pengoperasian perangkat dasar / Training`}</label>
      <Dropdown
        className="w-full"
        options={["Ada", "Tidak Ada"]}
        withValue={null}
        withLabel={null}
        section="10"
        valueToBeSet="wargayangdapatdilatihtentangpengoperasianperangkatdasartraining"
      />
      <label>{`Akses Internet Non Selular`}</label>
      <Dropdown
        className="w-full"
        options={["Ada", "Tidak Ada"]}
        withValue={null}
        withLabel={null}
        section="10"
        valueToBeSet="aksesinternetnonselular"
      />
      <label>{`Frequency`}</label>
      <Dropdown
        className="w-full"
        options={["6G", "7G", "8G", "11G", "13G", "15G", "23G", "Lainnya"]}
        withValue={null}
        withLabel={null}
        section="22"
        valueToBeSet="frequency"
      />
      <label>{`Konfigurasi`}</label>
      <Dropdown
        className="w-full"
        options={[
          "1+0",
          "2+0",
          "3+0",
          "4+0",
          "5+0",
          "6+0",
          "7+0",
          "8+0",
          "Lainnya",
        ]}
        withValue={null}
        withLabel={null}
        section="22"
        valueToBeSet="konfigurasi"
      />
      <label>{`Tipe Konfigurasi`}</label>
      <Dropdown
        className="w-full"
        options={[
          "1+0",
          "2+0",
          "3+0",
          "4+0",
          "5+0",
          "6+0",
          "7+0",
          "8+0",
          "Lainnya",
        ]}
        withValue={null}
        withLabel={null}
        section="22"
        valueToBeSet="tipekonfigurasi"
      />
      <Dropdown
        className="w-full"
        options={["0.3", "0.6", "0.9", "1.2", "1.8", "2.4", "Lainnya"]}
        withValue={null}
        withLabel={null}
        section="22"
        valueToBeSet="tipekonfigurasi"
      />
    </div>
  );
};

export default Cover;
