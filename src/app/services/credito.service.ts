import { Injectable } from '@angular/core';
import { Credito } from '../interfaces/credito';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreditoService {

	solicitudCredito: Credito[] = [];

  constructor( private http: HttpClient) { }

  getListCreditos(): Observable<any>{
	
	  return this.http.get<Credito[]>(`${ environment.url }list`)
	  .pipe(
		  tap(
			solicitudCredito => this.solicitudCredito = solicitudCredito
		  )
	  )
	
	
}
  guardarSolicitud(solicitud: any): Observable<any>{
	return this.http.post(`${ environment.url }save`, solicitud).pipe(
		catchError(err => {
			return of(err.error)
		})
	);
  }
}
