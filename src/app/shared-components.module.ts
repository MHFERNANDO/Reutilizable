import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { IonicModule } from '@ionic/angular';
import { ColorListComponent } from './color-list/color-list.component';



@NgModule({
  declarations: [NavBarComponent,ColorListComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [NavBarComponent,ColorListComponent]
})
export class SharedComponentsModule { }
