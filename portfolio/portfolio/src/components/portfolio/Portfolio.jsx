import React from 'react'
import { useEffect,useState } from 'react';
import PortfolioList from '../PortfolioList/PortfolioList';
import './Portfolio.scss';
import {mobilePortfolio,
    featuredPortfolio,
    webPortfolio,
    designPortfolio,
    contentPortfolio } from '../../data';

function Portfolio() {
    const[selected,setSelected]=useState('featured');
    const[data,setData]=useState([]);

    const list =[
        {
            id:'featured',
            title:'featured',
        },
        {
            id:'web',
            title:'web App',
        },
        {
            id:'mobile',
            title:'Mobile App',
        },
        {
            id:'design',
            title:'Design'
        },
      
        {
            id:'content',
            title:'Content'
        }
    ]
    useEffect(()=>{
        switch(selected){
            case 'featured':
            setData(featuredPortfolio);
            break;
            case 'web':
                setData(webPortfolio);
            break;
            case 'design':
               setData(designPortfolio);
            break;
            case 'mobile':
               setData(mobilePortfolio);
            break;
            case 'content':
               setData(contentPortfolio);
            break;                                     
            default:
                setData(featuredPortfolio)
        }
    })
    return (
        <div className='portfolio' id='portfolio'>
            <h1>Portfolio</h1>
            <ul>
               {list.map((item)=>(
               <PortfolioList title={item.title}
               active={selected ===item.id}
               setSelected={setSelected}
               id={item.id}
               />
               ))}
            </ul>
            <div className="container">
                  <div className="container">
                {data.map(d=>(
                <div className="item">
                    <img src={d.img} alt=''/>
                    <h3>{d.title}</h3>
                </div>
                ))}
            </div>            
            </div>
        </div>
    )
}

export default Portfolio
