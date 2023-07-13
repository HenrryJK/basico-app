import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(
    public wsService: WebsocketService

  ) { }

   sendMessage(mensaje: string){
      const payload ={
        de: 'Henrry',
        cuerpo: mensaje
      };

      this.wsService.emit('mensaje' , payload);
   }

   // despues de haber creado el listen que esta en el websocket.service
    getMessages(){
      return this.wsService.listen('mensaje-nuevo');
    }


}
