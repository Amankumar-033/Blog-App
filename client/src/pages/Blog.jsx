import React, { use } from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { assets, blog_data } from '../assets/assets';
import Navbar from '../components/Navbar';
import Moment from 'moment';
import { comments_data } from '../assets/assets';
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import { useAppContext } from '../context/AppContext';
import toast from 'react-hot-toast';



const Blog = () => {
  const {id} = useParams();
  const {axios} = useAppContext()

  const [data, setData] = useState(null)
  const [comments, setComments] = useState([]);

  const [name, setName] = useState('');
  const [content, setContent] = useState('');





  const fetchBlogData = async () => {
    try{
      const {data} = await axios.get(`/api/blog/${id}`)
      data.success ? setData(data.blog) : toast.error(data.message)
    }catch(error){
      toast.error(error.message)
    }
  }



  const fetchCommentsData = async () => {
    try{
      const {data} = await axios.post('/api/blog/comments', {blogId: id})
      data.success ? setComments(data.comments) : toast.error(data.message)
    }catch(error){
      toast.error(data.message)
    }
  }



  useEffect(() => {
    fetchBlogData();
    fetchCommentsData();
  }, []);




  const addComment = async (e) => {
    e.preventDefault();
    try{

      const {data} = await axios.post('/api/blog/add-comment', {blog: id, name, content})
  
      if(data.success){
        toast.success(data.message)
        setName('')
        setContent('')
        console.log("aman" + {data})
      }
      else{
       toast.error(data.message) 
      }
    }catch(error){
      toast.error(error.message)
    }
  }
  


  return data ? (


    <div className='relative'>
     
    <img src={assets.gradientBackground} className='absolute -top-50 -z-1 opacity-50' alt="gradient-background" />
      
      < Navbar />


      <div className='text-center text-gray-500 nt-600'>
        <p className='font-medium text-primary py-4'> Published on {Moment(data.createdAt).format('MMMM Do YYYY')}</p>
        <h1 className='text-2xl sm:text-5xl font-semibold max-w-2xl mx-auto text-gray-800'> {data.title} </h1>
        <h2 className='mx-auto truncate my-5 mx-w-lg'> {data.subTitle} </h2>
        <p className='px-4 py-1 inline-block rounded-full mb-6 border text-sm border-primary/35 bg-primary/5 text-primary font-medium'> Aman kumar </p>
      </div>

      {/* This s is the blog page for {data.title} and here is the content of the blog. */}
      <div className='m-5 max-w-5xl md:mx-auto my-10 mt-6'>
        <img src={data.image} alt="blog-image" className='rounded-3xl mb-5' />
        <div className='rich-text mx-w-3xl mx-auto' dangerouslySetInnerHTML={{__html: data.description}}></div>

        {/* Comment section */}
        <div className='mt-14 mb-10 mx-w-3xl mx-auto'>
          <p className='font-semibold mb-4'>Comments ({comments.length})</p>

          <div className='flex flex-col gap-4'>
            {comments.map((comment,index) => (

              <div key={index} className='relative bg-primary/2 border border-primary/5 mx-w-xl p-4 rounded text-gray-600'>

                <div className='flex items-center gap-3 mb-2'>
                  <img src={assets.user_icon} className='w-6' />
                  <p className='font-medium'>{comment.name}</p>
                </div>

                  <p className='text-sm ml-8 max-w-md'>{comment.content}</p>
                  <div className='absolute right-4 bottom-3 flex items-center gap-2 text-xs'>{Moment(comment.createdAt).fromNow()}</div>

              </div>))} 
          </div>

        </div>


        {/* Add Comment/Message box */}
        <div className='mx-w-3xl mx-auto'>
          <p className='font-semibold mb-4'>Leave a comment</p>
          <form  onSubmit={addComment} className='flex flex-col items-start gap-4 max-w-lg'>
              <input onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder='Your Name' className='border-gray-300 rounded p-2 border w-full outline-none' required />
              <textarea onChange={(e) => setContent(e.target.value)} value={content} placeholder='Your Comment' className='border-gray-300 rounded p-2 border w-full outline-none h-48' required></textarea>
              <button type='submit' className='bg-primary text-white px-8 p-2 hover:scale-102 transition-all cursor-pointer'>Submit</button>
          </form>
        </div>


        {/* Social media links */}
        <div className='my-24  mx-auto'>
          <p className='font-semibold my-4'> Share this article on social media </p>
          <div className='flex'>
              <img src={assets.facebook_icon} alt="facebook" className='cursor-pointer'/>
              <img src={assets.twitter_icon} alt="twitter"  className='cursor-pointer'/>
              <img src={assets.googleplus_icon} alt="google"  className='cursor-pointer'/>
          </div>
        </div>
      </div>


      {/* Footer */}
      <Footer />

    </div>)
     : 
     <Loader />
}

export default Blog
