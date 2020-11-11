import React from "react";
import {cekTahuan, cekHari} from '../utils/waktu';

const Hello = () =>{
    return(
    <>
      <p>Hallo Selamat Datang di Kelas Web progamming</p>
    <p>Tahun Sekarang adalah {cekTahuan()}</p>
    <p>Tahun Sekarang adalah {cekHari()}</p>
    </>
    );
}

export default Hello;