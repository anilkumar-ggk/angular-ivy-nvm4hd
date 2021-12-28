import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  formData = {};
  formFields = [
    {
      name: 'firstName',
      id: 'firstName',
      type: 'text',
      label: 'First Name',
      placeholder: 'Enter your firstname here',
      isRequired: true,
      isDisabled: false,
      apiDataKey: 'fName',
    },
    {
      name: 'address',
      id: 'address',
      type: 'text',
      label: 'Postal Address',
      placeholder: 'Enter your address here',
      isRequired: true,
      isDisabled: false,
      apiDataKey: 'address',
    },
  ];

  onFormSubmit() {
    debugger;
    alert('Form submitted');
  }
}
