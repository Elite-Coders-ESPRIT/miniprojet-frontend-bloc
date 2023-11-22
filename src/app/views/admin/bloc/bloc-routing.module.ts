import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BlocComponentComponent} from "./bloc-component/bloc-component.component";


const routes: Routes = [
  {path: "", component : BlocComponentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlocRoutingModule {


}
