import { Component, Input, OnInit } from '@angular/core';
import { intermediaryInterface } from 'src/app/interface/intermediaryInterface';

@Component({
  selector: 'app-intermediary',
  templateUrl: './intermediary.component.html',
  styleUrls: ['./intermediary.component.css']
})
export class IntermediaryComponent implements OnInit {
  
  constructor() { }
  num=10;
  @Input() intermediaries: intermediaryInterface[] = [{ name:'', tel:'', mail:'' }];
  @Input() i: number = 0;
  ngOnInit(): void {
  }
}
