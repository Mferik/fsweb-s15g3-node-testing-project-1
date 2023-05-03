/**
 * [Görev 1] nesneyiTrimle bir nesne alır ve proplarını trimler (trim; bir stringin başında ve sonunda bulunan boşlukları(whitespaces) temizlemek)
 * @param {object} obj - propları string olan bir nesne
 * @returns {object} - stringleri trimlenmiş bir nesne döndürür
 *
 * ÖRNEK
 * nesneyiTrimle({ isim: '  jane  ' }) // yeni bir nesne döndürür { name: 'jane' }
 */
function nesneyiTrimle(obj) {
  // ✨ kodlar buraya

  for (let prop in obj) {
    if (typeof obj[prop] === "string") {
      obj[prop] = obj[prop].trim();
    }
  }
  return obj;
}

/**
 * [Görev 2] verileniTrimle propları string olan bir nesne alır ve gönderilen propu trimler.
 * @param {object} obj - propları string olan bir nesne
 * @returns {object} - istenilen propu trimlenmiş nesneyi döndürür
 *
 * ÖRNEK
 * verileniTrimle({ isim: '  jane  ' , yas: ' 34 '}, 'isim') // şunu döndürür { isim: 'jane', yas: ' 34 '}
 */
function verileniTrimle(obj, prop) {
  // ✨ kodlar buraya
  if (typeof obj[prop] === "string") {
    obj[prop] = obj[prop].trim();
  }
  return obj;
}

/**
 * [Görev 3] enBuyukTamsayiyiBul bir dizi nesne içinde bulunan tamsayılardan en büyük olanı bulur { tamsayi: 1 }
 * @param {object[]} tamsayilar - bir dizi nesne
 * @returns {number} - en büyük tamsayı
 *
 * ÖRNEK
 * enBuyukTamsayiyiBul([{ tamsayi: 1 }, { tamsayi: 3 }, { tamsayi: 2 }]) // 3 döndürür
 */
function enBuyukTamsayiyiBul(tamsayilar) {
  // ✨ kodlar buraya
  let enBuyukSayi = 0;
  for (let i = 0; i < tamsayilar.length; i++) {
    const element = tamsayilar[i];
    if (element.tamsayi > enBuyukSayi && typeof element.tamsayi === "number") {
      enBuyukSayi = element.tamsayi;
    }
  }
  return enBuyukSayi;
}

