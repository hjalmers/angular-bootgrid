import {
  Component, OnInit, ViewContainerRef, ComponentFactoryResolver, Type, Input, SimpleChanges,
  OnChanges, ModuleWithComponentFactories, ComponentFactory, Renderer, ElementRef
} from '@angular/core';

@Component({
  selector: 'bg-content',
  template: '<b>Inserted Component:</b>',
  styleUrls: ['bg-content.component.css']
})
export class BgContentComponent implements OnChanges {
  @Input() insertedComponent: Type<any>;
  @Input() availableComponents: Array<any>;

  constructor(private el: ElementRef, private componentFactoryResolver: ComponentFactoryResolver,
              private viewContainerRef: ViewContainerRef,private renderer: Renderer) {
  }


  ngOnChanges(changes: SimpleChanges) {
    let { insertedComponent } = changes;
    if (insertedComponent.currentValue) {
      this.renderComponent();
    }
  }

  renderComponent() {
    //console.log(this.insertedComponent);

    // If we don't want to hold a reference to the component type, we can also say:

    //this.viewContainerRef.clear();
    //this.renderer.createElement(this.el.nativeElement,'app-random-widget');
    //componentRef.changeDetectorRef.detectChanges();
    const comp = this.getCompoment();
    //console.log(comp);

    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(comp);
    this.viewContainerRef.clear();
    let componentRef = this.viewContainerRef.createComponent(componentFactory);
    componentRef.changeDetectorRef.detectChanges();
  }

  getCompoment = function(){
    for (let i = 0; i < this.availableComponents.length; i++){
      //console.log(this.availableComponents[i]);
      if(this.availableComponents[i].selector === this.insertedComponent) {
        //console.log('match');
        return this.availableComponents[i].component;
      }
    }

  }

}
