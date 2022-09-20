import { ReactComponent as Like } from "./icons/iconLike.svg";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { editCard } from "../../store/cardsSlice";
import style from './form.module.css'
// get props frop props,  get id trow useParams(), send value to redux and change

function FormEdit({ contact }) {
  const [edit, setEdit] = useState([]);

  let { idParam } = useParams();

  const findContact = (id) => {
    const editable = contact.find((el) => el.id === Number(id));
    setEdit(editable);
  };

  useEffect(() => {
    findContact(idParam);
  }, []);

  const dispatch = useDispatch();

  const {
    firstName,
    city,
    phoneNumber,
    website,
    lastName,
    country,
    email,
    id,
    image,
  } = edit;

  const initialValues = {
    id,
    image,
    firstName,
    city: city,
    phoneNumber: phoneNumber,
    website: website,
    lastName: lastName,
    country: country,
    email: email,
  };

  //  const initialValues = {
  //     firstName:  edit.firstName,      Why it doesnt work in this way? logic?
  //     city: '',
  //     phoneNumber: '',
  //     website: '',
  //     lastName: '',
  //     country: '',
  //     email: '',
  //   };

  const onSubmit = (value) => {
    dispatch(editCard(value));
  };

  // const  validate = (values) => {
  //     let errors = {};

  //     if(!values.firstName){
  //         errors.firstName = 'required'
  //     }

  //     if(!values.city){
  //         errors.city ='required'
  //     }

  //     if(!values.email){
  //         errors.email = 'required'
  //     }else if(!values.email.toLowerCase().match(
  //         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  //         )
  //     ){
  //         errors.email = 'invalid email'
  //     }
  //     return errors;
  // }

  const validationSchema = Yup.object({
    firstName: Yup.string().required("required"),
    city: Yup.string().required("required"),
    phoneNumber: Yup.number().required("required"),
    website: Yup.string().required("required"),
    lastName: Yup.string().required("required"),
    country: Yup.string().required("required"),
    email: Yup.string().email("invalid email").required("required"),
  });

  return (
    <div key={edit.id}>

      <div className={style.imgSection}>

        <div className={style.imgBox}>
          <img alt="profile img" src={image} className={style.img}/>
        </div>

        <div>
          <Like />
        </div>
      </div>

  <div >
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className={style.formContainer}>
          <div >
            <label htmlFor="firstName" className={style.label}>
            First name:
            </label>
            <Field
              type="text"
              id="firstName"
              className={style.input}
              name="firstName"
              //   onChange={formik.handleChange}         Field component automaticly match up name with state
              //   onBlur={formik.handleBlur}            shorten boilerplate
              //   value={formik.values.firstName  }
              // {...formik.getFieldProps('firstName')}
            />
            <ErrorMessage name="firstName" />
          </div>

          <div >
            <label htmlFor="city" className={style.label}>
              City:
            </label>
            <Field
              type="text"
              id="city"
              className={style.input}
              name="city"
              // onChange={formik.handleChange}
              // value={formik.values.city }
              // onBlur={formik.handleBlur}
            />

            <ErrorMessage name="city" />
          </div>

          <div >
            <label htmlFor="phoneNumber" className={style.label}>
           
              Phone Number:
            </label>
            <Field
              type="text"
              id="phoneNumber"
              className={style.input}
              name="phoneNumber"
              // onChange={formik.handleChange}
              // onBlur={formik.handleBlur}
              // value={formik.values.phoneNumber }
            />

            <ErrorMessage name="phoneNumber" />
          </div>

          <div>
            <label htmlFor="website" className={style.label}>
              Website:
            </label>
            <Field
              type="text"
              id="website"
              className={style.input}
              name="website"
              // onChange={formik.handleChange}
              // onBlur={formik.handleBlur}
              // value={formik.values.website }
            />
            <ErrorMessage name="website" />
          </div>

          <div>
            <label htmlFor="lastName" className={style.label}>
              Last name:
            </label>
            <Field
              type="text"
              id="lastName"
              className={style.input}
              name="lastName"
              // onChange={formik.handleChange}
              // onBlur={formik.handleBlur}
              // value={formik.values.lastName}
            />

            <ErrorMessage name="lastName" />
          </div>

          <div>
            <label htmlFor="country" className={style.label}>
              Country:
            </label>
            <Field
              type="text"
              id="country"
              className={style.input}
              name="country"
              // onChange={formik.handleChange}
              // onBlur={formik.handleBlur}
              // value={formik.values.country }
            />
            <ErrorMessage name="country" />
          </div>

          <div>
            <label htmlFor="email" className={style.label}>
              Email:
            </label>
            <Field
              type="text"
              id="email"
              className={style.input}
              name="email"
              // onChange={formik.handleChange}
              // onBlur={formik.handleBlur}
              // value={formik.values.email}
            />
            <ErrorMessage name="email" />
          </div>
          {/* {formik.errors.email?<div>{formik.errors.email}</div>:null} display errors.email massege be useformik()  */}

          <button type="submit" className={style.btn}> Save Contact </button>
        </Form>
      </Formik>
    </div>
 </div>
  );
}

export default FormEdit;
