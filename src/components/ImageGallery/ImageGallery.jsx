import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem.jsx";

import s from "./ImageGallery.module.css";

export const ImageGallery = ({ images }) => {
    return (
        <ul className={s.ImageGallery}>
            {images.map(({ id, webformatURL, tags }) => {
                return (
                    <ImageGalleryItem
                        key={id}
                        src={webformatURL}
                        tags={tags} />
                )
            })}
        </ul>
    )
};






// import { Component } from "react";

// import { Rings } from "react-loader-spinner";
// import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem.jsx";

// export class ImageGallery extends Component{

//     state = {
//         images: [],
//         error: null,
//         status: 'idle',
//     };

//     componentDidUpdate(prevProps, prevState) {

//         if (prevProps.search !== this.props.search) {

//             this.setState({ status: 'pending' });
//             fetch(`https://pixabay.com/api/?key=23122721-ac4409033b31871735d6c9bbc&q=${this.props.search}`)
//                 .then(response => {
//                     if (response.ok) {
//                         return response.json();
//                     }
//                     return Promise.reject(
//                         new Error(`ERROR ${this.props.search}`)
//                     )
//                 })
//                .then(image => this.setState({ image, status:'resolved' }))
//                 .catch(error=>this.setState({error, status:'rejected'}))
        
//         };
//     };

//     render() {

//         const { status } = this.state;
//         if (status === 'pending') {
//             return <Rings
//                     height="100"
//                     width="100"
//                     color='grey'
//                     ariaLabel='loading'
//                 />
//         }

//         if (status === 'rejected') {
//             return <h1>{this.state.error.message}</h1>
//         }

//         if (status === 'resolved') {
//             return (
//                 <ul>
//                  {this.state.images.map((image) => {
            
//                      return (
//                         <ImageGalleryItem
//                         key={image.id}
//                         image={image.webformatURL}
//                     tag={image.tags}/>
//                     )
//         })}
//            </ul>
//             )
//         }
        
//     }
   
// }

// ************

//  {images.map(({ id, image, tag }) => {
//                 return (
//                     <ImageGalleryItem
//                         key={id}
//                         image={image}
//                         tag={tag}
//                     />
//                 );
//             })} 

  
//                 {this.state.error && <h1>{this.state.error.message}</h1>} */}
//                  {this.state.loading && <Rings
//                     height="100"
//                     width="100"
//                     color='grey'
//                     ariaLabel='loading'
//                 />} 
//                 <div><img
//                     src={this.state.image.largeImageURL}
//                     alt=""
//                     width="500"
//                 /></div> 