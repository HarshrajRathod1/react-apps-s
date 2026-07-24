import { Formik,Field,ErrorMessage,Form } from "formik"
import * as yup from "yup"
export function FormikDemo(){
    return(
        <div className=" container-fluid d-flex justify-content-center align-items-center vh-100" style={{backgroundColor:'whitesomke'}}>
            <Formik initialValues={{User:'',Age:0,Mobile:''}} validationSchema={yup.object({User:yup.string().required('User Required').min(4,'Name too Short'),Age:yup.number().required('Age Required').min(15,'min 15'),Mobile:yup.string().required('Mobile required').matches(/^\d{10}$/)})} onSubmit={(user)=>console.log(user)}>
                <Form style={{backgroundColor:'white'}} className="shadow-sm p-4 w-25 rounded-2">
                    <h2 className="fs-4 text-center fw-bold text-primary">Register</h2>
                    <dl>
                        <dt className="my-1">UserName</dt>
                        <dd><Field className="form-control" type="text" name="User"/></dd>
                        <dd className="text-danger"><ErrorMessage name="User" /></dd>

                        <dt className="my-1">Age</dt>
                        <dd><Field className="form-control" type="number" name="Age" /></dd>
                        <dd className="text-danger"><ErrorMessage name="Age" /></dd>

                        <dt className="my-1">Mobile</dt>
                        <dd><Field className="form-control" type="text" name="Mobile" /></dd>
                        <dd className="text-danger"><ErrorMessage name="Mobile" /></dd>
                    </dl>
                    <div className="d-flex justify-content-center"><button className="btn btn-primary" type="submit">Register</button></div>
                </Form>
            </Formik>
        </div>
    )
}