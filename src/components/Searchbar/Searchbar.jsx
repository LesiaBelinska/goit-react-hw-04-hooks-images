import { Formik, Form, Field } from "formik";

const initialValues = {
    search: '',
};

export const Searchbar = ({ onSubmit }) => {
    
    const handleSubmit = (values, { resetForm }) => {
        onSubmit(values.search);
        resetForm();
    };

        return (
            <header className="searchbar">
                 <Formik
                initialValues={initialValues}
            onSubmit={handleSubmit}>
                {({ isSubmitting }) => (
                    <Form autoComplete="off">
                    <button type='submit' disabled={isSubmitting}><span className="button-label">Search</span></button>
                    <Field
                        type="text"
                        name="search"
                    />
                </Form>
                )}
            </Formik>
           </header>
        )
    
}




















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

//         if (this.state.search.trim() === '') {
//             alert('Enter search query')
//             return;
//         };
        
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