import { ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable, of } from 'rxjs';

@Injectable()
export class DataInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    call$: Observable<any>,
  ): Observable<any> {
    return of([]);
    /*return call$.pipe(
      map(data => ({ data, status: 'success' })),
      catchError(err => of({ err, status: 'error' })),
    );*/
  }
}
