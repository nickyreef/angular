import {AfterViewInit, Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appTruncate]'
})
export class TruncateDirective implements AfterViewInit {
  // el: ElementRef;

  constructor(private el: ElementRef) {
    // this.el = elm;
  }

  ngAfterViewInit() {
    if (this.el.nativeElement.textContent.length > 20) {
      this.el.nativeElement.textContent = this.el.nativeElement.textContent.substr(0, 20) + '...';
    }
  }

}
