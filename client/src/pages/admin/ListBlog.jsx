import React, { useEffect, useState } from 'react'
import { blog_data } from '../../assets/assets'
import BlogTableItem from '../../components/admin/BlogTableItem'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'



const ListBlog = () => {

  const [blogs, setBlogs] = useState([])
  const {axios} = useAppContext()

  const fetchBlogs = async () => {
    console.log("hey amn")
    try{
      const {data} = await axios.get('/api/admin/blogs')
      console.log("blog-data: ", data)
      if(data.success){
        console.log("New blogs fetched from backend:", data.blogs);
        setBlogs(data.blogs)
      }else{
        toast.error(data.message)
      }
    }catch(error){
        toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchBlogs()
  },[])


  return (
    <div className='flex-1 pt-5 px-5 sm:pt-12 sm:pl-16 bg-blue-50/50'>
      <h1> All Blogs </h1>

      <div className='relative h-4/5 max-w-4xl overflow-x-auto shadow rounded-lg bg-white scrollbar-hide'>
                <table className='w-full text-sm  text-gray-500'>

                    <thead className='text-xs text-gray-700 uppercase text-left'> 
                        <tr>
                            <th scope='col' className='px-2 py-4 xl:px-6'> # </th>
                            <th scope='col' className='px-2 py-4'> Blog Title </th>
                            <th scope='col' className='px-2 py-4 max-sm:hidden'> Date </th>
                            <th scope='col' className='px-2 py-4 max-sm:hidden'> Status </th>
                            <th scope='col' className='px-2 py-4'> Actions </th>
                        </tr>
                    </thead>

                    <tbody>
                        {blogs.length > 0 && blogs.map((blog, index) => {
                            return <BlogTableItem key={blog._id} blog={blog} fetchBlogs={fetchBlogs} index={index+1}/> 
                        })}
                    </tbody>

                </table>
      </div>

    </div>
  )
}

export default ListBlog
