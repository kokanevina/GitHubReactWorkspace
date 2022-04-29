import { Link } from "react-router-dom";
import { empArray } from "../Data/EmployeeArray";

export function Employees(){
    return (
        <table border="1">
            <caption>EMPLOYEES</caption>
            <thead>
                <tr><th>ID</th><th>NAME</th><th>SALARY</th><th>QUALIFICATION</th></tr>
            </thead>
            <tbody>
                {
                    empArray.map((employee)=>{
                        return (
                            <tr key={employee.empId}>
                                <td>{employee.empId}</td>
                                <td>{employee.empName}</td>
                                <td>{employee.empSalary}</td>
                                <td>{employee.empQualification}</td>
                                <td><Link to={'/showsalary/'+employee.empId}>Search Salary Details</Link></td>
                            </tr>
                        );
                    })
                }
            </tbody>
        </table>
    );
}