function Sayici(ilkSayi) {
  /**
   * [Görev 4A] Sayici bir sayaç oluşturur
   * @param {number} ilkSayi - Sayacin ilk değeri
   */

  // ✨ gerekli propları ekleyin

  /**
   * [Görev 4B] asagiSay metodu sıfıra doğru sayar
   * @returns {number} - bir sonraki sayı, sıfırdan küçük olamaz
   *
   * Örnek
   * const sayac = new Sayici(3)
   * sayac.asagiSay() // 3 döndürür
   * sayac.asagiSay() // 2 döndürür
   * sayac.asagiSay() // 1 döndürür
   * sayac.asagiSay() // 0 döndürür
   * sayac.asagiSay() // 0 döndürür
   */
  let tempSayi = ilkSayi;
  this.asagiSay = () => {
    // ✨ kodlar buraya
    return tempSayi == 0 ? 0 : tempSayi--;
  };
}
const sayac = new Sayici(3);
for (let i = 0; i < 4; i++) {
  console.log(sayac.asagiSay());
}
function Mevsimler() {
  /**
   * [Görev 5A] Mevsimler , bir mevsimler nesnesi oluşturur
   */

  // ✨ gerekli propları ekleyin

  /**
   * [Görev 5B] sonraki metodu bir sonraki mevsimi gösterir
   * @returns {string} - bir sonraki mevsim "yaz" olarak yüklenir
   *
   * ÖRNEK
   * const mevsimler = new Mevsimler()
   * mevsimler.sonraki() // "yaz" döndürür
   * mevsimler.sonraki() // "sonbahar" döndürür
   * mevsimler.sonraki() // "kış" döndürür
   * mevsimler.sonraki() // "ilkbahar" döndürür
   * mevsimler.sonraki() // "yaz" döndürür
   */
  let mevsimler = ["ilkbahar", "yaz", "sonbahar", "kış"];
  let index = 0;
  this.sonraki = () => {
    // ✨ kodlar buraya
    index = (index + 1) % mevsimler.length;
    return mevsimler[index];
  };
}
const mevsimler = new Mevsimler();
for (let i = 0; i < 4; i++) {
  console.log(mevsimler.sonraki());
}
function Araba(/*kodlar buraya */ isim, depoBenzin, kml) {
  /**
   * [Görev 6A] Araba 3 argüman alarak bir araba nesnesi oluşturur
   * @param {string} isim - arabanın ismi
   * @param {number} depo - benzin deposu kapasitesi
   * @param {number} kml - arabanın litre başına kat edebileceği km yol
   */

  this.odometer = 0; // araba 0 kilometrede yüklenecek
  this.depo = depoBenzin; // araba full depoyla yüklenecek
  // ✨ gerekli propları ekleyin

  this.isim = isim;
  this.kml = kml;
  this.maxDepo = depoBenzin;
  /**
   * [Görev 6B] sur metodu odometera km ekler ve aynı oranda depodan benzin tüketir
   * @param {string} gidilecekyol - arabayı sürmek istediğimiz km yol
   * @returns {number} - güncellenen odometer değeri
   *
   * ÖRNEK
   * const focus = new Araba('focus', 20, 30)
   * focus.sur(100) // 100 döndürür
   * focus.sur(100) // 200 döndürür
   * focus.sur(100) // 300 döndürür
   * focus.sur(200) // 500 döndürür
   * focus.sur(200) // 600 döndürür (100 km sonra benzin bitti)
   */
  this.sur = (gidilecekyol) => {
    // ✨ kodlar buraya
    let maxYol = this.depo * this.kml;
    if (gidilecekyol <= maxYol) {
      this.odometer = this.odometer + gidilecekyol;
      this.depo = this.depo - gidilecekyol / this.kml;
      return this.odometer;
    }
    this.depo = 0;
    this.odometer = this.odometer + maxYol;
    return this.odometer;
  };

  /**
   * [Görev 6C] Depoya benzin ekleme
   * @param {number} litre - depoya eklemek istediğimiz benzin litresi
   * @returns {number} - benzin eklendikten sonra gidilebilecek maksimum yol
   *
   * ÖRNEK
   * const focus = new Araba('focus', 20, 30)
   * focus.sur(600) // 600 döndürür
   * focus.sur(1) // 600 döndürür (depo boş olduğundan yol gidilemedi)
   * focus.benzinal(99) // 600 döndürür (depo yalnızca 20 litre alabiliyor)
   */
  this.benzinal = (litre) => {
    // ✨ kodlar buraya
    let kalanDepo = this.maxDepo - this.depo;

    let gidilecekKml;
    if (litre <= kalanDepo) {
      this.depo = this.depo + litre;
      gidilecekKml = this.depo * this.kml;
      return gidilecekKml;
    }
    this.depo = this.maxDepo;
    gidilecekKml = this.depo * this.kml;
    return gidilecekKml;
  };
}
const focus = new Araba("focus", 20, 30);

console.log(focus.sur(600));
console.log(focus.benzinal(55));
console.log(focus.sur(200));
console.log(focus.benzinal(5));
/**
 * [Görev 7] Bir sayının çift olup olmadığını asenkron olarak çözümler
 * @param {number} sayi - kontrol edilecek sayı
 * @returns {promise} - sayı çiftse true, aksi takdirde false
 *
 * ÖRNEK
 * asenkronCiftSayi(2).then(result => {
 *    // sonuç true
 * })
 * asenkronCiftSayi(3).then(result => {
 *    // sonuç false
 * })
 */
function asenkronCiftSayi(sayi) {
  // ✨ implement
  return new Promise((res) => {
    res(sayi % 2 == 0);
  });
}

asenkronCiftSayi(3).then((res) => {
  console.log("Sonuç:", res);
});
asenkronCiftSayi(10).then((res) => {
  console.log("Sonuç:", res);
});

module.exports = {
  nesneyiTrimle,
  verileniTrimle,
  enBuyukTamsayiyiBul,
  asenkronCiftSayi,
  Sayici,
  Mevsimler,
  Araba,
};
