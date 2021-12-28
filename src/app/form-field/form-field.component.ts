import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/forms';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.css'],
})
export class FormFieldComponent implements OnInit {
  @Input() props: object;
  @Input() formModel;

  constructor() {}

  ngOnInit() {}
}
