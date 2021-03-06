import { Injectable } from '@angular/core';
import { HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor() { }

  public getBaseUrl(){
    const baseUrl = 'https://my-json-server.typicode.com/';
    return baseUrl;
}

public getConfig(){
    let headers: HttpHeaders;
    headers = new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    });
    return {
        headers:headers
    };
}
}
