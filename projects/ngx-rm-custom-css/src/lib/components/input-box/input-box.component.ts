import { Component, Input } from '@angular/core';
import { NgxRmCustomCssService } from '../../ngx-rm-custom-css.service';

@Component({
  selector: 'rm-input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.css']
})
export class InputBoxComponent {
  @Input() decimal = false;
  @Input() decimalSeparator = '.';
  @Input() allowNegatives = false;
  @Input() allowPaste = true;
  @Input() negativeSign = '-';
  // @Input() minLength = -Infinity;
  @Input() maxLength = Infinity;
  @Input() maxValue = Infinity;
  @Input() minValue = -Infinity;
  @Input() pattern?: string | RegExp;
  @Input() numberOnly =false;
 //General

  @Input() pd = '10px';
  @Input() mg?:string;
  @Input() height?:string ;
  @Input() width?:string ;
  @Input() textColor?:string ;
  @Input() bgColor?:string ;
  @Input() border?:string ;
  @Input() borderRadius?:string ;
  @Input() placeHolder:string='' ;
  id= NgxRmCustomCssService.GenerateRandomId();
  @Input() disabled:boolean=false ;

}
