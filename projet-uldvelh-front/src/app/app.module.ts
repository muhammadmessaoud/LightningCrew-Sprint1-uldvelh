import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AboutComponent } from './about/about.component';
import { OhFourComponent } from './oh-four/oh-four.component';
import { LoginComponent } from './login/login.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { LibraryListPlayerComponent } from './library-list/library-list.component';
import { BookCardComponent } from './library-list/book-card/book-card.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookItemComponent } from './book-list/book-item/book-item.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    OhFourComponent,
    LoginComponent,
    InscriptionComponent,
    LibraryListPlayerComponent,
    BookCardComponent,
    BookListComponent,
    BookItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
