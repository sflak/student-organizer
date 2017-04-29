import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AF } from "./providers/af";
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BucketComponent } from './bucket/bucket.component';
import { BucketDayComponent } from './bucket/bucket-day/bucket-day.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './header/profile/profile.component';
import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TodoItemComponent } from './todo/todo-list/todo-item/todo-item.component';
import {AlertModule} from 'ngx-bootstrap';
import { TodolistComponent } from './todolist/todolist.component';

export const firebaseConfig = {
    apiKey: "AIzaSyApveLqa1f_nEHdHU9T8zelKaQ42VitihY",
    authDomain: "honeydo-3d364.firebaseapp.com",
    databaseURL: "https://honeydo-3d364.firebaseio.com",
    projectId: "honeydo-3d364",
    storageBucket: "honeydo-3d364.appspot.com",
    messagingSenderId: "59476114875"
};

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: '', component: LoginPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    AppComponent,
    BucketComponent,
    BucketDayComponent,
    HeaderComponent,
    ProfileComponent,
    TodoComponent,
    TodoListComponent,
    TodoItemComponent,
    TodolistComponent
  ],
  providers: [AF],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(routes),
    MaterialModule.forRoot(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
