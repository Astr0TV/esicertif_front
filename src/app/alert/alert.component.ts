import { Component, OnInit,Input } from '@angular/core';


@Component({
  selector: 'hello',
  template: `<h1>Ajoute avec succès {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class AlertComponent implements OnInit {
  @Input() name: string;

  constructor() { }

  ngOnInit(): void {
  }

}
