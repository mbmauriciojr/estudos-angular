import {
  Directive,
  HostBinding,
  HostListener,
  Input,
  OnInit
} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
  @HostListener('mouseenter') onMouseOver(){
      // this._renderer.setStyle(
      //   this._elementRef.nativeElement,
      //   'background-color',
      //   'yellow'
      // );
      this.backgroundColor = this.highlightColor;
    }
  
  @HostListener('mouseleave') onMouseLeave(){
    // this._renderer.setStyle(
    //   this._elementRef.nativeElement,
    //   'background-color',
    //   'white'
    // );
    this.backgroundColor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') backgroundColor!: string;

  @Input() defaultColor: string = 'white';
  @Input() highlightColor: string = 'yellow';

  constructor(
    // private _elementRef: ElementRef,
    // private _renderer: Renderer2
  ) { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }
}
