import {Component, OnInit, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Ping-Pong';
  tableNumbers = [1,2,3,4]
  _start=false;
  modalRef!: BsModalRef;
  constructor( private modalService: BsModalService){
  }

  ngOnInit(){
  }

  start(){
    this._start=true;
  }
  clear(){
    this._start=false;
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  protected readonly localStorage = localStorage;
}
