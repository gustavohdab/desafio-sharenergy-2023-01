import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class UsersService {
  async getUsers() {
    const response = await axios.get('https://randomuser.me/api/', {
      params: {
        results: 33,
      },
    });
    const modifiedUsers = response.data.results.map((user) => {
      return {
        picture: user.picture.large,
        name: `${user.name.first} ${user.name.last}`,
        email: user.email,
        username: user.login.username,
        age: user.dob.age,
      };
    });
    return modifiedUsers;
  }
}
