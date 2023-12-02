import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Bloc} from "../model/bloc";
import {Chambre} from "../model/chambre";
import {BlocService} from "../service/bloc.service";
import {Foyer} from "../model/foyer";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-bloc-form',
  templateUrl: './bloc-form.component.html',
  styleUrls: ['./bloc-form.component.css']
})
export class BlocFormComponent implements OnInit {
  @Input() action?: string;
  blocToAdd: Bloc = new class implements Bloc {
    capaciteBloc: number = 0;
    nomBloc: string = "";
    chambres: Chambre[] = [];
  };
  idFoyer: number = 0;
  @Input() bloc?: Bloc;
  dataToSend?: any;
  chambres?: Chambre[];
  foyers?: Foyer[];
  foyer?: Foyer;
  dataToAdd?: any;
  myForm!: FormGroup;

  receivedEvent: boolean = false;



  constructor(private dialogRef: MatDialogRef<BlocFormComponent>, @Inject(MAT_DIALOG_DATA) public data: { action: string, bloc: Bloc }, private blocService: BlocService,private fb: FormBuilder) {
    this.action = data.action;
    this.bloc = data.bloc;
    this.myForm = this.fb.group({
      nomBloc: ['', Validators.required],
      capaciteBloc: [0, [Validators.required,Validators.min(1)]],
    });
  }

  formIsValid(): boolean {
    return (
      this.blocToAdd.nomBloc != '' &&
      this.idFoyer != 0
    );
  }

  ngOnInit() {
    this.dataToSend = {
      bloc : this.bloc,
      dialogRef : this.dialogRef
    }
    if (this.data.action == "show" && undefined != this.data.bloc.chambres && this.data.bloc.chambres.length > 0) {
      this.chambres = this.data.bloc.chambres;
    }
    if (this.data.action == "add") {
      this.blocService.getFoyers().subscribe(data => {
        this.foyers = data;
      })
    }
  }

  onUpdate(): void {
    this.dialogRef.close(this.bloc);
  }

  onCancel(): void {
    console.log(this.bloc);
    this.dialogRef.close();
  }

  onInsert(): void {
    if (this.idFoyer != undefined && this.idFoyer > 0) {
      this.blocService.getFoyerById(this.idFoyer).forEach(val => {
          this.foyer = val;
          this.dataToAdd = {
            bloc: this.blocToAdd,
            foyers: this.foyer
          }

          console.log("dataToAdd from form :", this.dataToAdd);
          this.dialogRef.close(this.dataToAdd);
        }
      );
    }else if (this.idFoyer == 0){

    }
  }

  desaffecter(chambre: Chambre,bloc:Bloc) {
    console.log("Chambre a retirer : ",chambre);
    console.log("Bloc concerné : ",bloc);
    bloc.chambres?.slice(this.bloc?.chambres?.indexOf(chambre));
    this.blocService.updateBloc(bloc).subscribe((blocUpdated) => {
      console.log(blocUpdated);
      this.blocService.refreshPage();
    });
  }

  handleEvent(event:boolean) {
    this.receivedEvent = event;
    if(this.receivedEvent){
      this.dialogRef.close();
      this.blocService.refreshPage();
    }
  }
}
