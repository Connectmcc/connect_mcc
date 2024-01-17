import React from 'react'
import StoryCircle from '../../Components/Story/StoryCircle'
import HomeRight from '../../Components/HomeRight/HomeRight'
import PostCard from '../../Components/Posts/PostCard';
import CreatePostModal from '../../Components/Posts/CreatePostModal';
import { useDisclosure } from '@chakra-ui/react';
const Homepage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <div>
        <div  className="mt-10 flex w-[100%] justify-center">
            <div  className="w-[44%] px-10" >
             <div  className="StoryDiv flex space-x-2 border p-4 rounded-md justify-start w-full">
              {[1,1,11].map((item) => (
             <StoryCircle />
              ))}
             </div>

            <div  className="Space-y-10 w-full mt-10">
              {[1,1].map((item)=><PostCard/>)}
        </div>
    </div>
    <div  className="w-[35%]">
      <HomeRight/>
    </div>
    </div>

   
    </div>
  );
};

export default Homepage