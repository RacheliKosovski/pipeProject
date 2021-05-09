import { Component } from '@angular/core';
import { intermediaryInterface } from 'src/app/interface/intermediaryInterface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  currentEdit: number = -1;
  setEdit(index: number) {
    this.currentEdit = index;
  }
  intermediaries:intermediaryInterface[] = [
    { name:"MOSHe cohen", tel:"0584758745", mail:"m14445@gmail.com"},
    { name:"natan levi", tel:"0547896325", mail:"cbv546@gmail.com"},
    { name:"ruth reuveni", tel:"0568974587", mail:"FGHdf5646@gmail.com"},
    { name:"yael maman", tel:"0504178295", mail:"ds45@gmail.com"}
  ]
}