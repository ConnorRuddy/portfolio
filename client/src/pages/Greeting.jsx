import React from 'react'
import iceland from '../components/images/iceland.jpeg'
import { Social } from '../components/Social/Social'
import './Css/Greetings.css'


export default function Greeting() {
  return (
    <>
      <div className="greeting-container">
        <img src={iceland} className="greeting-img"/>

        </div>
        <div className="overlay"></div>
        <div className="greeting-text">
          <h1 className="first-name">Connor</h1>
          <h1 className="last-name">Ruddy</h1>
          <h6 className="subtitle">Web Developer</h6>
       
          </div>
    </>
  )
}

// import React from 'react'
// import mgmt from '../data/management.json'
// import MgmtCard from './MgmtCard'


// export default function Mgmt(){
//   // const mgmt = mgmtdata.map(item => {
//   //   return (
//   //     <MgmtCard
//   //       key={item.id}
//   //       imgSrc={item.imgSrc} 
//   //       name={item.name}
//   //       position={item.position}
//   //       />
//   //   )
//   // })

//   // {mgmt} Goes below div 'team pics'
//   return(
//     <div className='team-container'>
//             <div className='team-mission'>
//               <h5 className='mission-title'>Meet Our Management Team</h5>
//               <p>315 Logistics consists of a team of
//                   professionals committed to building the
//                   future of delivery serving our community. We
//                   are a performance-based company who
//                   fosters a culture of fairness and equality,
//                   promotes professional growth, encourages
//                   diversity and values the well-being of our
//                   workforce.</p>
//                   <a href = 'https://315logistics.bamboohr.com/careers/27?source=aWQ9NDE%3D'><button className='team-button'>Join Our Team</button></a>
//               </div>
//               <div className='team-pics' >
//                 {mgmt.map((mgmt, id) => {
//                   return (
//                     <MgmtCard key={id} mgmt={mgmt} />
//                   )
//                 })}
//               </div>
//             </div>
//   )
// }
