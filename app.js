ocument.getElementById('teamForm').addEventListener('submit', async function (event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Captura os valores dos campos
    const name1 = document.getElementById('name1').value.trim();
    const name2 = document.getElementById('name2').value.trim();
    const name3 = document.getElementById('name3').value.trim();
    const story = document.getElementById('story').value.trim();

    // Monta o JSON para a requisição
    const data = {
        names: [name1, name2, name3],
        message: story
    };

    try {
        // Envia a requisição POST
        const response = await fetch('https://fsdt-contact.onrender.com/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        // Verifica o status da resposta
        if (response.ok) {
            alert('Formulário enviado com sucesso!');
            document.getElementById('teamForm').reset(); // Limpa os campos do formulário
        } else {
            alert('Ocorreu um erro ao enviar o formulário. Tente novamente.');
        }
    } catch (error) {
        alert('Erro de conexão. Por favor, tente novamente mais tarde.');
    }
});