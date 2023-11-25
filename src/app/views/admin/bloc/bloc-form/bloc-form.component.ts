import {Component, Inject, Input} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Bloc} from "../model/bloc";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-bloc-form',
  templateUrl: './bloc-form.component.html',
  styleUrls: ['./bloc-form.component.css']
})
export class BlocFormComponent {
  @Input() action? : string;
  blocToAdd : Bloc = new class implements Bloc {
    capaciteBloc: number=0;
    nomBloc: string="";
  };
  @Input() bloc? : Bloc;


  constructor(private dialogRef: MatDialogRef<BlocFormComponent>,@Inject(MAT_DIALOG_DATA) public data: { action: string, bloc: Bloc}) {
    this.action = data.action;
    this.bloc = data.bloc;
  }

  onUpdate(): void {
    this.dialogRef.close(this.bloc);
  }

  onCancel(): void {
    console.log(this.bloc);
    this.dialogRef.close();
  }

  onInsert(): void {
    console.log(this.blocToAdd);
    this.dialogRef.close(this.blocToAdd);
  }
}
