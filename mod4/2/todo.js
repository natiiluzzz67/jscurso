var listElement = document.querySelector('ul');
var inputElement = document.querySelector('input');

function renderRepositorios(repositorios) {
    for (repo of repositorios) {
        const textElement = document.createTextNode(repo.name);
        const liElement = document.createElement('li');
        liElement.appendChild(textElement);
        listElement.appendChild(liElement);


    }

    function listRepositorios() {
        
    }



}
