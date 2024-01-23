import { NgModule } from '@angular/core';
import { NgxRmCustomCssComponent } from './ngx-rm-custom-css.component';
import { ButtonComponent } from './components/button/button.component';
import { CommonModule } from '@angular/common';
import { InputBoxDirective } from './directives/input-box.directive';
import { InputBoxComponent } from './components/input-box/input-box.component';
import { CardComponent } from './components/card/card.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';




@NgModule({
  declarations: [
    NgxRmCustomCssComponent,
    ButtonComponent,
    InputBoxDirective,
    InputBoxComponent,
    CardComponent,
    DropdownComponent
  ],
  imports: [
    CommonModule 
  ],
  exports: [
    NgxRmCustomCssComponent,
    ButtonComponent,
    InputBoxComponent,
    CardComponent,
    DropdownComponent
  ]
})
export class NgxRmCustomCssModule { }
