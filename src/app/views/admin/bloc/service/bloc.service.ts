import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from "rxjs";
import {Bloc} from "../model/bloc";

@Injectable({
  providedIn: 'root'
})
export class BlocService {

  private baseUrl ="http://localhost:8081/bloc"

  constructor(private http: HttpClient) {

  }

  getBlocs(): Observable<Bloc[]>{
    console.log(this.baseUrl+"/");
    this.http.get(this.baseUrl+"/getAllBlocs").subscribe(value => console.log("Observable.subscribe returned : ",value));
    return this.http.get<Bloc[]>(this.baseUrl+"/getAllBlocs");
  }



  deleteBloc(idBloc: string | undefined): void {
    if(idBloc == undefined){
      console.log("undefined !!!!");
    }else {
      this.http.delete(this.baseUrl+"/deleteBloc/"+idBloc);
    }
    console.log(this.baseUrl+"/deleteBloc/"+idBloc);
  }


  updateBloc(bloc: Bloc): Observable<Bloc> {
    return this.http.put<Bloc>(`${this.baseUrl}/updateBloc`, bloc);
  }



}
