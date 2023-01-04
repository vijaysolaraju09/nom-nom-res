import {useState} from "react";
import './index.css'
import { Formik } from "formik";
import * as EmailValidator from "email-validator";
import * as Yup from "yup";

const [userData, setUserData] = useState({
    username:"",
    email:"",
    password:""
})

const SignupPage = () => (  
    
    <Formik
        initialValues={{ username: "", email: "", password: "" }}
        onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
                console.log("Logging in", values);
                setSubmitting(false);
            }, 500);
        }}
        

        validationSchema={Yup.object().shape({
            username: Yup.string()
                .required("Username not provided")
                .min(8, "Should be 8 chars minimum.")
                .matches(/(?=.*[0-9])/, "Username must contain a number."),
            email: Yup.string()
                .email()
                .required("Required"),
            password: Yup.string()
                .required("Password not provided.")
                .min(8, "Password is too short - should be 8 chars minimum.")
                
                .matches(
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                    "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
                )
        })}
    >
        {props => {
            const {
                values,
                touched,
                errors,
                isSubmitting,
                handleChange,
                handleBlur,
                handleSubmit
            } = props;
            
            // const updateName = (event) => {
            //     handleChange()
            //     setUserData((prev)=> ({...prev,name: event.target.value}))
            // }
            // const updateEmail = (event) => {
            //     handleChange()
            //     setUserData((prev)=> ({...prev,email: event.target.value}))
            // }
            // const updatePassword = (event) => {
            //     handleChange()
            //     setUserData((prev)=> ({...prev,password: event.target.value}))
            // }


            return (
                <form className="form-container" onSubmit={handleSubmit}>
                    <label htmlFor="email">Username</label>
                    <input
                        name="username"
                        type="text"
                        placeholder="Username"
                        value={values.username}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.username && touched.username && "error"}
                    />
                    {errors.email && touched.email && (
                        <div className="error-msg">{errors.username}</div>
                    )}
                    <label htmlFor="email">Email</label>
                    <input
                        name="email"
                        type="text"
                        placeholder="Enter email ID"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.email && touched.email && "error"}
                    />
                    {errors.email && touched.email && (
                        <div className="error-msg">{errors.email}</div>
                    )}
                    <label htmlFor="email">Password</label>
                    <input
                        name="password"
                        type="password"
                        placeholder="Enter password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.password && touched.password && "error"}
                    />
                    {errors.password && touched.password && (
                        <div className="error-msg">{errors.password}</div>
                    )}
                    <button type="submit" disabled={isSubmitting}>
                        Signup
                    </button>
                </form>
            );
        }}
    </Formik>
);

export default SignupPage;