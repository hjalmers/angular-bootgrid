import {Observable} from 'rxjs/Observable';
import {BootgridItem} from '../interfaces/bootgrid-item';

export class BgItem {
    size: Observable<string>;
    focus: Observable<boolean>;
    item: BootgridItem;
    configureItem(property: string, value: any) {
        // trigger a reflow using timeout, maybe we can come up with something better...
        setTimeout(()=>this.item[property] = value,0);
    }
}
