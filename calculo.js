function calculo(){
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;
    var idade = document.getElementById("idade").value;
    var nivel_atividade = document.getElementById("id_atividade").value;
    var validacao;
    var atividade;
    var resultado;

    if (nivel_atividade == "Nível de Atividade"){
        alert("Favor informar o nível de atividade!");
        document.getElementById("id_atividade").focus();
    }
    else if (peso == ""){
        alert("Favor informar o peso!"); 
        document.getElementById("peso").focus();       
    }
    else if (altura == ""){
        alert("Favor informar a altura!");
        document.getElementById("altura").focus(); 
    }
    else if (idade == ""){
        alert("Favor informar a idade!");
        document.getElementById("idade").focus(); 
    }
    else{
        validacao = true;
    }

    if (nivel_atividade == "Sedentario"){
        atividade = 1.2;
    }
    else if (nivel_atividade == "Levemente ativo"){
        atividade = 1.375;
    }
    else if (nivel_atividade == "Moderadamente ativo"){
        atividade = 1.55;
    }
    else if (nivel_atividade == "Altamente ativo"){
        atividade = 1.725;
    }
    else if (nivel_atividade == "Extremamente ativo"){
        atividade = 1.9;
    }

    if (validacao == true){
        if (document.getElementById("homem").checked){

            resultado = atividade * (66 + (13.7 * peso) + (5 *  altura) - (6.8 * idade));
            document.getElementById("resultado").value = resultado.toFixed(2);
        }
        else {
            resultado= atividade * (655 + (9.6 * peso) + (1.8 *  altura) - (4.7 * idade));
            document.getElementById("resultado").value = resultado.toFixed(2);
    }

    }
}


