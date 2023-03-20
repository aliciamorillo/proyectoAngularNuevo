import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-nombres',
  templateUrl: './nombres.component.html',
  styleUrls: ['./nombres.component.scss']
})
export class NombresComponent implements OnInit{

  @Input() nombre: string = "Alicia";
  @Output() mensajeEmiter: EventEmitter<string> = new EventEmitter<string>();

  constructor() {};

  ngOnInit(): void {
    console.log("Hacemos OnInit al componente");
  }

  enviarMensajeAlPadre(): void{
    //alert(`Hola ${this.nombre}`)
    this.mensajeEmiter.emit(`Hola ${this.nombre}`);
  }

}
