
import { useParams } from "react-router-dom";
import { salArray } from "../Data/SalaryArray";
/* export function Salaries(){
  let {eid}= useParams(); // extract the parameters from current path.
    return (<>
        <b>{eid}</b>
        <table border="1">
            <tbody>
             {
              salArray.map(obj=>{
                if(obj.empId===parseInt(eid))
                    return (<tr key={obj.empId}>
                        <th>Id:</th><td>{obj.empId}</td>
                        <th>Monthly Salary:</th><td>{obj.}</td>
                        <th>Basic Salary:</th><td>{obj.basicSalary}</td>
                        <th>Gross Salary:</th><td>{obj.grossSalary}</td>
                    </tr>);
            })
            }
        </tbody>
        </table>
        
        </>
    );
} */

export function Salaries(){
    let {eid}= useParams(); // extract the parameters from current path.
      return (<>
          <b>{eid}</b>
          <table border="1"> 
               {
                salArray.filter(obj=>obj.empId===parseInt(eid)).map(salObj=>{
                    return (
                        <tbody key={salObj.empId}><tr><th>Id:</th><td>{salObj.empId}</td></tr>
                         <tr><th>Monthly Salary:</th><td>{salObj.empSalary}</td></tr>
                         <tr><th>Basic Salary:</th><td>{salObj.basicSalary}</td></tr>
                         <tr><th>Gross Salary:</th><td>{salObj.grossSalary}</td></tr>
                         </tbody>
                    );
                })
               }
          </table>
          </>
      );
  }