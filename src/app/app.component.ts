import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  formData = {
    fName: '',
    lName: '',
  };
  formFields = [
    {
      name: 'firstName',
      id: 'firstName',
      type: 'text',
      label: 'Enter your firstname here',
      placeholder: 'Enter your firstname here',
      isRequired: true,
      isDisabled: false,
      apiDataKey: 'fName',
    },
    {
      name: 'lastName',
      id: 'lastName',
      type: 'text',
      label: 'Enter your lastname here',
      placeholder: 'Enter your lastname here',
      isRequired: true,
      isDisabled: false,
      apiDataKey: 'lName',
    },
  ];

  onFormSubmit() {
    debugger;
    alert('Form submitted');
  }
}
