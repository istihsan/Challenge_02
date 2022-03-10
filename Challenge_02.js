//CHALLENGE 2 Number 1

// function changeword (selectedText, changedText, text){
//         // tulis kode logic kamu didalam blok int ya
//         let a = text.replace(selectedText,changedText)
//         return a
// }
//     const kalimatl = 'Andini sangat mencintai kamu selamanya'
//     const kalimat2 = 'Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu'

//  // EXPECTED RESULT
//  // Ketika function tersebut dipanggil dengan variabel kalimati
//  console.log(changeword( 'mencintai', 'membenci', kalimatl)),
//  // Maka output yang harus keluar adalah
//  // --> 'Andini sangat membenci kamu selamanya

//  // Ketika function tersebut dipanggil dengan variabel kalimat2
//  console.log(changeword( 'bromo', 'semeru', kalimat2))

// ===================================================================================================================== //

// //Challenge 2 Number 2
// var checkTypeNumber;
// checkTypeNumber = (givenNumber) => {
//         if(typeof givenNumber == "number"){
//             if(givenNumber%2 == 0) {
//                 const genap = "GENAP"
//                 return genap
//             }
//             else {
//                 const ganjil = "GANJIL"
//                 return ganjil
//             }
//         } else if (typeof givenNumber === "undefined"){
//             const nopara = 'Error: Bro where is the parameter?'
//             return nopara
//         }
//         else {
//             const invaliddata = 'Error: Invalid data type'
//             return invaliddata
//         }
// }
// //  // EXPECTED RESULT
// //  // Ketika function tersebut dipanggil
// //  console.log(checkTypeNumber(10)) // OUTPUT yang keluar => "GENAP"
// //  console.log(checkTypeNumber(3)) // OUTPUT yang keluar => "GANJIL"
// //  console.log(checkTypeNumber("3")) // OUTPUT yang keluar => "Error: Invalid data type"
// //  console.log(checkTypeNumber({})) // OUTPUT yang keluar => "Error: Invalid data type"
// //  console.log(checkTypeNumber([])) // OUTPUT yang keluar => "Error: Invalid data type"
// //  console.log(checkTypeNumber()) // OUTPUT yang keluar => "Error: Bro where is the parameter?"

//   // ===================================================================================================================== //

// //Challenge 2 Number 3

// function checkEmail(email){
//     var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
//     var noat =  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-]))/;
//     if (typeof email === "string") {
//       if(filter.test(email) == true) {
//         let result = "VALID"
//         return result
//       }
//       else if (noat.test(email) == true){
//         let result = "INVALID"
//         return result
//       }
//       else {
//         let result = "ERROR : Data Is just a STRING"
//         return result
//       }
//     }
//     else if (typeof email != "undefined"){
//       let result = "ERROR : Data Is Not A STRING"
//       return result
//     }
//     else {
//       let result = "ERROR : Data is Undefined"
//       return result
//     }
// }

//  // EXPECTED RESULT
//  // Ketika function tersebut dipanggil
//  console.log(checkEmail('apranata@binar.co.id')) // OUTPUT yang keluar => "VALID"
//  console.log(checkEmail('apranata@binar.com'))// OUTPUT yang keluar => "VALID"
//  console.log(checkEmail('apranata@binar')) // OUTPUT yang keluar => "INVALID"
//  console.log(checkEmail('apranata')) // ERROR : (Teman-teman jelasin ini error nya apa dan kenapa)
//  console.log(checkTypeNumber(checkEmail(3322))) //ERROR : (Teman-teman jelasin int error nya apa dan kenapa)
//  console.log(checkEmail()) // ERROR : (Teman-teman jelasin ini error nya apa dan kenapa)

//   // ===================================================================================================================== //

// //Challenge 2 Number 4
// Panjang String >= 8
// Uppercase and Lowercase Available
// Number Available
// function isValidPassword (password) {
//   if (typeof password !== "string") {
//     return "Error: Password is not a STRING"
//   }
//   const isPassLongEnough = password.length >= 8;
//   const isUpperCaseAvailable = new RegExp('[A-Z]');
//   const isLowerCaseAvailable = new RegExp('[a-z]');
//   const isNumberAvailable = new RegExp('[0-9]');

