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
    lName: 'Some default value',
  };
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
      name: 'lastName',
      id: 'lastName',
      type: 'text',
      label: 'Last Name',
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
