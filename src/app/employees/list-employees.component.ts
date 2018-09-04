import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEMployeesComponent implements OnInit {

  employees : Employee[]=[
    {
      id: 1,
      name: 'varma',
      gender: 'male',
      email: 'varma@gmail.com',
      phoneNumber: 9566270765  ,
      contactPreference:'email',
      dateOfBirth:new Date('10/2/1991'),
      department: 'cse',
      isActive: true,
      photoPath: 'assets/images/img1.jpg'

    },
    {
      id: 2,
      name: 'aravind',
      gender: 'male',
      email: 'aravind@gmail.com',
      phoneNumber: 9566270765  ,
      contactPreference:'email',
      dateOfBirth:new Date('03/08/1991'),
      department: 'cse',
      isActive: true,
      photoPath: 'assets/images/img2.jpg'

    }, 
    {
      id: 3,
      name: 'surya',
      gender: 'female',
      email: 'surya@gmail.com',
      phoneNumber: 9566270765  ,
      contactPreference:'email',
      dateOfBirth:new Date('10/05/1991'),
      department: 'cse',
      isActive: true,
      photoPath: 'assets/images/img3.jpg'

    }
  ];


  constructor() { }

  ngOnInit() {
  }

}
