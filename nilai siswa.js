let matematika = 85;
let bahasainggris = 90;
let ipa = 78;

let nilaiRataRata =(matematika+bahasainggris+ipa) / 3;

console.log("Nilai Rata-Rata:",nilaiRataRata);
console.log("Tipe Data:", typeof nilaiRataRata);

if (nilaiRataRata >= 80) {
    console.log("Status Lulus")
} else{
    console.log("Status Tidak Lulus")
}