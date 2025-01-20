import React from 'react'
import { FOOTER_LINKS } from '../../static'

import appleLogo from "../../assets/apple.png"
import playMarketLogo from "../../assets/playMarket.png"
import instagramLogo from "../../assets/instagram.png"
import telegramLogo from "../../assets/telegram.png"
import facebookLogo from "../../assets/facebook.png"
import youtubeLogo from "../../assets/youtube.png"

const Footer = () => {
  return (
    <div className='w-full font-Roboto'>
        <div className="container">
                <div className='pt-6 pb-20 flex justify-between'>
                    {
                        FOOTER_LINKS?.map((item, inx) => (
                            <ul key={inx} className='text-textSecondFontColor flex flex-col gap-4'>
                                {
                                    item?.map((text, inx) => (
                                        <li key={inx} className={inx === 0 ? 'first:( font-medium text-sm text-textFirstFontColor )' : ''}>
                                        <a href="#">{text}</a>
                                    </li>
                                    ))
                                }
                            </ul>
                        ))
                    }
                    <div className='font-medium text-sm text-textFirstFontColor flex flex-col gap-12'>
                        <div className='flex flex-col gap-4'>
                            <p>Ilovani yuklab olish</p>
                            <ul className='flex items-center gap-6'>
                                <li className='flex items-center gap-1'>
                                    <img src={appleLogo} alt="apple Logo" className='w-6 h-6'/>
                                    <a href="#">AppStore</a>
                                </li>
                                <li className='flex items-center gap-1'>
                                    <img src={playMarketLogo} alt="apple Logo" className='w-6 h-6'/>
                                    <a href="#">Google Play</a>
                                </li>
                            </ul>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <p>Uzum ijtimoiy tarmoqlarda</p>
                            <ul className='flex gap-3'>
                                <li>
                                    <a href="#">
                                        <img src={instagramLogo} alt="" className='w-9 h-9'/>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src={telegramLogo} alt="" className='w-9 h-9'/>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src={facebookLogo} alt="" className='w-9 h-9'/>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src={youtubeLogo} alt="" className='w-9 h-9'/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-between border-t-[1px] border-solid border-textSecondFontColor py-4'>
                    <ul className='flex items-center gap-4 font-medium text-sm text-textFirstFontColor'>
                        <li><a href="#">Maxfiylik kelishuvi</a></li>
                        <li><a href="#">Foydalanuvchi kelishuvi</a></li>
                    </ul>
                    <p className='font-medium text-sm text-textSecondFontColor'>
                        «2025© XK MCHJ «UZUM MARKET». STIR 309376127. Barcha huquqlar himoyalangan»
                    </p>
                </div>
        </div>
    </div>
  )
}

export default Footer