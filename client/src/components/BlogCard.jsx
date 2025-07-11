import React from 'react'
import { useNavigate } from 'react-router-dom';



const BlogCard = ({blog}) => {
    if(!blog)
        return null;
  
   const {title, description, category, image, _id} = blog;
   const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/blog/${_id}`)} className='w-full bg-white shadow rounded-lg overflow-hidden hover:scale-102 hover:shadow-primary/25 duration-300 cursor-pointer transition-shadow'>
       <img src={image} alt="blog-image" className='aspect-video' />
       <span className='text-xs ml-5 mt-4 px-3 py-1 inline-block rounded-full text-primary bg-primary/20'>{category}</span>
       <div className='p-5'>
            <h5 className='mb-2 font-medium text-gray-900'> {title} </h5>
            <p className='text-xs text-gray-600 mb-3' dangerouslySetInnerHTML={{"__html": description.slice(0,80)}}></p>
       </div>
    </div>
  )
}


export default BlogCard
