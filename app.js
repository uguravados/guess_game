
let hakSayi = 10;
let counter = 0;
let max = 100;
let min = 0;
let sayi = Math.floor(Math.random() * 100 + 1)
console.log(sayi);
let tahmin = document.getElementById("input")
console.log(tahmin);
let sonuc = document.querySelector("p");
let btn = document.getElementsByClassName("button")[0];
let hak = document.getElementsByClassName("hak")[0];
let ipucu = document.getElementById("p3");
let Imgkazanan = document.getElementById("kazanan");
let Imgkaybeden = document.getElementById("kaybeden");
let p4 = document.getElementById("p4");


function hesapla() {
    counter++;

    if (hakSayi < counter) {
        sonuc.innerText = "Maalesef buraya kadar,Üzgünüm😔 ... Doğru cevap: " + sayi + ""
        // Imgkaybeden.classList.remove("hidden");
    } else {
        p4.innerHTML += tahmin.value + " ";
        if (100 < tahmin.value || tahmin.value < 1) {
            console.log("1 ile 100 arasında bir sayı giriniz");
            sonuc.innerText = "1 ile 100 arasında bir sayı giriniz"

        } else if (sayi > tahmin.value) {
            min = tahmin.value;
            sonuc.innerHTML = "İpucuya bakıp sayını büyütmelisin👆"
            hak.innerHTML++
            ipucu.innerText = min + " ile " + max + " arasındadır";
            Imgkaybeden.classList.remove("hidden");
            Imgkazanan.classList.add("hidden")
        } else if (sayi < tahmin.value) {
            max = tahmin.value;
            sonuc.innerHTML = "Daha küçük bir sayı girmelisin👇"
            hak.innerHTML++
            ipucu.innerText = min + " ile " + max + " arasındadır";
            Imgkazanan.classList.remove("hidden")
            Imgkaybeden.classList.add("hidden");
        } else {
            sonuc.innerText = "TEBRİKLER👏,Sonuç: " + tahmin.value
            Imgkazanan.classList.remove("hidden")
        }

    }

    tahmin.value = ""
}


input.addEventListener("keydown", function (e) {
    if (e.keyCode == 13) {

        hesapla()

    }
});
btn.addEventListener("click", () => {
    hesapla();
});