function enviar() {
    const data = new Date();                    
    const ano = data.getFullYear();
    const fano = document.getElementById('idade'); // 
    const resposta = document.getElementById('res');
    
    
    if (!fano.value || fano.value < 1900 || fano.value > ano) {
        alert('Por favor, insira um ano de nascimento válido!');
        return; 
    }
    
    const fsex = document.getElementsByName('radsex');
    const idade = ano - parseInt(fano.value);   
    let genero = '';                            
    
   
    const imagemAnterior = document.getElementById('foto');
    if (imagemAnterior) {
        imagemAnterior.remove();
    }
    
    const img = document.createElement('img');
    img.setAttribute('id', 'foto');
    img.setAttribute('alt', 'Imagem representativa'); 
    
    if (fsex[0].checked) {
        genero = 'Homem';
        if (idade >= 0 && idade <= 12) {
           
            img.setAttribute('src', 'imagens/criançamenino.png');
        } else if (idade < 18) {
            img.setAttribute('src', 'imagens/homem_jovem.png');
        } else if (idade < 50) {
            img.setAttribute('src', 'imagens/homem_adulto.png');
        } else {
            img.setAttribute('src', 'imagens/homem_idoso.png'); 
        }
    } else if (fsex[1].checked) {
        genero = 'Mulher'; 
        
        if (idade >= 0 && idade < 12) {
            img.setAttribute('src', 'imagens/Crianca2.png');
        } else if (idade < 18) {
            img.setAttribute('src', 'imagens/mulher_jovem.png');
        } else if (idade < 50) {
            img.setAttribute('src', 'imagens/Mulheradulta02.png');
        } else {
            img.setAttribute('src', 'imagens/mulher_idosa.png');
        }
    }
    
   
    resposta.innerHTML = `Você foi identificado como <strong>${genero}</strong> e sua idade é <strong>${idade} anos</strong>`;
    resposta.appendChild(img); 
}