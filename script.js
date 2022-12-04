let kursAdi = "Komple Uygulamalı Web Geliştirme Eğitimi.";

let sonuc;

sonuc = kursAdi.toLowerCase(); //küçük harf
sonuc = kursAdi.toUpperCase(); //Büyük harf
sonuc = kursAdi.length; //harf sayısı
sonuc = kursAdi[1]; //ikinci harf( 0 dan başlar)
sonuc = kursAdi.slice(0, 6); // 0 dan başla 6 dahil olmadan al yani 6 harf alır
sonuc = kursAdi.slice(10); // 10 dan sonrası
sonuc = kursAdi.slice(-10); // sondan sayar
sonuc = kursAdi.slice(-10, -5); // sondan aralıklı

sonuc = kursAdi.substring(0, 6); // slice ile aynı
sonuc = kursAdi.substring(10);

sonuc = kursAdi.replace("Eğitimi", "Kursu"); //bulur ve ikinci yazı değitirir
sonuc = kursAdi.trim(); //sağ sol bütün boşluk sil
sonuc = kursAdi.trimEnd(); //sondaki boşlu sil
sonuc = kursAdi.trimStart(); //baştaki boşluğu sil

sonuc = kursAdi.indexOf("Komple"); // arar ve rakamını verir
sonuc = kursAdi.split(" "); // kelimeler böler ve dizi olarak getirir
sonuc = kursAdi.split(" ")[0]; // birinci diziye git
sonuc = kursAdi.split(" ")[3]; //dördüncü diziye git

console.log(sonuc);
