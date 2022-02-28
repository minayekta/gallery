import React from 'react'
import GalleryImg from './data';

const Gallery = () => {
    console.log(GalleryImg)
    return (
       <div className="grid grid-cols-12  px-5 py-3 bg-gray-200">
       {GalleryImg.map((item)=>{
           return(
           <div className="col-span-4 bg-white m-2 px-2 py-2">
           <img width="100%" className="mb-2 fluid" src={item.img}/>
       <h1 className="mb-3 text-lg ">Lights</h1>
       <p className="mb-2 text-lg ">Lorem ipsum dolor..

       </p> 
       </div>)
       })}
   
   
           
      
       </div>
    )
}

export default Gallery
