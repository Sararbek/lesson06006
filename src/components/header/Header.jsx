import React, { useEffect, useState } from 'react'

import logoImg from "../../assets/logo.png"

import { FaRegUser } from "react-icons/fa6";
import { GrFavorite } from "react-icons/gr";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { SlLocationPin } from "react-icons/sl";
import { HiMiniRectangleStack } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";

import { Toaster, toast } from 'sonner'
import CategoryLoading from '../categoryLoading/CategoryLoading';
import { request } from '../../api';

const Header = ({setEndPoint, setCount, endPoint}) => {

    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)
    const [categoryLists, setCategoryLists] = useState([])
    
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                setLoading(true)
                 const response = await request.get(`/products/category-list`)
                 setCategoryLists(['all', ...response.data])
            } catch (error) {
                setError(error.message)
            }finally{
                setLoading(false)
            }
         }
     
         fetchCategories()
    }, [])

  return (
    <div className='w-full font-Inter'>
        <div className='h-8 w-full bg-bgTopBarColor'>
            <div className='container h-full'>
                <div className='h-full flex items-center justify-between font-medium text-sm'>
                    <div className='flex items-center gap-6 text-textFirstFontColor'>
                        <div className='flex items-center gap-2'>
                            <SlLocationPin className='text-base'/>
                            <a href="#" className=' underline'>Tashkent</a>
                        </div>
                        <a href='#'>Topshirish punktlari</a>
                    </div>
                    <div className='flex items-center gap-4'>
                        <div className='flex gap-2 text-textLogoColor'>
                            <a href="#">Sotuvchi bo'lish</a>
                            <span>|</span>
                            <a href="#">Ropshirish punktini ochish</a>
                        </div>
                        <ul className='flex items-center gap-4'>
                            <li>
                                <a href="#">Savol-javob</a>
                            </li>
                            <li><a href="#">Buyurtmalarim</a></li>
                        </ul>
                        <div className='flex items-center gap-2 cursor-pointer'>
                            <div className='w-5 h-5 rounded-full overflow-hidden'>
                                <img src="https://static.vecteezy.com/system/resources/previews/016/328/589/non_2x/uzbekistan-flat-rounded-flag-icon-with-transparent-background-free-png.png" alt="" />
                            </div>
                            <select name="" id="" className='cursor-pointer outline-none border-none bg-transparent'>
                                <option value="" defaultValue={"Selected"}>O'zbekcha</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-full py-4'>
            <div className='container'>
                <div className='flex items-center gap-8'>
                    <a href="#">
                        <img src={logoImg} alt="logo" className='w-[215px]' />
                    </a>
                    <div className='flex items-center gap-2 flex-1'>
                        <button className='h-10 flex items-center gap-3 text-textLogoColor px-3 rounded bg-[#E5E5FF] hover:bg-[#ceccff] duration-150 ease-in'>
                            <HiMiniRectangleStack className='text-lg'/>
                            <span className='font-medium'>Katalog</span>
                        </button>
                        <div className='h-10 flex border-solid border-[1px] border-[#ccc] rounded flex-1'>
                            <input type="text" className='flex-1 outline-none indent-4' />
                            <button className='h-full px-8 bg-bgSearchIconColor'>            
                                <IoSearchOutline className='text-lg text-textLogoColor'/>
                            </button>
                        </div>
                    </div>
                    <ul className='flex items-center gap-2 font-medium text-textFirstFontColor text-sm'>
                        <li className='h-10 flex items-center gap-2 px-2 hover:bg-bgHoverCartIconColor rounded'>
                            <FaRegUser className='text-lg'/>
                            <a href="#">Kirish</a>
                        </li>
                        <li className='h-10 flex items-center gap-2 px-2 hover:bg-bgHoverCartIconColor rounded'>
                            <GrFavorite className='text-lg'/>
                            <a href="#">Saralangan</a>
                        </li>
                        <li className='h-10 flex items-center gap-2 px-2 hover:bg-bgHoverCartIconColor rounded'>
                            <LiaShoppingBagSolid className='text-xl'/>
                            <a href="#">Savat</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='my-2'>
            <div className='container'>
            {
                loading && <CategoryLoading/>
            }
            <ul className='flex items-center gap-4 overflow-x-auto category-scroll'>
                {
                    categoryLists?.map((category, inx) => (
                        <li key={inx} onClick={() => {
                            setEndPoint(category)
                            setCount(0)
                        }} className={`whitespace-nowrap capitalize px-3 h-8 flex items-center justify-center rounded text-textSecondFontColor ${endPoint === category ? 'bg-slate-300' : 'bg-bgSearchIconColor'} hover:opacity-80 cursor-pointer duration-200`}>{category}</li>
                    ))
                }
            </ul>
            </div>
        </div>
        <Toaster />
        {
            error && toast.error(error)
        }
    </div>
  )
}

export default Header