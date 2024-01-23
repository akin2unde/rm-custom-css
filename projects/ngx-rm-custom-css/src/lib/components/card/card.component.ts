import { Component, Input } from '@angular/core';
import { NgxRmCustomCssService } from '../../ngx-rm-custom-css.service';

@Component({
  selector: 'rm-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() pd = '10px';
  @Input() mg?:string;
  @Input() height:string="50px" ;
  @Input() width:string="50px" ;
  @Input() textColor?:string ;
  @Input() bgColor?:string ;
  @Input() border?:string ;
  @Input() borderRadius?:string ;
  @Input() placeHolder:string='' ;
  @Input() boxShadow?:string ;
  @Input() aspectRatio:number=1 ;
  id= NgxRmCustomCssService.GenerateRandomId();
  @Input() disabled:boolean=false ;
}
