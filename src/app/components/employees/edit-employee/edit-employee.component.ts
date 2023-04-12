import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  employeeDetail: Employee = {
    id: '0',
    name: '',
    email: '',
    department: '',
    salary: 0,
    phone: 0
  }
  constructor(private route: ActivatedRoute, private employeeService: EmployeesService, private router: Router) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: params => {
        const id = params.get('id');

        if (id) {
          this.employeeService.getEmployee(id).subscribe({
            next: res => {
              this.employeeDetail = res;
            }
          })
        }
      }
    });
  }

  updateEmployee() {
    this.employeeService.updateEmployee(this.employeeDetail.id, this.employeeDetail).subscribe({
      next: res => {
        this.router.navigate(['employees']);
      }
    })
  }

  deleteEmployee(id: string) {
    this.employeeService.deleteEmployee(this.employeeDetail.id).subscribe({
      next: res => {
        this.router.navigate(['employees']);
      }
    })
  }
}
