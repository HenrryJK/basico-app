import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  public socketStatus = false;
  constructor(
    private socket: Socket

  ) {
    this.checkStatus();

  }

  // saber cuando se conect y cuando se desconecta
  checkStatus(){
     this.socket.on('connect' , () =>{
        console.log('Conectado al servidor');
        this.socketStatus = true;
     });

     this.socket.on('disconnect' , () =>{
      console.log('Desconectado del servidor');
      this.socketStatus = false;
     });
  }

    // Emitir un mensaje mediante sockets al servidor
    emit(evento: string , payload?: any , callback?: Function) {
        this.socket.emit(evento , payload ,callback);
        console.log('Emitiendo' , evento);
    }

    // escucha cualquier evento que emita el setvidor
    listen( evento: string){
        return this.socket.fromEvent(evento);
    }

}
