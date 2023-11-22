import { Component,OnInit  } from '@angular/core';
import {BlocService} from "../service/bloc.service";
import {Bloc} from "../model/bloc";
import {Observable} from "rxjs";
import { MatDialog } from '@angular/material/dialog';
import {BlocFormComponent} from "../bloc-form/bloc-form.component";

@Component({
  selector: 'app-bloc-component',
  templateUrl: './bloc-component.component.html',
  styleUrls: ['./bloc-component.component.css']
})
export class BlocComponentComponent implements OnInit{

  observables? : Observable<Bloc[]>;
  blocs? : Bloc[];

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
        action : 'add'
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed with result: ${result}`);
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
        // If the form was submitted, update the bloc
        this.updateBloc(result);
      }
    })
  }

  deleteItem(idBloc:any): void {
    const confirmed = window.confirm('Are you sure you want to delete?');

     if (confirmed) {
       console.log(idBloc);
      this.blocService.deleteBloc(idBloc.toString());
     } else {
       console.log('Deletion canceled');
    }
  }

  updateBloc(bloc: Bloc): void {
    this.blocService.updateBloc(bloc).subscribe(updatedBloc => {
      // Handle the updated bloc as needed
      console.log('Bloc updated:', updatedBloc);
    });
  }


}
