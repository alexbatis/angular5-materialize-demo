import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalExampleComponent } from './modal-example/modal-example.component';
import { MaterializeModule } from 'ng2-materialize';
import { ModalPageComponent } from './modal-page/modal-page.component';
import { ModalProgrammaticComponent } from './modal-programmatic/modal-programmatic.component';

@NgModule({
  imports: [
    CommonModule,
    MaterializeModule.forRoot()
  ],
  declarations: [
    ModalExampleComponent,
    ModalProgrammaticComponent,
    ModalPageComponent
  ],
  entryComponents: [
    ModalProgrammaticComponent
  ]
})
export class ModalModule { }
