 // 1. Deklarasi Variabel
let matematika = 85;
let bahasaInggris = 90;
let ipa = 78;

// 2. Perhitungan Rata-Rata
let nilaiRataRata = (matematika + bahasaInggris + ipa) / 3;

// 3. Tampilkan hasil ke browser
let output = "<p>Nilai Rata-Rata: " + nilaiRataRata + "</p>";
output += "<p>Tipe Data: " + typeof nilaiRataRata + "</p>";

// 4. Struktur Kondisi (if-else)
let status;
if (nilaiRataRata >= 80) {
  status = "Lulus";
} else {
  status = "Tidak Lulus";
}
output += "<p>Status: " + status + "</p>";

// 5. Tampilkan ke browser
document.getElementById("output").innerHTML = output;

// 6. Tampilkan juga ke konsol
console.log("Nilai Rata-Rata:", nilaiRataRata);
console.log("Status Kelulusan:", status);
