export default function EmployeeRegistration() {
    return (
        <>
            <div className="forms-edit-section double-form">
                <form method="get">
                    <h1>Employee Registration</h1>
                    <input type="text" name="Employe_Name" placeholder="Enter Name"></input>
                    <input type="text" name="Employe_Identity_Type" placeholder="Enter Adhar number"></input>
                    <input type="text" name="Employe_Post" placeholder="Enter post"></input>
                    <input type="text" name="Employe_address" placeholder="Enter address"></input>
                    <input type="text" name="Employe_contactNo" placeholder="Enter mobile number"></input>
                    <button type="submit" formaction="http://localhost:8080/restro/employe/register">Register</button>
                </form>
                <form method="get">
                    <h1>Check Employee details</h1>
                    <input type="text" name="Employe_id" placeholder="Enter Empoyee Id"></input>
                    <button type="submit" formaction="http://localhost:8080/admin/restro">Check</button>
                </form>
            </div>
        </>
    )
}