import {Bloc} from "./bloc";


export interface Chambre {

  idChambre? : number;
  numeroChambre? : string;
  reservations? : any;
  typeChambre? : string;
  bloc? : Bloc;

}
