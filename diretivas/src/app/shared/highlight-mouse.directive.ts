import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appHighlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseOver(){
    // this._renderer.setStyle(
    //   this._elementRef.nativeElement,
    //   'background-color',
    //   'yellow'
    // );
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave(){
    // this._renderer.setStyle(
    //   this._elementRef.nativeElement,
    //   'background-color',
    //   'white'
    // );
    this.backgroundColor = 'white';
  }

  @HostBinding('style.backgroundColor') backgroundColor!: string;

  constructor(
    // private _elementRef: ElementRef,
    // private _renderer: Renderer2
  ) { }
}
