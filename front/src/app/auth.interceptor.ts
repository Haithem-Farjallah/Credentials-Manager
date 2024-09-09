import {
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';

export const authInterceptor: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
) => {
  // Inject AuthService at runtime inside the interceptor function
  const auth = inject(AuthService);

  if (!req.url.includes('/login') || !req.url.includes('/register')) {
    const token = auth.getToken();
    let modifiedRequest = req;
    if (token) {
      modifiedRequest = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
    }
    return next(modifiedRequest);
  }

  // Proceed without modification for login route
  return next(req);
};
