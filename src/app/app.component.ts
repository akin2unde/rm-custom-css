import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-test';
  dataList = [
    {
      id: 1,
      name: 'Item 1'
    },
    {
      id: 2,
      name: 'Item 2'
    }
  ];
  key = 'name' // Name of the key to be used to identify the attribute using which the item's text should be displayed.

defaultTitle = 'Select'; // Default text to be shown when no items are selected.

selectedItem = null;
itemChanged(e: any): void {
  // The item which was selected/unselected will be available here. 'id' will have the value of the selected item or 0 if the item was deselected. <keyName> should be set as per the key declared above. It will be 'name' in this example.
}

}
