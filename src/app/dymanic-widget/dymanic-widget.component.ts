import { Component,Input } from '@angular/core';
import { AdComponent } from './dymanicParent'
@Component({
  selector: 'app-dymanic-widget',
  templateUrl: './dymanic-widget.component.html',
  styleUrls: ['./dymanic-widget.component.css']
})
export class DymanicWidgetComponent implements AdComponent{
  @Input() data:any

}
