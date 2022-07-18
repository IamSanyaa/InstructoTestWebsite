import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {
  lat = 42.423917;
  lng = 25.624902;
  constructor() { }

  ngOnInit(): void {
  }

}
