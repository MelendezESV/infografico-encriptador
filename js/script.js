function textAreaBackground() {
    document.getElementById('text-input').style.background = '#130d47';
    document.getElementById('text-input').style.filter = 'saturate(125%)';
}

function controls(controlsParameter) {
    switch (controlsParameter) {
        case 'A':
            let initialMessage = document.getElementById('text-input').value;
            let encryptedMessage = document.getElementById('text-output').value = initialMessage;
            document.getElementById('text-output').style.background = '#000000';
            console.log(initialMessage);  
        break;
        case 'B':
            alert('Soy el Boton B');               
            break;              
        case 'Reset':
            document.getElementById('text-input').value = '';  
            document.getElementById('text-input').style.background = 'url(../infografico-encriptador/img/start-screen.png)'; 
            document.getElementById('text-input').style.filter = 'saturate(200%)';    
            document.getElementById('text-input').style.backgroundSize = 'contain';

            document.getElementById('text-output').value = '';  
            document.getElementById('text-output').style.background = 'url(../infografico-encriptador/img/score-screen.png)'; 
            document.getElementById('text-output').style.filter = 'saturate(200%)';    
            document.getElementById('text-output').style.backgroundSize = 'contain';
            break;
        default:
            break;
    }
}