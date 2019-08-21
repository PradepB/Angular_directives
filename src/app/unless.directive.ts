import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      this.veRef.createEmbeddedView(this.templateRef)
    } else {
      this.veRef.clear()
    }
  }
  constructor(
    private templateRef: TemplateRef<any>, private veRef: ViewContainerRef
  ) { }

}
