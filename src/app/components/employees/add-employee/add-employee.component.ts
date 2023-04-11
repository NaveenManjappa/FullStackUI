import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  employee: Employee = {
    id: '0',
    name: '',
    email: '',
    department: '',
    salary: 0,
    phone: 0
  }

  constructor(private employeeService: EmployeesService, private router: Router) {


  }
  addEmployee() {
    console.log(this.employee);
    this.employeeService.addEmployee(this.employee).subscribe({
      next: emp => {
        console.log(emp);
        this.router.navigate(['employees']);
      }
    })
  }
}
