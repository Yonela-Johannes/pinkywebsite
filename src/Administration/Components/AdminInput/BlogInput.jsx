import { useState } from 'react';
import logo from '../../../img/logopinky.png';


export default function BlogInput() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [longDes, setLongDes] = useState('')
    const [selectedBlogImage, setSelectedBlogImage] = useState(null)
  return (
    <div className={`border-b border-t flex space-x-3 overflow-y-scroll `}>
        <img src={logo} alt='logo' className='h-11 w-9 rounded-full cursor-pointer' />

        <div className="w-full divide-y divide-gray-300">
            <input className="bg-transparent outline-none text-[black] text-[14px] placeholder-gray-400 tracking-wide w-full" 
            placeholder='Blog title'
            value={title} onChange={(e)=> setTitle(e.target.value)}/>
            <div className={``}>
                <textarea rows="2" className="bg-transparent outline-none text-[black] text-[14px] placeholder-gray-400 tracking-wide w-full min-h-[55px]" 
                    placeholder="Short Description"
                    value={description} onChange={(e) => setDescription(e.target.value)}
                    />
                <textarea rows="4" className="bg-transparent outline-none text-[black] text-[14px] placeholder-gray-400 tracking-wide w-full min-h-[55px]" 
                placeholder='Description Details'
                    value={longDes} onChange={(e) => setLongDes(e.target.value)}
                />
                <div className="relative">
                    <div classname="absolute w-8 h-8 bg-[black] hover:bg-[grey] bg-opacity-75 rounded-full flex items-center justify-center top-1 left-1 cursor-pointer">

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
