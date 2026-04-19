/**
 * Generátor seznamu zaměstnanců
 */

const maleNames = [
    "Adam", "Jakub", "Jan", "Tomáš", "Martin", "Lukáš", "Petr", "Pavel",
    "Ondřej", "Michal", "David", "Filip", "Jiří", "Radek", "Marek",
    "Václav", "Zdeněk", "Miroslav", "Stanislav", "Josef", "Aleš", "Karel",
    "Roman", "Milan", "Vojtěch", "Patrik", "Jaroslav", "Dominik", "Libor", "Antonín",
];

const femaleNames = [
    "Jana", "Marie", "Eva", "Petra", "Lenka", "Lucie", "Tereza", "Monika",
    "Martina", "Kateřina", "Alena", "Ivana", "Hana", "Veronika", "Michaela",
    "Barbora", "Zuzana", "Markéta", "Pavla", "Simona", "Nikola", "Andrea",
    "Denisa", "Kristýna", "Renata", "Blanka", "Radka", "Dagmar", "Šárka", "Jitka",
];

const maleSurnames = [
    "Novák", "Svoboda", "Novotný", "Dvořák", "Černý", "Procházka", "Krejčí",
    "Blažek", "Veselý", "Horák", "Němec", "Pokorný", "Marek", "Pospíšil",
    "Hájek", "Jelínek", "Kratochvíl", "Kovář", "Fiala", "Sedláček", "Vlček",
    "Urban", "Zeman", "Kolář", "Holub", "Malý", "Čermák", "Beneš", "Válek", "Šimánek",
];

const femaleSurnames = [
    "Nováková", "Svobodová", "Novotná", "Dvořáková", "Černá", "Procházková", "Krejčíková",
    "Blažková", "Veselá", "Horáková", "Němcová", "Pokorná", "Marková", "Pospíšilová",
    "Hájková", "Jelínková", "Kratochvílová", "Kovářová", "Fialová", "Sedláčková", "Vlčková",
    "Urbanová", "Zemanová", "Kolářová", "Holubová", "Malá", "Čermáková", "Benešová", "Válková", "Šimánková",
];

const workloads = [10, 20, 30, 40];

/**
 * Vrátí náhodné celé číslo v rozsahu od min do max (včetně obou hranic).
 * @param {number} min minimální hodnota
 * @param {number} max maximální hodnota
 * @returns {number} náhodné celé číslo
 */
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Vrátí náhodný prvek z předaného pole.
 * @param {Array} arr pole, ze kterého se vybírá
 * @returns {*} náhodně vybraný prvek pole
 */
function randomItem(arr) {
    return arr[randomInt(0, arr.length - 1)];
}

/**
 * Vygeneruje náhodné datum narození jako řetězec.
 * Věk výsledné osoby bude v rozsahu ageMin až ageMax let.
 * @param {number} ageMin minimální věk v letech
 * @param {number} ageMax maximální věk v letech
 * @returns {string} datum narození
 */
function randomBirthdate(ageMin, ageMax) {
    const msPerYear = 365.25 * 24 * 60 * 60 * 1000;
    const now = Date.now();
    const earliest = now - ageMax * msPerYear;
    const latest   = now - ageMin * msPerYear;
    const birthTimestamp = earliest + Math.random() * (latest - earliest);
    return new Date(birthTimestamp).toISOString();
}

/**
 * Hlavní funkce aplikace, která vygeneruje seznam zaměstnanců.
 * Pro každého zaměstnance náhodně určí jméno, příjmení, pohlaví, datum narození a úvazek.
 * @param {object} dtoIn vstupní objekt obsahující počet zaměstnanců a věkové limity {count, age: {min, max}}
 * @returns {Array} seznam vygenerovaných zaměstnanců
 */
export function main(dtoIn) {
    const { count, age: { min: ageMin, max: ageMax } } = dtoIn;

    const employeeList = [];

    for (let i = 0; i < count; i++) {
        const gender = Math.random() < 0.5 ? "male" : "female";

        const name    = gender === "male" ? randomItem(maleNames)    : randomItem(femaleNames);
        const surname = gender === "male" ? randomItem(maleSurnames)  : randomItem(femaleSurnames);

        const birthdate = randomBirthdate(ageMin, ageMax);
        const workload  = randomItem(workloads);

        employeeList.push({ name, surname, gender, birthdate, workload });
    }

    return employeeList;
}
