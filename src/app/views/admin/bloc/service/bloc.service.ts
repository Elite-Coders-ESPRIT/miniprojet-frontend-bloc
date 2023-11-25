import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from "rxjs";
import {Bloc} from "../model/bloc";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class BlocService {

  private baseUrl ="http://localhost:8081/bloc"

  constructor(private http: HttpClient,private router:Router) {

  }

  getBlocs(): Observable<Bloc[]>{
    console.log(this.baseUrl+"/");
    this.http.get(this.baseUrl+"/getAllBlocs").subscribe(value => console.log("Observable.subscribe returned : ",value));
    return this.http.get<Bloc[]>(this.baseUrl+"/getAllBlocs");
  }


  refreshPage() {
    console.log(this.router.url);
    this.router.navigate(["/admin"]).then(() => {
      this.router.navigate(["/admin/bloc"]);
      console.log(this.router.url);
    });
  }

  deleteBloc(idBloc: string): void {
      this.http.delete(this.baseUrl+"/deleteBloc/"+idBloc).subscribe(value => {
        console.log("item deleted");
        this.refreshPage();
      });
    console.log(this.baseUrl+"/deleteBloc/"+idBloc);
  }


  updateBloc(bloc: Bloc): Observable<Bloc> {
    return this.http.put<Bloc>(`${this.baseUrl}/updateBloc`, bloc);
  }

  addBloc(bloc:Bloc): Observable<Bloc> {
    return this.http.post(this.baseUrl+'/addBloc',bloc);
  }



}
