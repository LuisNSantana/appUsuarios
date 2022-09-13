import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url = '';
  token = '';
  constructor(private http:HttpClient) { }

  getUsuario(): Observable<any>{
    return this.http.get<any>(this.url);
  }
}
