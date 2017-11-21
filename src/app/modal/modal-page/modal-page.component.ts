import { Component } from '@angular/core';
import { ROUTE_ANIMATION_HOST, ROUTE_ANIMATION } from '../../app.routing.animation';
import { MzBaseModal } from 'ng2-materialize';
import { ModalExampleComponent } from '../modal-example/modal-example.component';
import { ModalProgrammaticComponent } from '../modal-programmatic/modal-programmatic.component';
import { MzModalService } from 'ng2-materialize';
import { MzInjectionService } from 'ng2-materialize/dist/shared'


@Component({
  selector: 'app-modal-page',
  templateUrl: './modal-page.component.html',
  styleUrls: ['./modal-page.component.css'],
  host: ROUTE_ANIMATION_HOST, // tslint:disable-line:use-host-property-decorator
  animations: [ROUTE_ANIMATION]
})
export class ModalPageComponent {
  constructor(private injectionService: MzInjectionService, private modalService: MzModalService) {
    this.injectionService.setRootViewContainer({
      hostView: {
        rootNodes: [document.body],
      },
    });
  }

  public openModal() {
    this.modalService.open(ModalProgrammaticComponent);
  }
}