//   if (!isPassLongEnough) {
//     return "Error: Password is not long enough."
//   }
//   if (!isUpperCaseAvailable.test(password)) {
//     return "Error: Password needs an Upper Case."
//   }
//   if (!isLowerCaseAvailable.test(password)) {
//     return "Error: Password needs a Lower Case."
//   }
//   if (!isNumberAvailable.test(password)) {
//     return "Error: Password needs a Number."
//   }
//   return true
// }

// //EXPECTED RESULT
// //Ketika Function tersebut dipanggil
// console.log(isValidPassword('Meong2021'))
//   // EXPECTED OUTPUT true
//   //(Karena memenuht requtrement, Meong2021 terdirt dari 8 huruf, ada huruf besar, ada huruf
//   //kectl, dan ada angka)
// console.log(isValidPassword('meong2021'))
//   // EXPECTED OUTPUT > false (Karena meong2021 tidak ada huruf besar)
// console.log(isValidPassword('@eong'))
//   //EXPECTED OUTPUT false (Karena teong tidak ada angka dan terdiri hanya 5 huruf)
// console.log(isValidPassword('Meong2'))
//   //EXPECTED OUTPUT => false (Karena Meong2 hanya 6 huruf)
// console.log(isValidPassword(0))
//   // EXPECTED OUTPUT ERROR : (Teman-teman jelasin ini error nya apa dan kenapa)
// console.log(isValidPassword( ))
//   //EXPECTED OUTPUT ERROR : (Teman-teman jelastn int error nya apa dan kenapa)

//   // ===================================================================================================================== //

// //Challenge 2 Number 5

// function getSplitName( personName) {
//   // tulis kode logic kamu didalam blok int ya
//   if (typeof personName !== "string"){
//     return "Error : This input is not a STRING"
//   }
//   let arrPersonName = personName.split(" ")
//   let fourOrMoreWordsName = arrPersonName.length > 3;
//   let threeWordsName = arrPersonName.length == 3;
//   let twoWordsName = arrPersonName.length == 2;
//   let oneWordName = arrPersonName.length == 1;

//   if (fourOrMoreWordsName) {
//     return "Error: This function is only for 3 characters name"
//   }
//   if (threeWordsName){
//     let FirstMiddleLastname = {
//       firstName: arrPersonName[0],
//       middleName: arrPersonName[1],
//       lastName: arrPersonName[2],
//       }
//     return FirstMiddleLastname
//   }
//   if (twoWordsName){
//     let firstLastName = {
//       firstName: arrPersonName[0],
//       middleName: null,
//       lastName: arrPersonName[1],
//     }
//     return firstLastName
//   }
//   if (oneWordName){
//     let firstNameOnly = {
//     firstName: arrPersonName[0],
//     middleName: null,
//     lastName: null,
//     }
//     return firstNameOnly
//   }
// }
// // EXPECTED RESULT
// // Ketika Function tersebut dipanggil
// console.log(getSplitName( "Aldi Daniela Pranata"))
// // EXPECTED OUTPUT:
// //( firstlane: Aldi, middleName: 'Daniela', lastName: 'Pranata')
// console. log( getSplitName( "Dwi Kuncoro"))
// // // EXPECTED OUTPUT
// // //( firstNane: Dwt, mitddleName: nutt, lastNane: Kuncoro}
// console.log(getSplitName( "Aurora"))
// // /// EXPECTED OUTPUT:
// // //( firstName: 'Aurora', middleNane: null, lastNane: null}
// console.log( getSplitName( "Aurora Aureliya Sukma Darma"))
// // // EXPECTED OUTPUT:
// // // Error: This function is only for 3 characters name
// console.log(getSplitName(0))
// // // EXPECTED OUTPUT :
// // // ERROR: (Teman-teman jelasin ini error nya apa dan kenapa)

//   // ===================================================================================================================== //

// //Challenge 2 Number 6

