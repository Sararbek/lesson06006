import axios from 'axios'
import React, { useEffect, useState } from 'react'

import { IoIosStar } from "react-icons/io";
import { TbShoppingBagPlus } from "react-icons/tb";
import { GrFavorite } from "react-icons/gr";
import Loading from '../loading/Loading';
import { request } from '../../api';

const Hero = ({endPoint, count, setCount, setOneItem}) => {
    
    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])
    const [total, setTotal] = useState(0)

    const limit = 10

    useEffect(() => {
        const fetchProducts = async () => {
            if(count === 0) setProducts([])
            try{
                setLoading(true)
                const response = await request.get(endPoint === 'all' ? `/products` : `/products/category/${endPoint}`, {
                    params: {
                        limit,
                        skip: count * limit
                    }
                })
                if(count === 0){
                    setProducts(response.data.products)
                    setTotal(response.data.total)
                }else{
                    setProducts([...products, ...response.data.products])
                }
            }catch(err){
                console.log(err.status)
            }finally{
                setLoading(false)
            }
        }

        fetchProducts()
    }, [count, endPoint])

  return (
    <div className='w-full min-h-[100vh] py-12 font-Inter'>
        <div className="container">
            <div className={`grid grid-cols-5 gap-x-5 gap-y-8 ${count > 0 && 'pb-8'}`}>
                {
                    products?.map((product) => (
                        <div key={product.id} className='cursor-pointer rounded-lg overflow-hidden hover:shadow-normal duration-300 ease-in'>
                            <div className='w-full h-[310px] relative bg-[#efefef] flex items-center justify-center rounded-b-lg hover:rounded-b-none duration-300 ease-linear'>
                                <img src={product.thumbnail} onClick={() => setOneItem(product)} alt={product.title} className='
                                object-contain hover:scale-110 duration-300 ease-in' />
                                <button className=' absolute z-5 text-xl top-4 right-4 '>
                                    <GrFavorite className='text-textLogoColor'/>
                                </button>

                            </div>
                            <div className='pt-3 px-2 pb-2 flex flex-col'>
                                <p className='text-[13px] leading-[15px] text-textFirstFontColor line-clamp-1' title={product.title}>
                                    {product.title}
                                </p>
                                <div className='flex items-center gap-1 text-xs'>
                                    <IoIosStar className='text-textStarColor'/>
                                    <p className='text-textSecondFontColor font-[300]'>{product.rating}</p>
                                    <p className='text-textSecondFontColor font-[300]'>( In stock: {product.stock} )</p>
                                </div>
                                <p className='self-baseline rounded py-1 px-2 bg-bgPriceTextColor text-xs text-textFirstFontColor'>
                                    {product.discountPercentage}% discount 
                                </p>
                                <div className='flex items-end w-full justify-between mt-4'>
                                    <div className='flex flex-col'>
                                        <p className='text-textSecondFontColor line-through text-xs'>{product.price + 20}$</p>
                                        <p className='text-base text-textFirstFontColor font-semibold'>{product.price}$</p>
                                    </div>
                                    <button className='w-[30px] h-[30px] border border-solid border-textSecondFontColor rounded-full flex items-center justify-center duration-300 ease-in-out hover:bg-bgSearchIconColor'>
                                        <TbShoppingBagPlus className='text-lg'/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            {
                loading && <Loading/>
            }
            {
                total > limit * (count + 1)  && 
            <div onClick={() => setCount(count + 1)} className='flex items-center justify-center mt-8 py-2 px-14 max-w-[740px] h-14 w-full mx-auto rounded bg-bgProductColor hover:bg-slate-200 cursor-pointer'>
                <button className='text-base text-textFirstFontColor font-semibold'>Yana ko'rsatish 10</button>
            </div>
            }
        </div>
    </div>
  )
}

export default Hero