import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_KEY, BASE_URL } from '../services/api-config';

@Injectable()
export class ApikeyInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
// Check if the request should have an additional header
if (request.url.includes(BASE_URL)) {
  const modifiedRequest = request.clone({
    setHeaders: {
      Authorization: `Bearer ${API_KEY}`
    }
  });
  return next.handle(modifiedRequest);
}

// If the condition is not met, proceed with the original request
return next.handle(request);
  }
}
