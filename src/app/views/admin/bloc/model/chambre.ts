import {Bloc} from "./bloc";


export interface Chambre {

  idChambre? : number;
  numeroChambre? : number;
  reservations? : any;
  typeChambre? : string;
  bloc? : Bloc;

}
