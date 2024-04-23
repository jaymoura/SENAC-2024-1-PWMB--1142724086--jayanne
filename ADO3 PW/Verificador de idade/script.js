function Verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var formano = document.querySelector('input#anodigitado')
    var resultado = document.querySelector('div#resultado')

    if (formano.value.length == 0 || formano.value > ano){
        alert('Verifique as informações digitadas e tente novamente!')
     }else{
        var formsex = document.getElementsByName('radiosexo')
        var idade = ano - Number(formano.value)
        var genero = ''
        var imagem = document.createElement('img') 
        

        if(formsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade < 10){ 
                imagem.setAttribute('src', 'imagens/crianca-masc.png')
            }else if(idade < 21){
                imagem.setAttribute('src', 'imagens/homem-jovem.png')
            }else if(idade < 60){
                imagem.setAttribute('src', 'imagens/adulto-masc.png')
            }else{
                imagem.setAttribute('src', 'imagens/idoso-masc.png')
            }

        } else { 
            genero = 'Mulher'
            if(idade >=0 && idade < 10){
                imagem.setAttribute("src", 'imagens/crianca-fem.png')
            }else if(idade < 21){
                imagem.setAttribute('src', 'imagens/jovem-fem.png')
            }else if(idade < 60){
                imagem.setAttribute('src', 'imagens/adulta-fem.png')
            }else{
                imagem.setAttribute('src', 'imagens/idosa-fem.png')
            }

        }
        resultado.style.textAlign = 'center'
        resultado.innerHTML = `Identificamos ${genero} com idade de ${idade} anos.`  
        resultado.appendChild(imagem)
        imagem.style.display = 'block';
        imagem.style.margin = '0 auto';
    }
 }