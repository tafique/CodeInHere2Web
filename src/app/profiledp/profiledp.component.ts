import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profiledp',
  templateUrl: './profiledp.component.html',
  styleUrls: ['./profiledp.component.css']
})
export class ProfiledpComponent implements OnInit {

  constructor() { }
  displayJyoti: boolean = false;
  displayKaran: boolean = false;

  

  showJyoti() {
    this.displayJyoti = true;
  }

  showKaran() {
    this.displayKaran = true;
  }

  ngOnInit(): void {
  }

}
