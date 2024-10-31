document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('teamForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        const name1 = document.getElementById('name1').value;
        const name2 = document.getElementById('name2').value;
        const name3 = document.getElementById('name3').value;
        const name4 = document.getElementById('name4').value; // Corrigido para usar o ID correto
        const story = document.getElementById('story').value;

        const data = {
            names: [name1, name2, name3, name4],
            message: story
        };

        fetch('https://fsdt-contact.onrender.com/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao enviar os dados');
            }
            return response.json();
        })
        .then(data => {
            alert('Enviado com sucesso!');
            // Limpa os campos do formulário
            document.getElementById('teamForm').reset();
        })
        .catch((error) => {
            alert('Ocorreu um erro: ' + error.message);
        });
    });
});