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
      label: 'Enter your firstname here',
      isRequired: true,
      isDisabled: false,
      apiKey: 'fName',
    },
    {
      name: 'lastName',
      id: 'lastName',
      type: 'text',
      label: 'Enter your firstname here',
      isRequired: true,
      isDisabled: false,
      apiKey: 'fName',
    },
  ];

  onFormSubmit() {
    debugger;
    alert('Form submitted');
  }
}
