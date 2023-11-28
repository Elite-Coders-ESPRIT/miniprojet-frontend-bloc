import {Foyer} from "./foyer";
import {Chambre} from "./chambre";


export interface Bloc {

  idBloc? : number;
  nomBloc? : string;
  capaciteBloc? : number;
  foyers? : Foyer;
  chambres? : Chambre[];

}
