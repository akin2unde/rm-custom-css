import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'rm-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {
  @Input('data') data: Array<any>=[];
  @Input('defaultTitle') defaultTitle: string | undefined;
  @Input('keyName') keyName: string ="name";
  @Input('showCheckBox') showCheckBox: boolean | undefined;

  @Output() itemSelected: EventEmitter<any> = new EventEmitter();

  @Input('selectedItem') selectedItem: any;
  showMenuItems = false;

  selectItem(currentItem: any): void {
    this.showMenuItems = false;
    this.data.filter(
      (item: any) => {
        if (currentItem != item) item.isSelected = false;
      }
    );

    currentItem.isSelected = !currentItem.isSelected;

    this.selectedItem = currentItem.isSelected ? currentItem : null;

    this.itemSelected.emit({ id: currentItem.isSelected ? currentItem.id : 0, [this.keyName]: currentItem[this.keyName] });
  }
}
