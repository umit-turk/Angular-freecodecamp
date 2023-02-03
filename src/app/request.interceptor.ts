import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    console.log('request interceptor', request);
    const newRequest = request.clone({
      headers: new HttpHeaders({ token: '12345fwefew' }),
    });
    if(request.method == "POST"){
      return next.handle(newRequest);
    }else{
      return next.handle(request);
    }
  }
}