// function getAngkaTerbesarkedua(arr){
//   if (typeof arr != "object"){
//     return "Error: Input is NOT an OBJECT"
//   }
//   let sortedarr = arr.sort(function(a, b){return b - a})

//   const sortedAndNoDuplicate = []

//   sortedarr.forEach((newnum) => {
//     if (!sortedAndNoDuplicate.includes(newnum)) {
//         sortedAndNoDuplicate.push(newnum);
//     }
//   });
// return sortedAndNoDuplicate[1]
// }

// // EXPECTED RESULT
// // Ketika Function tersebut dipanggil
// const dataAngka = [9,4,7,7,4,3,2,2,8]
// console.log(getAngkaTerbesarkedua(dataAngka))
// // EXPECTED OUTPUT:
// // 8
// console.log(getAngkaTerbesarkedua(0))
// // EXPECTED OUTPUT
// // "ERROR : (Kamu jelasin tnt error nya apa dan kenapa)"
// console.log(getAngkaTerbesarkedua( ))
// // EXPECTED OUTPUT :
// // "ERROR : (Kamu jelasin ini error nya apa dan kenapa)"

//   // ===================================================================================================================== //

// //Challenge 2 Number 7
// Misahin Array of Objects
// Ngambil semua total terjual
// // Jumlahin semua total terjual

// const dataPenjualanPakAldi = [
//   {
//     namaProduct: "Sepatu Futsal Nike Vapor Academy 8",
//     hargaSatuan: 760000,
//     kategori: "Sepatu Sport",
//     totalTerjual: 90,
//   },
//   {
//     namaProduct: "Sepatu Warrior Tristan Black Brown High - Original",
//     hargaSatuan: 960000,
//     kategori: "Sepatu Sneaker",
//     totalTerjual: 37,
//   },
//   {
//     namaProduct: "Sepatu Warrior Tristan Maroon High - Original",
//     kategori: "Sepatu Sneaker",
//     hargaSatuan: 360000,
//     totalTerjual: 90,
//   },
//   {
//     namaProduct: "Sepatu Warrior Rainbow Tosca Corduroy - [BNIB] Original",
//     hargaSatuan: 120000,
//     kategori: "Sepatu Sneaker",
//     totalTerjual: 90,
//   },
// ];
// function hitungTotalPenjualan(dataPenjualan) {
//   if (!dataPenjualan.length) {
//     return "Error: Invalid Array";
//   }
//   const totalTerjualArrayOfArrays = dataPenjualan.map(({ totalTerjual }) => [
//     totalTerjual,
//   ]);
//   var totalTerjualArray = [].concat.apply([], totalTerjualArrayOfArrays);
//   // console.log(totalTerjualArray);
//   const sumTotalTerjual = totalTerjualArray.reduce(
//     (partialSum, a) => partialSum + a,
//     0
//   );
//   return sumTotalTerjual;
//   // console.log(totalTerjualArray)
//   // console.log(totalTerjualArr)
// }

// // // // EXPECTED RESULT
// // // // Ketika Function tersebut dipanggil dengan variabel dataPenjualanPakAldi
// console.log(hitungTotalPenjualan(dataPenjualanPakAldi));
// // // // EXPECTED OUTPUT > 307
// // // 307 dari mana? dari settap value proptery 'totalTerjual', yattu 90 + 37 + 90 + 90

// //Challenge 2 Number 8
// totalkeuntungan: 'Rp. 10.000.000', // Harus dalam format Rupiah (hargajual*terjual - hargabeli*totalterjual) (hargajual*totalterjual) - (hargabeli*totalterjual)

// totalModal: 'Rp.6.000.000', // Harus dalam format Rupiah (total harga beli* totalterjual + sisastok)
// persentasekeuntungan: '60%', // Persentasi keuntungan berdasarkan totalModal dan totalJual (hargabeli dibagi harga jual dikali 100%)
// produkBukuTerlaris: 'BUKU TERLARIS BERDASARKAN DATA DIATAS', // namaProduct yang paling banyak dijual (total terjual)
// penulisTerlaris: 'PENULIS TERLARIS BERDASARKAN DATA DIATAS' // nama penulis yang bukunya paling banyak dijual

