import React from 'react';
import Chucky from '../assets/movie2.jpg'
import Scar from '../assets/movie1.jpg'
import { FaPen } from 'react-icons/fa';
import { BiComment } from 'react-icons/bi';
import { FiUser } from 'react-icons/fi';

function Home() {
  return (
    <div className='w-full h-screen'>
      <nav className='w-full h-50 bg-white border border-b-[#f8f7ff]'>
        <div className='p-4 mx-5 flex justify-between'>
          <h1 className='text-[#9391ff] text-xl font-extrabold '>Dickson Mo.</h1> 

        <div className='flex flex-row'>
        <FaPen size={24} color='#9391ff' />
        </div>
      </div>
      </nav>
      
      <div className='w-full h-full bg-white'>
        <div className='flex justify-center p-2'>
          <div className='w-[370px] md:w-[530px] h-[200px] md:h-[280px] pr-5 rounded-lg'>
            <div className='absolute w-[370px] md:w-[530px] h-[200px] md:h-[280px] bg-gradient-to-r from-black rounded-lg'></div>
            <img src={Chucky} alt='content image' className='w-[370px] md:w-[530px] h-[200px] md:h-[280px] object-cover rounded-lg' />
            <div className='absolute w-full top-20 md:top-[15%] p-4 md:p-8'>
              <div className='text-center text-white w-[250px] md:w-[400px] '>
                <h1 className='text-lg md:text-3xl'>A bear and a monkey</h1>
                <p className='text-xs md:text-base font-light'>09 Sept</p>
                <p className='text-xs md:text-base'>Had plenty money. They went to the shop. For carrots and honey. When the bear and the monkey said, Carrots and ...</p>
              </div>
              <button className='my-2 px-2 p-1 md:p-2 flex justify-center border md:border-[1.6px] border-[#bbdefb] items-center rounded-md text-white text-xs md:text-base font-normal md:font-medium'>Read more</button>
            </div>
            
          </div>
          <div className='w-[530px] h-[280px] pl-5 rounded-lg hidden md:block'>
            <div className='absolute w-[530px] h-[280px] bg-gradient-to-r from-black rounded-lg'></div>
            <img src={Scar} alt='content image' className='w-[530px] h-[280px] object-cover rounded-lg' />
            <div className='absolute w-full top-[15%] p-4 md:p-8'>
            <div className='text-center text-white w-[400px] '>
              <h1 className='text-3xl'>A bear and a monkey</h1>
              <p className='font-light'>09 Sept</p>
              <p className=''>Had plenty money. They went to the shop. For carrots and honey. When the bear and the monkey said, Carrots and ...</p>
            </div>
            
            <button className='my-2 p-2 flex justify-center border-[1.6px] border-[#bbdefb] rounded-md text-white font-medium'>Read more</button>
            </div>
          </div>
        </div>

        <div className='flex p-4 md:p-10'>
        <button className='mr-4 my-2 p-2 flex justify-center border md:border-[1.6px] border-[#bbdefb] rounded-md w-full text-[#9391ff] font-normal md:font-medium'>Entertainment</button>
        <button className='mx-4 my-2 p-2 flex justify-center border md:border-[1.6px] border-[#bbdefb] rounded-md w-full text-[#9391ff] font-normal md:font-medium'>Lifestyle</button>
        <button className='mx-4 my-2 p-2 flex justify-center border md:border-[1.6px] border-[#bbdefb] rounded-md w-full text-[rgb(147,145,255)] font-normal md:font-medium'>Religion</button>
        <button className='mx-4 my-2 p-2 flex justify-center border md:border-[1.6px] border-[#bbdefb] rounded-md w-full text-[#9391ff] font-normal md:font-medium'>Health</button>
        <button className='mx-4 my-2 p-2 flex justify-center border md:border-[1.6px] border-[#bbdefb] rounded-md w-full text-[#9391ff] font-normal md:font-medium'>Food</button>
        <button className='mx-4 my-2 p-2 flex justify-center border md:border-[1.6px] border-[#bbdefb] rounded-md w-full text-[#9391ff] font-normal md:font-medium'>Politics</button>
        <button className='mx-4 my-2 p-2 flex justify-center  border md:border-[1.6px] border-[#bbdefb] rounded-md w-full text-[#9391ff] font-normal md:font-medium'>Relationship</button>
        <button className='mx-4 my-2 p-2 flex justify-center  border md:border-[1.6px] border-[#bbdefb] rounded-md w-full text-[#9391ff] font-normal md:font-medium'>Technology</button>
        <button className='mx-4 my-2 p-2 flex justify-center border-[#bbdefb] border md:border-[1.6px] rounded-md w-full text-[#9391ff] font-normal md:font-medium'>Education</button>
        <button className='my-2 p-2 flex justify-center border md:border-[1.6px] border-[#bbdefb] rounded-md w-full text-[#9391ff] font-normal md:font-medium'>Family</button>
             
        </div>

        <div className='p-4 md:p-10'>
          <h1 className='text-2xl md:text-4xl font-bold pb-4'>Trending</h1>
          <div className='flex flex-row gap-2'>
          <div className='w-[200px] md:w-[260px] h-full border-2 border-[#bbdefb] rounded-lg'>
            <img src={Chucky} alt='content image' className='w-[200px] md:w-[260px] h-[120px] md:h-[150px] object-cover rounded-t-lg ' />
            <div className='text-left p-2'>
              <h1 className='text-lg md:text-xl font-medium '>A bear and a monkey</h1>
              <p className='font-thin md:py-2'>10 September</p>
              <p className='text-xs md:text-base text-[#5c6972] '>Had plenty money. They went to the shop. For carrots and honey. When the bear and the monkey said, Carrots and ...</p>
            </div>
          </div>
          
          <div className='w-[200px] md:w-[260px] h-full border-2 border-[#bbdefb] rounded-lg'>
            <img src={Chucky} alt='content image' className='w-[200px] md:w-[260px] h-[120px] md:h-[150px] object-cover rounded-t-lg ' />
            <div className='text-left p-2'>
              <h1 className='text-lg md:text-xl font-medium '>A bear and a monkey</h1>
              <p className='font-thin md:py-2'>10 September</p>
              <p className='text-xs md:text-base text-[#5c6972] '>Had plenty money. They went to the shop. For carrots and honey. When the bear and the monkey said, Carrots and ...</p>
              
            </div>
          </div>
          </div>
        </div>

        <div>
        <div className='p-2 md:p-10'>
          <div className='w-full h-full border-t-2 border-b-2 border-[#bbdefb] rounded-md'>
          <div className='flex pt-5'>
            <div className='flex justify-center items-center border border-white shadow-md rounded-[50%] w-[35px] h-[35px]'>
                <FiUser size={24} color='#9391ff'/> 
            </div>
            <p className='font-medium px-2 '>Dickson Mo</p>
            <p className='font-thin md:py-2'>10 September</p>
          </div>
            <div className='px-4'>
              <h1 className='text-lg md:text-xl font-medium py-2'>A bear and a monkey</h1>
              <img src={Chucky} alt='content image' className='w-[370px] md:w-[800px] h-[170px] md:h-[200px] object-cover rounded-lg' />
            </div>
            <div className='flex flex-row p-4'>
              <BiComment size={24} color='#9391ff'/>
              <p>Discuss</p>
              <p className='pl-4'  ><span className='font-medium'>22</span> Likes</p>
            </div>
          </div>
        </div>

        
        <div className='p-2 md:p-10'>
          <div className='w-full h-full border-t-2 border-b-2 border-[#bbdefb] rounded-md'>
          <div className='flex pt-5'>
            <div className='flex justify-center items-center border border-white shadow-md rounded-[50%] w-[35px] h-[35px]'>
                <FiUser size={24} color='#9391ff'/> 
            </div>
            <p className='font-medium px-2 '>Dickson Mo</p>
            <p className='font-thin md:py-2'>10 September</p>
          </div>
            <div className='px-4'>
              <h1 className='text-lg md:text-xl font-medium py-2'>A bear and a monkey</h1>
              <img src={Chucky} alt='content image' className='w-[370px] md:w-[800px] h-[170px] md:h-[200px] object-cover rounded-lg' />
            </div>
            <div className='flex flex-row p-4'>
              <BiComment size={24} color='#9391ff'/>
              <p>Discuss</p>
              <p className='pl-4'  ><span className='font-medium'>22</span> Likes</p>
            </div>
          </div>
        </div>

        <div className='p-2 md:p-10'>
          <div className='w-full h-full border-t-2 border-b-2 border-[#bbdefb] rounded-md'>
          <div className='flex pt-5'>
            <div className='flex justify-center items-center border border-white shadow-md rounded-[50%] w-[35px] h-[35px]'>
                <FiUser size={24} color='#9391ff'/> 
            </div>
            <p className='font-medium px-2 '>Dickson Mo</p>
            <p className='font-thin md:py-2'>10 September</p>
          </div>
            <div className='px-4'>
              <h1 className='text-lg md:text-xl font-medium py-2'>A bear and a monkey</h1>
              <img src={Chucky} alt='content image' className='w-[370px] md:w-[800px] h-[170px] md:h-[200px] object-cover rounded-lg' />
            </div>
            <div className='flex flex-row p-4'>
              <BiComment size={24} color='#9391ff'/>
              <p>Discuss</p>
              <p className='pl-4'  ><span className='font-medium'>22</span> Likes</p>
            </div>
          </div>
        </div>
        </div>

        <div className='p-4 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-10'>
          <div className='flex flex-row w-[360px] md:w-full h-[135px] md:h-[280px] p-2 md:p-4 rounded-lg shadow-sm'>
            <img src={Chucky} className='w-[115px] md:w-full h-[115px] md:h-[240px] rounded-lg object-cover' /> 
            <div className=' text-left pl-2 md:p-10'>
            <h1 className='text-lg md:text-3xl font-medium md:font-semibold'>A bear and a monkey</h1>
            <p className='text-xs md:text-base font-thin'>10 September</p>
            <p className='text-[10px] md:text-base text-[#5c6972] '>Had plenty money. They went to the shop. For carrots and honey. When the bear and the monkey said, Carrots and honey! The man in the shop cried, where is your money? How strange and funny. They really had money! And so they....</p>
            </div>
          </div>

          <div className='flex flex-row w-[360px] md:w-full h-[135px] md:h-[280px] p-2 md:p-4 rounded-lg shadow-sm'>
            <img src={Chucky} className='w-[115px] md:w-full h-[115px] md:h-[240px] rounded-lg object-cover' /> 
            <div className=' text-left pl-2 md:p-10'>
            <h1 className='text-lg md:text-3xl font-medium md:font-semibold'>A bear and a monkey</h1>
            <p className='text-xs md:text-base font-thin'>10 September</p>
            <p className='text-[10px] md:text-base text-[#5c6972] '>Had plenty money. They went to the shop. For carrots and honey. When the bear and the monkey said, Carrots and honey! The man in the shop cried, where is your money? How strange and funny. They really had money! And so they....</p>
            </div>
          </div>

          <div className='flex flex-row w-[360px] md:w-full h-[135px] md:h-[280px] p-2 md:p-4 rounded-lg shadow-sm'>
          <img src={Chucky} className='w-[115px] md:w-full h-[115px] md:h-[240px] rounded-lg object-cover' /> 
          <div className=' text-left pl-2 md:p-10'>
          <h1 className='text-lg md:text-3xl font-medium md:font-semibold'>A bear and a monkey</h1>
          <p className='text-xs md:text-base font-thin'>10 September</p>
          <p className='text-[10px] md:text-base text-[#5c6972] '>Had plenty money. They went to the shop. For carrots and honey. When the bear and the monkey said, Carrots and honey! The man in the shop cried, where is your money? How strange and funny. They really had money! And so they....</p>
          </div>
        </div>

        <div className='flex flex-row w-[360px] md:w-full h-[135px] md:h-[280px] p-2 md:p-4 rounded-lg shadow-sm'>
        <img src={Chucky} className='w-[115px] md:w-full h-[115px] md:h-[240px] rounded-lg object-cover' /> 
        <div className=' text-left pl-2 md:p-10'>
        <h1 className='text-lg md:text-3xl font-medium md:font-semibold'>A bear and a monkey</h1>
        <p className='text-xs md:text-base font-thin'>10 September</p>
        <p className='text-[10px] md:text-base text-[#5c6972] '>Had plenty money. They went to the shop. For carrots and honey. When the bear and the monkey said, Carrots and honey! The man in the shop cried, where is your money? How strange and funny. They really had money! And so they....</p>
        </div>
      </div>

      <div className='flex flex-row w-[360px] md:w-full h-[135px] md:h-[280px] p-2 md:p-4 rounded-lg shadow-sm'>
      <img src={Chucky} className='w-[115px] md:w-full h-[115px] md:h-[240px] rounded-lg object-cover' /> 
      <div className=' text-left pl-2 md:p-10'>
      <h1 className='text-lg md:text-3xl font-medium md:font-semibold'>A bear and a monkey</h1>
      <p className='text-xs md:text-base font-thin'>10 September</p>
      <p className='text-[10px] md:text-base text-[#5c6972] '>Had plenty money. They went to the shop. For carrots and honey. When the bear and the monkey said, Carrots and honey! The man in the shop cried, where is your money? How strange and funny. They really had money! And so they....</p>
      </div>
    </div>

        </div>
      </div>
    </div>
  );
}

export default Home;
