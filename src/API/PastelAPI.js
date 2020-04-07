
const url = 'http://api-pede-pastel.herokuapp.com/api'

// get
export const getMenu = async () => {
    try {
        const response = await fetch(url, {
            method: 'GET',
            redirect: 'follow'
        });

        const result = await response.json();
        console.log(result);
    }

    catch (error) {
        return console.log('error', error);
    }
}

// post
export const addPastel = (sabor, preco, qtd, description) => {
    var myHeaders = new Headers();

    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();

    urlencoded.append("sabor", sabor);
    urlencoded.append("preco", preco);
    urlencoded.append("qtd", qtd);
    urlencoded.append("description", description);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
    };

    fetch(url, requestOptions)
        .then(response => response.text())
        .then(result => alert("enviado"))
        .catch(error => console.log('error', error));
}

// alterar

// deletar