import { Component } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    employees: Array<Employee> = [];
    selectedEmployee!: Employee;
    constructor(
        private apiService: ApiService
    ) {
        this.getEmployees()
    }

    getEmployees() {
        this.apiService.getEmployees().subscribe({
            next: (res: any) => {
                this.employees = res.employees;
                this.selectEmployee(this.employees[0])
            },
            error: (e: any) => {}
        })
    }

    selectEmployee(employee: Employee): void {
        this.selectedEmployee = employee;
    }

    calculatePopularity(employee: Employee): string {
        return ((employee.popularity * 2.5) + 10) + 'px';
    }

    isAColleague(employee: Employee): boolean {
        return this.selectedEmployee.colleagues.includes(employee.name);
    }
}


interface Employee {
    "name": string
    "popularity": number
    "biography": string
    "image": string
    "colleagues": Array<string>
}
