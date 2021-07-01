import React from 'react'
import './Testimonials.scss'
function Testimonials() {
    const data=[
        {
            id:'1',
            title:'Muafak Arbash',
            img:'https://www.businessknowhow.com/uploads/find-web-developer.jpg',
            icon:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-aMkfhtOXFqnT4LK_NhlyK7MaDONu9T9G-A&usqp=CAU',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque numquam minima natus et doloremque dolorem? Sunt, sed corporis? Similique, iusto.'
        },
        {
            id:'2',
            title:'Muafak Arbash',
            img:'https://www.businessknowhow.com/uploads/find-web-developer.jpg',
            icon:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-aMkfhtOXFqnT4LK_NhlyK7MaDONu9T9G-A&usqp=CAU',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque numquam minima natus et doloremque dolorem? Sunt, sed corporis? Similique, iusto.',
            featured:'true'
        },
        {
            id:'3',
            title:'Muafak Arbash',
            img:'https://www.businessknowhow.com/uploads/find-web-developer.jpg',
            icon:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-aMkfhtOXFqnT4LK_NhlyK7MaDONu9T9G-A&usqp=CAU',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque numquam minima natus et doloremque dolorem? Sunt, sed corporis? Similique, iusto.'
        }
    ]
    return (
        <div className='testimonial' id='about-me'>
            <h1>About me</h1>
            <div className="container">
                {data.map(d=>(

                    <div className={d.featured? 'card featured':'card'}>
                    <div className="top">
                    <img className='left' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPdymelpWPhnkvGXlQADGOeiWmygxr2MqVQw&usqp=CAU' alt=""/>
                    <img  className='user' src={d.img}alt=""/>
                    <img className='right' src={d.icon} alt=""/>
                    </div>
                    <div className="center">{d.desc}</div>
                    <div className="bottom">
                        <h3>web developer</h3>
                        <h4>{d.title}</h4>
                    </div>
                </div>
                    ))}
            </div>
        </div>
    )
}

export default Testimonials
