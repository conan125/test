import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponseBase,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { mergeMap, catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class MyInterceptor implements HttpInterceptor {
  constructor() {
    alert(9);
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req = this.handleRequest(req);
    return next.handle(req).pipe(
      tap((evt) => console.log(evt)),
      mergeMap((evt) => this.handleResponse(evt))
    );
  }

  /**
   * 请求参数拦截处理
   */
  handleRequest(req: HttpRequest<any>) {
    // 统一加上服务端前缀
    let url = req.url;
    if (!url.startsWith('https://') && !url.startsWith('http://')) {
      url = environment.SERVER_URL + url;
    }
    console.log(`拦截器A在请求发起前的拦截处理`);
    let newReq = req.clone({ url });
    return newReq;
  }

  /**
   * 返回结果拦截处理
   */
  handleResponse(evt: any) {
    console.log('拦截器A在数据返回后的拦截处理');
    return new Observable<HttpEvent<any>>((observer) => {
      observer.next(evt);
    });
  }
}
