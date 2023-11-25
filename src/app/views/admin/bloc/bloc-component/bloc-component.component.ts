import { Component,OnInit  } from '@angular/core';
import {BlocService} from "../service/bloc.service";
import {Bloc} from "../model/bloc";
import { MatDialog } from '@angular/material/dialog';
import {BlocFormComponent} from "../bloc-form/bloc-form.component";
import {FilterByBlocNamePipe} from "../pipe/filter-by-bloc-name.pipe";
import {Chambre} from "../model/chambre";

@Component({
  selector: 'app-bloc-component',
  templateUrl: './bloc-component.component.html',
  styleUrls: ['./bloc-component.component.css'],
  providers:[FilterByBlocNamePipe]
})
export class BlocComponentComponent implements OnInit{

  blocs? : Bloc[];
  bloc? : Bloc;
  chambres? : Chambre[];
  searchTerm: string = '';

  constructor(private blocService: BlocService,private dialog:MatDialog) {

  }
  ngOnInit() {
    this.blocService.getBlocs().forEach(data => {
      console.log(data);
      this.blocs = data;
      console.log(this.blocs);
    }).then(r => {console.log("r : ",r)});
  }

  openBlocAddForm(): void {
    const dialogRef = this.dialog.open(BlocFormComponent, {
      width: '50%',
      height: '50%',
      data : {
        action : 'add',
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed with result: ${result}`);
      if(result ){
        this.insertBloc(result);
        this.blocService.refreshPage();
      }
    });
  }


  openBlocUpdateForm(bloc: Bloc): void {
    const dialogRef = this.dialog.open(BlocFormComponent, {
      width: '50%',
      height: '50%',
      data : {
        action : 'update',
        bloc: bloc
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.updateBloc(result);
      }
    })
  }
    openBlocShowForm(bloc: Bloc): void {
    const dialogRef = this.dialog.open(BlocFormComponent, {
      width: '50%',
      height: '50%',
      data : {
        action : 'show',
        bloc: bloc
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.updateBloc(result);
      }
    })
  }


  deleteItem(idBloc:string): void {
    const confirmed = window.confirm('Are you sure you want to delete?');

    if (confirmed) {
      console.log(idBloc);
      this.blocService.deleteBloc(idBloc.toString());
    }
    else
      {
        console.log('Deletion canceled');
      }
    }

  updateBloc(bloc: Bloc): void {
    this.blocService.updateBloc(bloc).subscribe(updatedBloc => {
      console.log('Bloc updated:', updatedBloc);
    });
  }

  insertBloc(bloc:Bloc): void {
    this.blocService.addBloc(bloc).subscribe(addedBloc => {
      console.log(this.bloc);
      console.log(bloc);
      console.log(addedBloc);
    })
  }

}
