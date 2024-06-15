import React from 'react'
import '../css/Cards.css'
import Singlecard from './Singlecard'
import WebDesign from '../assets/images/web-design.png'
import Mobile from '../assets/images/mobile.png'
import Maintenance from '../assets/images/maintainance.png'
import CMS from '../assets/images/cms.png'
import Solutions from '../assets/images/solutions.png'

const WebCards = ({ heading }) => {
    const Webdata = [
        {
          path: WebDesign,
          title: 'Custom Website Design',
          desc: 'Tailored designs that reflect your brand identity and engage your target audience'
        },
        {
          path: Mobile,
          title: 'Responsive Web Design',
          desc: ' Ensuring your website looks great and functions flawlessly on all devices'
        },
        {
          path: Solutions,
          title: 'E-commerce Solutions',
          desc: 'Building secure, scalable online stores to boost your sales and enhance customer experience'
        },
        {
          path: CMS,
          title: 'Content Management Systems (CMS)',
          desc: 'Empowering you to manage and update your website content with ease'
        },
        {
          path: Maintenance,
          title: 'Website Maintenance & Support',
          desc: 'Providing ongoing support to keep your website up-to-date and running smoothly'
        }
      ]

  return (
    <div>
      <div className='card-heading-service' id='services'>
        <h2 className='heading-underline-service' id='services'>
          {heading}
        </h2>
      </div>
      <div className='cards-container container'>
        {Webdata.map((item, index) => (
          <Singlecard
            key={index}
            path={item.path}
            title={item.title}
            description={item.desc}
            route={item.route}
          />
        ))}
      </div>
    </div>
  )
}

export default WebCards
