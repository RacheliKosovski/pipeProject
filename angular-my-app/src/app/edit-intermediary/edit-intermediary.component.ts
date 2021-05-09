import { Component, Input, OnInit } from '@angular/core';
import { intermediaryInterface } from 'src/app/interface/intermediaryInterface';

@Component({
  selector: 'app-edit-intermediary',
  templateUrl: './edit-intermediary.component.html',
  styleUrls: ['./edit-intermediary.component.css']
})
export class EditIntermediaryComponent implements OnInit {
  @Input() currentEdit: intermediaryInterface = { name:'', tel:'', mail:'' };
  constructor() { }

  ngOnInit(): void {
  }

}
