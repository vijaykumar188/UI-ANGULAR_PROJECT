import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ru-tab',
  templateUrl: './ru-tab.component.html',
  styleUrls: ['./ru-tab.component.scss']
})
export class RuTabComponent {
  @Input() items = [
    { id: 1, name: 'Parametes', isClicked: true },
    { id: 2, name: 'Requirements' },
    { id: 3, name: 'Task Breakup Template' },
    { id: 4, name: 'Similar Runbooks' }];
  @Output() valueChange = new EventEmitter();
  
  constructor() { }

  changeButton(val: any) {
    console.log(this.items);
    // if (!val.disabled){
    this.items.forEach((item) => { item['isClicked'] = false; });
    val['isClicked'] = true;
    this.valueChange.emit(val);
    // }
  }
}
