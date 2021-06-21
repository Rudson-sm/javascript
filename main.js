function clicou(){
   document.getElementById("agradecimento").innerHTML ="<b>Obrigado por clicar</b>";
   console.log(document.getElementById("agradecimento"));
   
    // alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://github.com/Rudson-sm");
    //windon.location.href = "https://github.com/Rudson-sm";
}

function trocar(Element){
    //document.getElementById("mousemove").innerHTML ="Obrigado por passar o mouse";
   Element.innerHTML ="obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar(Element){
    //document.getElementById("mousemove").innerHTML ="Passe o mouse aqui ";
    Element.innerHTML ="passe o mouse aqui";

}


function funcaoChange(elemento){
    console.log(elemento.value)
}









/*function soma(n1, n2){
    return n1+n2;
}

function validarIdade(idade){

    if(idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual é sua idade");
validarIdade(idade)
console.log(validar);*/







//for(count=0;count <5; count++);
//console.log("Hoje é +dgetDate() + "/" + (d.getMounth()+1));


//for(count=0; count <= 5; count++)











/*var d= new Date();
alert(d);*/









/*var count;
for(count= 0; count <= 5; count++){
    alert(count);
};*/











/*var count =0 ;
while (count <= 5 ){
    console.log(count);
    alert(count);
    count++;
};*/








/*var idade = prompt("Qual é sua idade");
if (idade >= 18){
    alert("Maior de idade");
}else{
    alert("Menor de Idade");
};*/










/*var frutas =[{nome:"maça", cor:"vermelha"},{nome: "uva",cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);*/




/*var fruta ={nome:"maça", cor:"vermelha"};
console.log(fruta.nome);
alert(fruta.cor);*/












//var lista =["Maçã" ,"Pera", "Laranja"];
//lista.push("Uva");
//lista.pop();
//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" - "));












/*var nome="Rudson Soares";
var n1=35;
var n2=10;
var frase ="Japão é o melhor time do mundo";
//alert(nome + " tem " + idade+idade2 + "Anos");
//alert(idade + idade2);

//console.log(nome);
console.log(n1*n2);
console.log(frase.toLowerCase());
//alert(frase.replace("Japão" , "Brasil"));*/
