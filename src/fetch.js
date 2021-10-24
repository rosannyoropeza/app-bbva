//VARIABLES 
const API_URL = 'http://localhost:3000';


export default function login (phone,password){
    const data = {'phone': phone, 'password': password};
    console.log(data,'data')
    const objMethod = {
        method: 'POST', 
        body: JSON.stringify(data), 
        headers:{
            'Content-Type': 'application/json'
        }
    }
    console.log('metod',objMethod)

    //HACIENDO LA PETICION A LA BASE DE DATOS
    return fetch(`${API_URL}/auth`, objMethod)
      .then(res => res.json())
};

