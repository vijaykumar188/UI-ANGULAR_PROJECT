import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ru-banner',
  templateUrl: './ru-banner.component.html',
  styleUrls: ['./ru-banner.component.scss']
})
export class RuBannerComponent implements OnInit, OnChanges {
  @Input() message = '';
  @Input() multipleLines = false;
  @Input() messages = [];
  @Input() showIcon = false;
  @Output() onCloseClick = new EventEmitter();
  @Output() onIconClick = new EventEmitter();

  showAlert = true;
  constructor() { }

  ngOnInit() {
    if (this.messages.length === 1) {
      this.message = this.messages[0];
    }
  }

  ngOnChanges() {
    if (this.messages.length === 1) {
      this.message = this.messages[0];
    }

  }
  closeClick() {
    this.showAlert = false;
    this.onCloseClick.emit("close");
  }

  iconClick() {
    this.onIconClick.emit();
  }
}
