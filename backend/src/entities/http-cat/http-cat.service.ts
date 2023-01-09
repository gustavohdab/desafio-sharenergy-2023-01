/* It makes a request to the http.cat API and returns the response as a base64 encoded string */
import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import axios from 'axios';
import { HttpResponse } from '../../interfaces/http-cat-response.interface';

@Injectable()
export class HttpCatService {
  getHttpCatImage() {
    throw new Error('Method not implemented.');
  }
  private readonly baseUrl = 'https://http.cat/';

  /**
   * It takes a number as an argument, and returns an Observable of type HttpResponse
   * @param {number} code - The HTTP status code to return.
   * @returns Observable<HttpResponse>
   */
  getHttpCode(code: number): Observable<HttpResponse> {
    return this.makeRequest(`${code}`);
  }

  getHttpCodesRange(range: number): Observable<HttpResponse> {
    return this.makeRequest(`range/${range}`);
  }

  /**
   * It makes a request to the given path, and if it fails, it returns a 404 image
   * @param {string} path - The path to the image.
   * @returns Observable<HttpResponse>
   */
  private makeRequest(path: string): Observable<HttpResponse> {
    const url = `${this.baseUrl}${path}`;
    return new Observable((observer) => {
      axios
        .get(url, { responseType: 'arraybuffer' })
        .then((response: AxiosResponse<Buffer>) => {
          observer.next({
            data: response.data.toString('base64'),
            contentType: response.headers['content-type'],
          });
          observer.complete();
        })
        .catch((error) => {
          console.error(error);
          // Faz uma requisição para a imagem de "not found" =)
          axios
            .get('https://i.imgur.com/dbWHmPA.jpg', {
              responseType: 'arraybuffer',
            })
            .then((response: AxiosResponse<Buffer>) => {
              observer.next({
                data: response.data.toString('base64'),
                contentType: response.headers['content-type'],
              });
              observer.complete();
            })
            .catch((error) => {
              console.error(error);
              observer.error(error);
            });
        });
    });
  }
}
