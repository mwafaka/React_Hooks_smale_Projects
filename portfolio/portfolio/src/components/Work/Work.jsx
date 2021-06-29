import React from 'react'
import './Work.scss'
import { useState } from 'react'
function Work() {
const[currentSlide,setCurrentSlide]=useState(0)
    const data=[
     {
         id:'1',
         title:'Featured',
         desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, et reiciendis illum sed quod recusandae odit officiis iusto quam natus',
         img:'https://cdn-images-1.medium.com/max/640/1*8NjDXiICAKMgwEX3UEx85w.png'
     },
     {
        id:'2',
        title:'Web app',
        desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, et reiciendis illum sed quod recusandae odit officiis iusto quam natus',
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0cQiCCpExWFXMDIpkSVfOtqsD-P-i27Kkzg&usqp=CAU'
    },
    {
        id:'3',
        title:'mobile app',
        desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, et reiciendis illum sed quod recusandae odit officiis iusto quam natus',
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAbTloqotWn9P_bx7uUddPUfxr9iJvwi8n9w&usqp=CAU'
    },
    {
        id:'4',
        title:'Design',
        desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, et reiciendis illum sed quod recusandae odit officiis iusto quam natus',
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHd84hNNOwFAchDStpUp7uaUeWFirmypY8OQ&usqp=CAU'
    },
    {
        id:'5',
        title:'Feautured',
        desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, et reiciendis illum sed quod recusandae odit officiis iusto quam natus',
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5czKCkoNYcc6kZ0abT-GfnXU0w-wHRv7Tcw&usqp=CAU'
    },

    ]
    const handleClick=(x)=>{   
    x==='left'?setCurrentSlide(currentSlide>0?currentSlide-1:4):
    setCurrentSlide(currentSlide<data.length-1?currentSlide+1:0)
    }
    return (
        <div className='work' id='work'>
            <div className="slider" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
                {data.map((d)=>(
                    <div className="container">
                    <div className="item">
                    <div className="left">
                <div className="leftContainer">
                    <div className="imgContainer">
                    </div>
                <h2>{d.title}</h2>
                <p>{d.desc}</p>
                    <span>Projects</span>
                      
                </div>
                    </div>
                    <div className="right">
                    <img src={d.img} alt=''/>
                   </div>
                    </div>
                </div>
            ))}
            </div>
            <img src='assets/angle_Down.png' className='arrow left' alt='' onClick={()=>handleClick('left')}/>
            <img src='assets/angle_Down.png ' className='arrow right' alt='' onClick={()=>handleClick()}/>
        </div>
    )
}

export default Work
