import React from 'react'

import { IoCloseCircleOutline } from "react-icons/io5";
import { ImCheckboxChecked } from "react-icons/im";
import { FaShippingFast } from "react-icons/fa";
import { SiAdguard } from "react-icons/si";
import { MdFavoriteBorder } from "react-icons/md";

const OneItem = ({setOneItem, OneItem}) => {
  return (
    <div onClick={() => setOneItem(setOneItem(null))} className='w-full h-screen bg-[#0005] fixed top-0 left-0 z-10 font-Roboto'>
        <div onClick={(e) => e.stopPropagation()} className='fixed max-w-[50vw] min-h-[400px] p-6 bg-white 
        left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] rounded-2xl grid grid-cols-2 gap-4'>
            <button onClick={() => setOneItem(null)} className='absolute top-4 right-4 text-3xl text-textLogoColor'><IoCloseCircleOutline/></button>
            <div className='flex flex-col gap-3 mt-10'>
                <div className='cursor-pointer w-[70%] mx-auto'>
                    <img src={OneItem.thumbnail} alt="" />
                </div>
                <ul className='flex gap-2 items-center w-[90%] flex-wrap'>
                    {
                        OneItem.tags?.map((tag, inx) => (
                            <li key={inx} className='py-[2px] flex items-center justify-center text-textSecondFontColor px-3 bg-slate-300 rounded-md'>
                                <a href="#" className='text-xs font-medium'>#{tag}</a>
                            </li>
                        ))
                    }
                    <li className='py-[2px] flex items-center justify-center text-textSecondFontColor px-3 bg-slate-300 rounded-md'>
                        <a href="#" className='text-xs font-medium'>#{OneItem.brand}</a>
                    </li>
                </ul>
                <div className='p-4 rounded-md border border-solid border-textSecondFontColor flex flex-col gap-2 flex-1'>
                    <div className='flex justify-between items-start gap-2'>
                        <h3 className='font-Inter text-sm font-semibold text-textFirstFontColor'>Yetkazib berish 1 kundan boshlab</h3>
                        <p className='px-1 whitespace-nowrap rounded-md font-Inter text-xs font-medium text-white bg-textLogoColor'>Uzum market ombori</p>
                    </div>
                    <div>
                        <p className='text-textSecondFontColor font-Inter text-xs'>Uzum buyurtmalarni topshirish punktida yoki kuryer orqali</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-4 mt-10'>
                <div className='flex items-center justify-between'>
                    <h2 className='text-2xl font-medium w-[70%] line-clamp-1'>{OneItem.title}</h2>
                    <p className='text-sm text-textLogoColor font-medium'>{OneItem.availabilityStatus}: ({OneItem.stock})</p>
                </div>
                <div className='p-4 rounded-md bg-[#f5f5f5]'>
                    <p className='text-sm'>{OneItem.description}</p>
                </div>
                <ul className='grid grid-cols-1 grid-rows-3 gap-4'>
                    <li className='flex items-center gap-4'>
                        <span className='flex w-8 h-8 rounded items-center justify-center bg-[#ebfaee]'><ImCheckboxChecked className='text-textLogoColor'/></span>
                        <span>{OneItem.warrantyInformation}</span>
                    </li>
                    <li className='flex items-center gap-4'>
                        <span className='flex w-8 h-8 rounded items-center justify-center bg-[#ebfaee]'><SiAdguard className='text-textLogoColor'/></span>
                        <span>{OneItem.warrantyInformation}</span>
                    </li>
                    <li className='flex items-center gap-4'>
                        <span className='flex w-8 h-8 rounded items-center justify-center bg-[#ebfaee]'><FaShippingFast className='text-textLogoColor'/></span>
                        <span>{OneItem.shippingInformation}</span>
                    </li>
                </ul>
                <div className='flex flex-col gap-3'>
                    <div className='flex items-center gap-2'>
                        <button className='flex-1 h-12 rounded-md bg-[#d0d3d9] flex items-center justify-center font-medium hover:opacity-70'>1 klikda xarid qilish</button>
                        <button className='w-12 h-12 rounded-md bg-[#d0d3d9] flex items-center justify-center hover:opacity-70'><MdFavoriteBorder className='text-2xl'/></button>
                    </div>
                    <button className='flex 1 h-12 rounded-md bg-textLogoColor text-white font-medium items-center justify-center hover:opacity-80'>
                        Savatchaga qo'shish
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OneItem