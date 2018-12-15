import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: Array<any> = [];

  constructor() {
    this.items = [
      { name: "https://i.imgur.com/eQj9bAZ.jpg" },
      { name: "https://i.imgur.com/eQj9bAZ.jpg" },
      { name: "https://i.imgur.com/eQj9bAZ.jpg" },
      { name: "https://i.imgur.com/eQj9bAZ.jpg" },
      { name: "https://i.imgur.com/eQj9bAZ.jpg" },
      { name: "https://i.imgur.com/eQj9bAZ.jpg" },
      { name: "https://i.imgur.com/eQj9bAZ.jpg" },
      { name: "https://i.imgur.com/eQj9bAZ.jpg" },
      { name: "https://i.imgur.com/eQj9bAZ.jpg" },
      { name: "https://i.imgur.com/eQj9bAZ.jpg" }
    ]
  }

  ngOnInit() {
  }

}
