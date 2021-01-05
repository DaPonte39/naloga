function json_objekt(ime, priimek, ulica, posta, st_poste, dat_rojstva, sp, izobrazba, primeren, koeficient){
    var obj = {Ime: ime,
    Priimek: priimek,
    Ulica: ulica,
    Posta: posta,
    StevilkaPoste: st_poste,
    DatumRojstva: dat_rojstva,
    Spol: sp,
    Izobrazba: izobrazba,
    Primernost: primeren,
    Koeficient: koeficient};

    var myjson = JSON.stringify(obj);
    console.log(myjson);
}

function sprejmi(){
    var tocke = document.getElementsByName("Dodatna_Znanja");
    var tocke_potrjene = [];

    for (var i=0; i < tocke.length; i++){
        if (tocke[i].checked){
            tocke_potrjene[i] = tocke[i].value;
        }
    }
    tocke_potrjene.push(document.getElementById("Stopnja_Izobrazbe").value);
    var zdruzi = tocke_potrjene.reduce((a,b)=>{return a+b},0);
    const zdruzeno = zdruzi;
    let novo = Array.from(zdruzeno.toString()).map(Number);
    const add = (a, b) => a + b;
    const arrSum = novo.reduce(add);
    console.log(arrSum);

    if (document.getElementById("Stopnja_Izobrazbe").value == "0"){
        var primeren = "Ni primeren";
    }
        else{
            var primeren = "Je primeren";
        }

    var e = document.getElementById("Stopnja_Izobrazbe");
    var stopnja = e.options[e.selectedIndex].text;

    json_objekt(document.getElementById("Ime").value,
    document.getElementById("Priimek").value,
    document.getElementById("Naslov").value,
    document.getElementById("Posta_Stevilka").value,
    document.getElementById("Posta_Naziv").value,
    document.getElementById("Datum").value,
    document.getElementById("Spol").value,
    stopnja,
    primeren,
    arrSum);
    
}