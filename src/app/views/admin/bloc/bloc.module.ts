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


@NgModule({
  declarations: [
    BlocComponentComponent,
    BlocFormComponent,
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
