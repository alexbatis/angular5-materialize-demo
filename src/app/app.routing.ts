// tslint:disable:max-line-length

import { Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { CollapsibleComponent } from './collapsible/collapsible.component';
import { navbarComponent } from './navbar/navbar.component';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { ModalModule } from './modal/modal.module';
import { ModalExampleComponent } from './modal/modal-example/modal-example.component';
import { ModalPageComponent } from './modal/modal-page/modal-page.component';

export const ROUTES: Routes = [
    // home route
    { path: 'home', component: CardComponent },
    { path: 'test', component: TestComponent },
    { path: 'modal', component: ModalPageComponent },
    // redirect to home when route does not exists (must be last route)
    { path: '**', redirectTo: 'home' }
];