const dataPenjualanNovel = [
  {
    idProduct: "BOOK002421",
    namaProduk: "Pulang - Pergi",
    penulis: "Tere Liye",
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
  },
  {
    idProduct: "BOOK002351",
    namaProduk: "Selamat Tinggal",
    penulis: "Tere Liye",
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Garis Waktu",
    penulis: "Fiersa Besari",
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Laskar Pelangi",
    penulis: "Andrea Hirata",
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56,
  },
];

// BERIKUT ADALAH CONTOH OBJECT YANG HARUS DI RETURN PADA FUNCTION YANG AKAN KAMU BUAT
//  SEMUA VALUE PADA PROPERTI OBJECT DIBAWAH INI ADALAH CONTOH DATA SAJA,
// JADI ITU BUKAN HASIL PERHITUNGAN YANG SEBENARNYA

//  PADA PROPERTI totalkeuntungan dan totalModal, NILAI YANG DIHASILKAN HARUS DALAM
// BERUPA FORMAT RUPIAH, CONTOH totalkeuntungan 14658000 DI JADIKAN FORMAT RUPIAH
// MENJADI "Rp. 14.658.008

function getInfoPenjualan(dataPenjualan) {
  if (!dataPenjualan.length) {
    return "Error: Invalid Data (Must Be Array)";
  }

  const formatToIdr = (number) => {
    return new Intl.NumberFormat("ID-id", {
      style: "currency",
      currency: "IDR",
    })
      .format(number)
      .split(",")[0];
  };
  const countTotalKeuntungan = dataPenjualan.reduce(
    (acc, { totalTerjual, hargaJual, hargaBeli }) => {
      acc += totalTerjual * hargaJual - (totalTerjual - hargaBeli);
      return acc;
    },
    0
  );

  const resultTotalKeuntungan = formatToIdr(countTotalKeuntungan);
  // console.log(resultTotalKeuntungan);

  //Get Total Modal
  const countTotalModal = dataPenjualan.reduce(
    (acc, { hargaBeli, sisaStok, totalTerjual }) => {
      acc += hargaBeli * (sisaStok + totalTerjual);
      return acc;
    },
    0
  );
  const resultTotalModal = formatToIdr(countTotalModal);

  // Get Profit Percentage
  const persentaseKeuntungan =
    String((countTotalModal / countTotalKeuntungan) * 100).split(".")[0] + "%";
  // console.log(persentaseKeuntungan);

  // Get Buku Terlaris
  let tmp = { namaProduk: null, totalTerjual: 0 };

  dataPenjualan.forEach((element) => {
    if (tmp.totalTerjual < element.totalTerjual) {
      tmp.namaProduk = element.namaProduk;
      tmp.totalTerjual = element.totalTerjual;
    }
  });
  const produkBukuTerlaris = tmp.namaProduk;

  //Get Favourite Writer

  const penulisFav = dataPenjualan.reduce((acc, { penulis, totalTerjual }) => {
    if (acc[penulis] === undefined) {
      acc[penulis] = totalTerjual;
    } else {
      acc[penulis] = acc[penulis] += totalTerjual;
    }
    return acc;
  }, {});
  let tmp1 = { penulis: null, totalTerjual: 0 };

  for (const key in penulisFav) {
    if (tmp1.totalTerjual < penulisFav[key]) {
      tmp1.penulis = key;
      tmp1.totalTerjual = penulisFav[key];
    }
  }
  const penulisTerlaris = tmp1.penulis;

  return {
    resultTotalKeuntungan,
    resultTotalModal,
    persentaseKeuntungan,
    produkBukuTerlaris,
    penulisTerlaris,
  };
}

//EXPECTED RESULT
// Ketika Function tersebut dipanggil dengan varlabel dataPenjualanPakAldi
console.log(getInfoPenjualan(dataPenjualanNovel));
//EXPECTED 0UTPUT 08JECT dengan format seperti yang disebutkan diatas
