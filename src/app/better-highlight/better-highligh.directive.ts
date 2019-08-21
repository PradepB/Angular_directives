import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighligh]'
})
export class BetterHighlighDirective implements OnInit {
  @Input() defaultColor: string= 'transparent'
  @Input('appBetterHighligh') highlightColor: string= 'blue'
@HostBinding('style.backgroundColor') backgroundColor:string
  constructor(private eleRef: ElementRef, private renderer: Renderer2) { }
  ngOnInit() {
    // this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'blue')
    this.backgroundColor=this.defaultColor
  }
  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'blue')
    this.backgroundColor=this.highlightColor
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'transparent')
    this.backgroundColor=this.defaultColor
  }
}
