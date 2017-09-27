import {
    Component, ViewContainerRef, ComponentFactoryResolver, Type, Input, SimpleChanges,
    OnChanges, Renderer, ElementRef
} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {BootgridItem} from '../interfaces/bootgrid-item';

@Component({
    selector: 'bg-content',
    template: '<!--<b>Inserted Component:</b>-->'
})
export class BgContentComponent implements OnChanges {
    @Input() set size(value: string) {
        if(!this._size) {
            this._size = new BehaviorSubject(value);
        } else {
            this._size.next(value);
        }
    }
    @Input() set focus(value: boolean) {
        if(!this._focus) {
            this._focus = new BehaviorSubject(value);
        } else {
            this._focus.next(value);
        }
    }

    get item():BootgridItem {
        return this._item;
    }
    @Input() set item(item: BootgridItem) {
        this._item = item;
    }

    @Input() insertedComponent: Type<any>;
    @Input() availableComponents: Array<any>;
    private _item: BootgridItem;
    private _size: BehaviorSubject<string>;
    private _focus: BehaviorSubject<boolean>;

    constructor(private el: ElementRef, private componentFactoryResolver: ComponentFactoryResolver,
                private viewContainerRef: ViewContainerRef,private renderer: Renderer) {
    }


    ngOnChanges(changes: SimpleChanges) {
      if(changes['insertedComponent']) {
          let {insertedComponent} = changes;
          if (insertedComponent.currentValue) {
              this.renderComponent();
          }
      }
    }

    renderComponent() {
        //console.log(this.insertedComponent);

        // If we don't want to hold a reference to the component type, we can also say:

        //this.viewContainerRef.clear();
        //this.renderer.createElement(this.el.nativeElement,'app-random-widget');
        //componentRef.changeDetectorRef.detectChanges();
        const comp = this.getComponent();
        //console.log(comp);

        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(comp);
        this.viewContainerRef.clear();
        let componentRef = this.viewContainerRef.createComponent(componentFactory);
        componentRef.instance['size'] = this._size.asObservable();
        componentRef.instance['focus'] = this._focus.asObservable();
        componentRef.instance['item'] = this._item;
        componentRef.changeDetectorRef.detectChanges();
        //console.log(comp, componentFactory, componentRef);
    }

    getComponent = function(){
        for (let i = 0; i < this.availableComponents.length; i++){
            //console.log(this.availableComponents[i]);
            if(this.availableComponents[i].selector === this.insertedComponent) {
                //console.log('match');
                return this.availableComponents[i].component;
            }
        }

    }

}
