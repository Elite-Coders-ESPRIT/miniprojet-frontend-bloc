import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlocRoutingModule } from './bloc-routing.module';
import {BlocComponentComponent} from "./bloc-component/bloc-component.component";
import {MatExpansionModule} from "@angular/material/expansion";
import {AppComponent} from "../../../app.component";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { BlocFormComponent } from './bloc-form/bloc-form.component';
import {FormsModule} from "@angular/forms";
import { FilterByBlocNamePipe } from './pipe/filter-by-bloc-name.pipe';
import { AffectationChambreComponent } from './affectation-chambre/affectation-chambre.component';




@NgModule({
  declarations: [
    BlocComponentComponent,
    BlocFormComponent,
    FilterByBlocNamePipe,
    AffectationChambreComponent,
  ],
    imports: [
        CommonModule,
        BlocRoutingModule,
        MatExpansionModule,
        MatIconModule,
        MatButtonModule,
        FormsModule,
    ],
  bootstrap : [AppComponent]
})
export class BlocModule { }
