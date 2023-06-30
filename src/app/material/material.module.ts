import { NgModule } from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatTableModule} from "@angular/material/table";
import {MatInputModule} from "@angular/material/input";

const MaterialComponents = [
  MatButtonModule,
  MatCardModule,
  MatButtonModule,
  MatFormFieldModule,
  MatTableModule,
  MatInputModule
]
@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
