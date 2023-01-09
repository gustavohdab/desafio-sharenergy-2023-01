import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class RandomDogService {
  async getRandomDogImage(): Promise<string> {
    const response = await axios.get('https://random.dog/woof.json');
    return response.data.url;
  }
}
