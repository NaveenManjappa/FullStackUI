import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
  //employees: Employee[] = [];
  employees: Employee[] = [
    {
      id: '1',
      name: 'John',
      email: 'john@email.com',
      phone: 9883838,
      salary: 50000,
      department: 'HR'
    },
    {
      id: '2',
      name: 'Tom',
      email: 'tom@email.com',
      phone: 88439,
      salary: 60000,
      department: 'IT'
    },
    {
      id: '3',
      name: 'Jenny',
      email: 'Jenny@email.com',
      phone: 783783,
      salary: 80000,
      department: 'Accounts'
    },
  ];

  ngOnInit(): void {

  }
}
