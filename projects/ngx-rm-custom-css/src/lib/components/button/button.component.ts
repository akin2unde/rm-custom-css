import { Component, Input } from '@angular/core';
// import * as feather from 'feather-icons';

@Component({
  selector: 'rm-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() label = 'New Button';
  @Input() smallSize = false;
  @Input() pd = '10px';
  @Input() mg = '0px';
  @Input() height?:string ;
  @Input() width?:string ;
  @Input() textColor?:string ;
  @Input() bgColor?:string ;
  @Input() border?:string ;
  @Input() borderRadius?:string ;
  @Input() disabled:boolean=false ;
  @Input() aspectRatio?:number ;

  ngAfterViewInit() {
    // feather.replace();
  }
}
