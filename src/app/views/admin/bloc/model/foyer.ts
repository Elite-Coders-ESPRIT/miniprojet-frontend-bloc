import {Bloc} from "./bloc";
import {Universite} from "./universite";


export interface Foyer {

  idFoyer? : number;
  nomFoyer? : string;
  capaciteFoyer? : number;
  universite? : Universite;
  blocs? : Bloc[];

}
