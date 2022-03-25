import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  descripcion: number;

  constructor() { 
    this.descripcion = 0;
  }

  ngOnInit(): void {
  }

  public sumar(){
    console.log(this.descripcion);
    this.descripcion++;
  }

  public restar(){
    console.log(this.descripcion);
    this.descripcion--;
  }
}
