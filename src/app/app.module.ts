import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule, MatInputModule, MatListModule, MatProgressBarModule} from "@angular/material";
import {FormsModule} from "@angular/forms";
import {HeaderComponent} from "./components/header/header.component";
import {TodoService} from "./todo.service";
import {HttpClientModule} from "@angular/common/http";
import {TodoListComponent} from "./components/list/list.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    HttpClientModule,
    MatListModule,
    MatProgressBarModule
  ],
  providers: [
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
