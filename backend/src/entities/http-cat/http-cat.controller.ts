import { Controller, Get, Param } from '@nestjs/common';
import { catchError, Observable, of } from 'rxjs';
import { HttpResponse } from '../../interfaces/http-cat-response.interface';
import { HttpCatService } from './http-cat.service';

@Controller('http-cat')
export class HttpCatController {
  constructor(private readonly service: HttpCatService) {}

  @Get(':code')
  getHttpCode(
    @Param('code') code: number,
  ): Observable<HttpResponse | { imageUrl: string }> {
    return this.service.getHttpCode(code).pipe(
      catchError((error) => {
        console.error(error);
        return of({
          imageUrl: '../assets/http.cat.404.jpeg',
          contentType: 'image/jpeg',
        });
      }),
    );
  }

  @Get(':range')
  getHttpCodesRange(@Param('range') range: number): Observable<HttpResponse> {
    return this.service.getHttpCodesRange(range);
  }
}
