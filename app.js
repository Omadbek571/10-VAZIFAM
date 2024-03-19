// 1-SAVOL

// // PERSON-1
// class Person1 {
//     constructor(name, role, milati, lang) {
//         this.name = name;
//         this.role = role;
//         this.milati = milati;
//         this.lang = lang;
//     }
//     work() { }
//     getSalary() { }
// }
// let user = new Person1("Omadbek", "frontent developer", "UZBEK", "ENGIL,RUS");
// console.log(user);

// // PERSON-2
// class Person2 extends Person1 {
//     constructor(name, role, milati, lang, office) {
//         super(name, role, milati, lang);
//         this.office = office;
//     }
//     control() { }
// }
// let user1 = new Person2(
//     "MURODJON",
//     "developer",
//     "uzbek",
//     "english",
//     "Farg'ona"
// );
// console.log(user1);


// 2-SAVOL


// class Rectangle {
//     constructor(eni, boyi) {
//         this.eni = eni;
//         this.boyi = boyi;
//     }

//     hisoblash() {
//         return this.eni * this.boyi;
//     }

//     perimetiriniHisoblash() {
//         return 2 * (this.eni + this.boyi);
//     }

//     PerimeterAlter() {
//         return 2 * (this.eni + this.boyi);
//     }
// }

// // SHU ERGA QIYMAT BERASIZ
// let rectangle = new Rectangle(8, 7);

// console.log("To'rtburchakning yuzasi: " + rectangle.hisoblash());

// console.log("To'rtburchakning perimetri (birinchi usul): " + rectangle.perimetiriniHisoblash());

// console.log("To'rtburchakning perimetri (boshqa usul): " + rectangle.getPerimeterAlternative());


// 3-SAVOL

// Vehicle klassi
// class Vehicle {
//     constructor(marka, model, yil) {
//         this.marka = marka;
//         this.model = model;
//         this.yil = yil;
//     }

//     displayInfo() {
//         console.log(`Marka: ${this.marka}, Model: ${this.model}, Yil: ${this.yil}`);
//     }
// }

// class Car extends Vehicle {
//     constructor(marka, model, yil, eshiklarSon) {
//         super(marka, model, yil);
//         this.eshiklarSon = eshiklarSon;
//     }
// }

// let avtomobil = new Car("NEXIYA", "2", 2018,);

// avtomobil.displayInfo();

// 4-SAVOL

// class BankAccount {
//     constructor(balans, hisobRaqam) {
//         this.balans = balans;
//         this.hisobRaqam = hisobRaqam;
//     }

//     hisobdanPulQoyish(miqdori) {
//         this.balans += miqdori;
//         console.log(`${miqdori} ${this.balans}`);
//     }

// }

// let account = new BankAccount(500,);

// account.hisobdanPulQoyish(1);

// 6-SAVOL
// // xodim
// class Xodim {
//     constructor(ism, Haqi) {
//         this.ism = ism;
//         this.Haqi = Haqi;
//     }

//     hisoblash() {
//         return this.Haqi * 12;
//     }
// }

// // menejer
// class Menejer extends Xodim {
//     constructor(ism, ishHaqi, bonus) {
//         super(ism, ishHaqi);
//         this.bonus = bonus;
//     }

//     hisoblash() {
//         console.log("BONUSLARI YOQ YAHSHI ISHLAMAGAN");
//         return this.Haqi * 12;
//     }
// }
// // xodim
// let xodim = new Xodim("Ali", 5000);
// console.log("YILIK MAOSHI ISHCHINI" + xodim.hisoblash());
// // menejer
// let menejer = new Menejer("Vali", 7000, 2000);
// console.log("MENEJIRDI YILIK ISH HAQI " + menejer.hisoblash());


// 7-SAVOL

// class Kitob {
//     constructor(sarlavha, muallif, nashrYili) {
//         this.sarlavha = sarlavha;
//         this.muallif = muallif;
//         this.nashrYili = nashrYili;
//     }

//     displayInfo() {
//         console.log(`Sarlavha: ${this.sarlavha}, Muallif: ${this.muallif}, Nashr yili: ${this.nashrYili}`);
//     }
// }

// class Ebook extends Kitob {
//     constructor(sarlavha, muallif, nashrYili, narx) {
//         super(sarlavha, muallif, nashrYili);
//         this.narx = narx;
//     }

//     displayInfo() {
//         console.log("UZUM MARKETA 199 MING EVAZIGA SOTADI");
//     }
// }

// let kitob = new Kitob("Nur Ismoilov", "Nur Ismoilov", 2022);
// kitob.displayInfo();

// let ebook = new Ebook("Nur Ismoilov", "Nur Ismoilov", 2022);
// ebook.displayInfo();

// 9-SAVOL

// class Bank {
//     constructor(name) {
//         this.name = name;
//         this.branches = [];
//     }

//     banik(branchName) {
//         this.branches.push(branchName);
//         console.log(`${branchName} nomli filial qo'shildi.`);
//     }

//     banki2(branchName) {
//         const index = this.branches.indexOf(branchName);
//         if (index !== -1) {
//             this.branches.splice(index, 1);
//             console.log(`${branchName} nomli filial olib tashlandi.`);
//         } else {
//             console.log(`${branchName} nomli filial topilmadi.`);
//         }
//     }

//     showAllBranches() {
//         console.log("Barcha filiallar:");
//         this.branches.forEach(branch => {
//             console.log(branch);
//         });
//     }
// }

// let bank = new Bank("Uzbekiston Banki");

// // SHU ERGA QOSHIB KETORASIZ
// bank.banik("Toshkent filiali");
// bank.banik("Fargona filyali qoshildi")



// 10-SAVOL

// class Mahsulot {
//     constructor(id, nomi, narx, miqdor) {
//         this.id = id;
//         this.nomi = nomi;
//         this.narx = narx;
//         this.miqdor = miqdor;
//     }

//     hisoblash() {
//         return this.narx * this.miqdor;
//     }
// }

// class PersonalCareProduct extends Mahsulot {
//     constructor(id, nom, narx, miqdor, kafolatMuddati) {
//         super(id, nom, narx, miqdor);
//         this.kafolatMuddati = kafolatMuddati;
//     }

//     hisoblash() {
//         console.log("KAFOLAT CHEKSIZ!");
//     }
// }

// let mahsulot = new Mahsulot(1, "banan", 115, 2);

// console.log("NARXI:", mahsulot.hisoblash());

// let personalCareProduct = new PersonalCareProduct(2, "Toothpaste", 8000, 3, "1 oy");

// personalCareProduct.hisoblash();








