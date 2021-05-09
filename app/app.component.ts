import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit{
  
  number:number=30;
  code='ILS';
  date=new Date();
  constructor(){}

  ngOnInit(){

  }
  
}
