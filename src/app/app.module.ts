import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterializeModule } from 'ng2-materialize';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CollapsibleComponent } from './collapsible/collapsible.component';
import { CardComponent } from './card/card.component';
import { navbarComponent } from './navbar/navbar.component';
import { TestComponent } from './test/test.component';
import { ROUTES } from './app.routing';
import { ModalModule } from './modal/modal.module';

@NgModule({
  declarations: [
    AppComponent,
    CollapsibleComponent,
    CardComponent,
    navbarComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterializeModule.forRoot(),
    RouterModule.forRoot(ROUTES),
    ModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
