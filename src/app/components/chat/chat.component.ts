import { Component, OnDestroy, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit , OnDestroy {
  texto = '';
  mensajeSubscription: Subscription;
  constructor(
  public chatService:ChatService

  ) { }

  ngOnInit(): void {
   this.mensajeSubscription =  this.chatService.getMessages().subscribe (msg =>{
        console.log(msg);
    });
  }

  ngOnDestroy(){
      this.mensajeSubscription.unsubscribe();
  }

  enviar(){
    this.chatService.sendMessage(this.texto);
    this.texto = '';
    // console.log(this.texto);
  }

}
