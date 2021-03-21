import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
// This allows the product alert component to emit an event when the value of the notify property changes.

@Component({
  selector: 'app-notify-me',
  templateUrl: './notify-me.component.html',
  styleUrls: ['./notify-me.component.css']
})
export class NotifyMeComponent implements OnInit {
  @Input() product;
  @Output() notify = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

}