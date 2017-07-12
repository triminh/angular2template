import {Injectable} from '@angular/core';

@Injectable()

export class EmployeeService {
    getList(): any[] {
        let employees: any[] = [
            { Id: 1, Name: "Nguyen Van Tuan" },
            { Id: 2, Name: "Nguyen Thi Huong" },
            { Id: 3, Name: "Tran Van Hai" },
        ];
        return employees;
    }

}