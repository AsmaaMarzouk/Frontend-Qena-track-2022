import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[LightBox]'
})
export class ColorBoxDirective implements OnChanges {
// document.getElementById("").style.backgroundColor =
// borderColor:string ="red";

@Input() hoverColor:string ="green";
@Input('LightBox') DefaultColor:string ="blue";
  constructor(private elem:ElementRef) {
    // elem.nativeElement.style.border=`2px solid ${this.borderColor}`;
    // elem.nativeElement.style.border=`2px solid ${this.DefaultColor}`;

   }
  ngOnChanges(): void {
    this.elem.nativeElement.style.border=`2px solid ${this.DefaultColor}`;
    
  }



 @HostListener('mouseenter')  onMouseEnter(){
  this.elem.nativeElement.style.border=`2px solid ${this.hoverColor}`;

   }
   @HostListener('mouseout')  onMouseOut(){
    this.elem.nativeElement.style.border=`2px solid ${this.DefaultColor}`;
  
     }

}
