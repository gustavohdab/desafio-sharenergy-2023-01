/* It's a service that returns a string */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `
    <h1>Sharenergy Test</h1>
    <p>Você pode acessar as rotas pelo insomnia caso queira, aqui está um exemplo:</p>
    <ul>
      <li>random-dog/image">/random-dog/image</li>
      <li>http-cat/100-200"></li>
      <li>users">/users</li>
      <li>/customer</li>
      <li>/customer/:id</li>
      <li>/customer | para criar com o corpo: 
        {
	        "id":"10",
	        "name":"insomnia1",
	        "email":"testinsomnia@exemple.com",
	        "phone":"111111111",
	        "address":"city 123 4",
	        "cpf":"144442424"
        }
      </li>
      <li>/customer/:id | para atualizar com o corpo: 
        {
          "name":"updated name",
          "email":"testinsomnia@exemple.com",
          "phone":"111111111",
          "address":"city 123 4",
          "cpf":"144442424"
        } 
      </li>
      <li>/customer/:id | para deletar</li>
    </ul>
      <p>Para acessar a rota de autenticação, você deve fazer um POST para localhost:3000/auth/login . com o seguinte corpo:</p>
        {
          "username": "desafiosharenergy",
          "password": "sh@r3n3rgy",
          "rememberMe": true // ou false
        }
    `;
  }
}
