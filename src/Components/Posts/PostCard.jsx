import React from 'react'

const PostCard = () => {
  return (
    <div>
        <div className='border rounded-md w-full'>
            <div className='flex justify-between items-center w-full py-4 px-5'>
                <div  className='flex items-center'>
                    <img  className='h-12 w-12 rounded-full'
                     src ="https://cdn.pixabay.com/photo/2023/07/29/06/28/bird-8156308_1280.jpg "
                    alt=" "
                    />
                    <div>
                        <p className="font-semibold text-sm ">username</p>
                        <p className="font-thin text-sm"> location</p>
                    </div>
                </div>
                <div>
               
                </div>
            </div>
        </div>
    </div>
  )
}

export default PostCard