import React from 'react'
import service from "../appwrite/configuration"
import { Link } from 'react-router-dom'

function PostCard({ $id, title, featuredImage }) {
    const imageUrl = featuredImage 
        ? service.getFilePreview(featuredImage) 
        : '/path/to/placeholder-image.jpg'; // Provide a path to a local placeholder image if needed

    return (
        <Link to={`/post/${$id}`}>
            <div className='w-full bg-gray-100 rounded-xl p-4 transition-transform duration-200 hover:scale-105 hover:shadow-lg flex flex-col'>
                <div className='w-full mb-4 overflow-hidden rounded-xl flex justify-center items-center'>
                    <img
                        src={imageUrl}
                        alt={title}
                        className='w-full h-64 object-cover object-center rounded-xl' 
                    />
                </div>
                <h2
                    className='text-xl font-bold text-gray-900 line-clamp-2' 
                >
                    {title}
                </h2>
            </div>
        </Link>
    )
}

export default PostCard