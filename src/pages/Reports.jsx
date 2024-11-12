import { ReportList } from "../cmps/ReportsSystem/ReportList"
import { ReportFilter } from "../cmps/ReportsSystem/ReportFilter"


export function Reports() {
    return (
        <div className="reports-page">
            <h1>Reports</h1>
           <ReportFilter/>
           <ReportList/>
           
        </div>
    )
}