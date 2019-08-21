import { Directive, OnInit, ElementRef } from "@angular/core";

@Directive({
    selector: "[appBasicHigghlight]",
})
export class BasicHignlightDirective implements OnInit {

    constructor(
        private elementRef: ElementRef
    ) {

    }

    ngOnInit() {
        this.elementRef.nativeElement.style.backgroundColor = "red"
    }
}