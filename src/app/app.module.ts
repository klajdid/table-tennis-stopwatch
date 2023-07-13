import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TableTimerComponent } from './ping-pong-table-timer/table-timer/table-timer.component';
import {ReactiveFormsModule} from "@angular/forms";
import {BsModalService, ModalModule} from "ngx-bootstrap/modal";

@NgModule({
  declarations: [
    AppComponent,
    TableTimerComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    ModalModule,
  ],
  providers: [BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
