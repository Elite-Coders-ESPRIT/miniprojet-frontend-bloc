import { Component,OnInit  } from '@angular/core';
import {BlocService} from "../service/bloc.service";
import {Bloc} from "../model/bloc";
import { MatDialog } from '@angular/material/dialog';
import {BlocFormComponent} from "../bloc-form/bloc-form.component";
import {FilterByBlocNamePipe} from "../pipe/filter-by-bloc-name.pipe";
import {Chambre} from "../model/chambre";
import {Foyer} from "../model/foyer";

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
  idBlocToUpdate? : number;
  foyerToAdd? : Foyer;

  pageSize = 5;
  currentPage = 1;

  get paginatedItems() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    if (this.blocs != undefined){
      return this.blocs.slice(startIndex, startIndex + this.pageSize);
    }
    return null;
  }
  get totalPages() {
    return this.blocs!.length % this.pageSize === 0
      ? this.blocs!.length / this.pageSize
      : Math.floor(this.blocs!.length / this.pageSize) + 1;
  }
  constructor(private blocService: BlocService,private dialog:MatDialog) {

  }
  ngOnInit() {
    this.blocService.getBlocs().forEach(data => {
      this.blocs = data;
    }).then(r => {console.log("r : ",r)});
  }

  openBlocAddForm(): void {
    const dialogRef = this.dialog.open(BlocFormComponent, {
      width: '50%',
      height: '65%',
      data : {
        action : 'add',
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        console.log("DATA TO ADD :",result);
        this.insertBloc(result);
        this.blocService.refreshPage();
      }
    });
  }


  openBlocUpdateForm(bloc: Bloc): void {
    const dialogRef = this.dialog.open(BlocFormComponent, {
      width: '50%',
      height: '56%',
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

  insertBloc(dataToAdd:any): void {
    this.foyerToAdd = dataToAdd.foyers;
    console.log(this.foyerToAdd);
    this.blocService.addBloc(dataToAdd.bloc).subscribe(addedBloc => {
      console.log("added bloc : ",addedBloc);
      addedBloc.foyers = this.foyerToAdd;
      console.log("FOYER : ",addedBloc.foyers);
      this.blocService.updateBloc(addedBloc).subscribe(value => {
        console.log("NEXT : ",value);
      });
    })
  }

}
