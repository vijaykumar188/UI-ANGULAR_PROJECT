import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss']
})
export class TextAreaComponent {
  @Input() isReadOnly = false;
  @Input() isDisabled = false;
  @Input() isRequired = false;
  @Input() value = ''
  @Input() placeholder = "Enter text"
  @Output() valueChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onValueChange() {
    this.valueChange.emit(this.value);
  }

}
