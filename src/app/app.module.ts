import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

// import component
import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { PostsComponent } from './components/posts/posts.component';

// import services
import {TodoDataService} from "./services/todo-data.service";
import {PostsDataService} from "./services/posts-data.service";


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    TodoDataService,
    PostsDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
