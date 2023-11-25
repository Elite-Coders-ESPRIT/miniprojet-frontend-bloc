import {Bloc} from "./bloc";


export interface Chambre {

  idChambre? : number;
  numeroChambre? : string;
  reservations? : any;
  typeC? : string;
  bloc? : Bloc;

}
