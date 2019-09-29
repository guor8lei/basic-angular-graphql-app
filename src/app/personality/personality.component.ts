import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core'
@Component({
  selector: 'app-personality',
  templateUrl: './personality.component.html',
  styleUrls: ['./personality.component.css']
})
export class PersonalityComponent implements OnInit {
  @Output() notify = new EventEmitter();

  submitNum($event: any) {
    this.notify.emit($event);


  }
  constructor() { }

  ngOnInit() {
  }



}
