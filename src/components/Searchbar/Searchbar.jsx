import { Formik, Form, Field } from "formik";
import * as yup from 'yup';
import PropTypes from 'prop-types'; 
import {BsSearch} from "react-icons/bs"

import s from "./Searchbar.module.css";

const schema = yup.object().shape({
    search: yup.string().required(),
});

const initialValues = {
    search: '',
};

export const Searchbar = ({ onSubmit }) => {
    
    const handleSubmit = (values, { resetForm }) => {
          if (initialValues.search.trim() === '') {
            alert('Enter search query')
            return;
        };
        onSubmit(values.search);
        resetForm();
    };

    return (
        <header className={s.Searchbar}>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={schema}
            >
                <Form
                    className={s.Form}
                    autoComplete="off">
                    <button
                        className={s.Button}
                        type='submit'>
                        <span><BsSearch className={s.Icon} /></span>
                    </button>
                    <Field
                        className={s.Input}
                        type="text"
                        name="search"
                        placeholder="Search images and photos"
                    />
                </Form>
            </Formik>
        </header>
    )
    
};

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};




















// import { Component } from "react";

// export class Searchbar extends Component {

//     state = {
//         search: '',
//     };

//     handleChange = (event) => {
//         const { value } = event.currentTarget;
//         this.setState({search: value.toLowerCase()});
//     };

//     handleSubmit = (event) => {
//         event.preventDefault();

        // if (this.state.search.trim() === '') {
        //     alert('Enter search query')
        //     return;
        // };
        
//         this.props.onSubmit(this.state.search);
//         this.reset();
//     }

//     reset = () => {
//         this.setState({
//             search: '',
//         })
//     };


//     render() {
//         return (
//             <header className="searchbar">
//                 <form className="form" onSubmit={this.handleSubmit}>
//                     <button type="submit" className="button">
//                         <span className="button-label">Search</span>
//                     </button>

//                     <input
//                         name="search"
//                         value={this.state.search}
//                         className="input"
//                         type="text"
//                         autoComplete="off"
//                         autoFocus
//                         placeholder="Search images and photos"
//                         onChange={this.handleChange}
//                     />
//                 </form>
//             </header>
//         );
//     }
// }