/* if */
/* else */
/* else if */

let a = 45;
let b = 46;
let c = 10;
let d = 21;

/*
if (a == 44 && b == 46 && c == 10 && d == 21){
    console.log("Qiymatlarning hammasi to'g'ri!");
}
else{
    console.log("Qiymatlarning kamida bittasi noto'g'ri!");
}
*/
/*
if (a == 45 || b == 46 || c == 10 || d == 21){
    console.log("Qiymatlarning kamida bittasi to'g'ri!");
}
else{
    console.log("Qiymatlarning hammasi noto'g'ri!");
}
*/

/* Data types in JS: undefined,boolean,object */

/*let soz;*/
/*let rost = 45 == 46 ? true:false;*/
/*let arrayObject = [45,78,true,false,"matn","true","js",74];*/
/*let oddiyObject = {ism: "Said", familiya: "Nikov", yoshi: "16 yoshda"};*/
/*console.log(oddiyObject.ism, oddiyObject.familiya, oddiyObject.yoshi);*/

/* Function in JS */
/*
function savatchaniTekshir(){
    if (savatcha.length == 3){
        document.write("Savatchaning ichida " +savatcha.length+ " ta ma'lumot bor");
    }
    else{
        document.write("Savatchaning ichida " +savatcha.length+ " dona ma'lumot bor");
    }
}
let savatcha = [12,"matn",true,false];
savatchaniTekshir();
*/

/* Date in JS */

let sana = new Date();

sana.setFullYear(2022);
sana.setMonth();
sana.setDate();

let yil = sana.getFullYear();
let oy = sana.getMonth();
let kun = sana.getDate();
let haftaKuni = sana.getDay();
let oylar = ["yanvar","fevral","mart","aprel","may","iyun","iyul",
            "avgust","sentyabr","oktyabr","noyabr","dekabr"];

document.write("Bugun " + yil + " - yil " + oylar[oy] + " oyining " + kun +
               " - kuni. Haftaning " + haftaKuni + " - kuni.");











