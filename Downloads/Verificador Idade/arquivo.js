function enviar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('idd')
    var res = window.document.getElementById('res')

    if(fano.value.length == 0 || fano.value.length > ano){
        window.alert('ERRO[] .Por favor , tente novamente')
    } 
    else{
        window.alert('Tudo OK')
    }    
    }

