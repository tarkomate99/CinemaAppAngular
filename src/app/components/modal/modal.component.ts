import { Input, ViewChild } from '@angular/core';
import { Component, ElementRef, OnInit } from '@angular/core';
import { ListComponentComponent } from '../list-component/list-component.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  dateText: string="";
  movieText: string="";

  constructor() {}

  ngOnInit(): void {
  }

}
