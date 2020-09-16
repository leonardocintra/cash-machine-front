import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseMeta, Transfer } from './transfer.model';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  readonly baseUrl = "https://cvc-api.herokuapp.com/v1/scheduling/transfer";

  constructor(private http: HttpClient) { }

  read(cpf: string): Observable<ResponseMeta[]> {
    return this.http.get<ResponseMeta[]>(`${this.baseUrl}/customer?cpf=${cpf}`);
  }

  create(transfer: Transfer): Observable<ResponseMeta> {
    return this.http.post<ResponseMeta>(this.baseUrl, transfer);
  }
}
