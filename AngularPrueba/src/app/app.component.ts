import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularPrueba';
  usuario = 'Nolan';

  recibirMensajeDelHijo(evento: string){
    alert(evento);
  }
}
