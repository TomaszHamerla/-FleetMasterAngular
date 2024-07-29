import { Injectable } from '@angular/core';
import {MessageService} from "primeng/api";

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(
    private messageService: MessageService
  ) { }

  show(){
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' })
  }
}
