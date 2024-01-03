import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuevo',//nombre de nuestra etiqueta
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.scss'],
})
export class NuevoComponent{
  @Input() image: string ="";
  @Input() description: string="";
  constructor() { }
}
