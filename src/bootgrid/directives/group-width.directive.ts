import {Directive, ElementRef, OnInit, Renderer2} from '@angular/core';
import {ResizeEvent} from 'angular-resizable-element';

@Directive({
    selector: '[appGroupWidth]',
    host: {
        '(window:resize)': 'onResize($event)'
    }
})
export class GroupWidthDirective implements OnInit {

    constructor(private renderer: Renderer2,private hostElement: ElementRef) {
    }

    ngOnInit() {
        this.checkSize();
    }

    onResize($event: any) {
        this.checkSize();
    }

    checkSize() {
      const PARENT_WIDTH = window.getComputedStyle(this.hostElement.nativeElement.parentElement, null).getPropertyValue("width");
        const WIDTH = window.getComputedStyle(this.hostElement.nativeElement, null).getPropertyValue("width");

        if(parseFloat(WIDTH) >= parseFloat(PARENT_WIDTH)) {
            this.renderer.addClass(this.hostElement.nativeElement, 'full');
        } else {
            this.renderer.addClass(this.hostElement.nativeElement, 'half');
        }
    }

}
