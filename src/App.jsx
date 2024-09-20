import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger)

function App() {
  const images =[
    '/image/1.png',
    '/image/2.png',
    '/image/3.png',
    '/image/4.png',
    '/image/5.png',
    '/image/6.png',
]

useEffect(() =>{
  gsap.utils.toArray('.card').forEach(card =>{
    gsap.to(card,{
      opacity:0,  
      scale:0.8,
      scrollTrigger:{
        trigger:card,
        start:"top 15%",
        end:"bottom 15%",
        scrub:1,
        
      }
    })
  })
})

  return (

    <>
      <main className='w-full text-white flex flex-col gap-5 items-center py-[15vh]'>
        <h1>saurav</h1>


        {
          images.map((image,index)=>{
            return (
              <div id={index} className="card w-[20vw] sticky top-[15vh] flex flex-col gap-5 px-[30px] py-[10vh] rounded-xl bg-[#383027]">
          <img  className='w-[150px] ml-12' src={image} alt="" />
          <h1 className='text-5xl'>
            The <br/>
            <span className='font-bold'>Alogrithm</span>
          </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, inventore.</p>
        </div>

            )
          })
        }
      </main>
    </>
  )
}

export default App
