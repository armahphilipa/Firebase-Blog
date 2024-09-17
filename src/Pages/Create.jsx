import Cover from '../assets/upload-cloud.svg'
import { FiEye } from 'react-icons/fi';

function Create() {
  return (
    <div className='w-full h-screen'>
    <nav className='w-full h-50 bg-white border border-b-[#f8f7ff]'>
      <div className='p-4 mx-5 flex justify-between'>
        <h1 className='text-[#9391ff] text-xl font-extrabold '>Dickson Mo.</h1> 

        <div className='flex flex-row'>
          <button className='flex flex-row justify-center items-center bg-white rounded-md border-2 border-[#b8b8ff] text-[#9391ff] font-medium mr-4 px-4'> <FiEye size={20} color='#9391ff'  className='pr-1'/> Preview</button>         
          <button className='bg-[#9391ff] font-medium rounded-md border-none ml-4 px-4 text-white'>Publish</button>
        </div>
      </div>
    </nav>
      <form className='p-5 mx-10'>
        <div className='flex py-10'>
          <div className='pr-4'>
            <label id='drop-area' className='text-gray-400' >
          <input type='file' name='cover image' accept='image/*' className='hidden placeholder-gray-400 border-none text-black focus:outline-none'  />
          <div className='flex'>
            <img src={Cover} alt='' />
            <p className='px-4'>Add cover</p>
          </div>
          
          </label>
        </div>
          <input type='text' name='Subtitle' placeholder='Add Subtitle' className='placeholder-gray-400 border-none text-black focus:outline-none text-xl font-semibold' />
          <select name='categories' defaultValue='Select Category' className='text-gray-600 focus:outline-none' >
            <option value='Select Category'>Select Category</option>
            <option value='Education'>Education</option>
            <option value='food'>Food</option>
            <option value='family'>Family</option>
            <option value='lifestyle'>Lifestyle</option>
            <option value='politics'>Politics</option>
            <option value='relationship'>Relationship</option>
            <option value='religio'>Religion</option>
            <option value='technology'>Technology</option>
          </select>
        </div>
        <input type='text' name='title' placeholder='Article Title' className='text-4xl font-bold placeholder-gray-400 text-black focus:outline-none py-4'  />

        <textarea placeholder='Write your article here' className='placeholder-gray-400 w-full h-full border-none focus:outline-none  '/>
      </form>
    </div>
  );
}

export default Create;
