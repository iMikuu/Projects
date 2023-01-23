import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  count = 0;
  buttonDisabled = false;

  constructor() { }

  ngOnInit(): void {
  }

  logClick() {
    this.count++;
    console.log("times you clicked the balloon: " + this.count);
    if(this.count == 5) {
      this.buttonDisabled = true;
      alert("that's enough, balloon privileges revoked");
    }
  }
}