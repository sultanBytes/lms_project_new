import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { teamData } from './AllData'

function TeamSlider() {

    // let slideTeamData = teamData

    const [Teamdata, setTeamdata] = useState([]);

    // console.log(Teamdata);

    const fetchTeamData = async () => {
      let teamData = await fetch('http://localhost:5000/Teamapi/viewTeamMembers', {
        method: 'GET'
      });
      teamData = await teamData.json();
      if (teamData.data) {
        setTeamdata(teamData.data);
      } else {
        alert(teamData.message);
      }
    };

    useEffect(() => {
        fetchTeamData();
      }, []);

    const setting2 = {
        arrows:false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
           
          ],
      };

      
  return (
    <>
        <Slider {...setting2} >

            {
                Teamdata.map(v=>{
                    return(
                        <div className='w-full '>
                            <div className='w-[150px] m-auto  h-[150px] rounded-[50%] overflow-hidden'>
                                <img src={v.memberimage} alt="" />
                              
                            </div>
                            <ul className='flex justify-center text-[13px] text-yellow-400 gap-2 mt-5 mb-2'>
                                    <li><FontAwesomeIcon icon={faStar}/></li>
                                    <li><FontAwesomeIcon icon={faStar}/></li>
                                    <li><FontAwesomeIcon icon={faStar}/></li>
                                    <li><FontAwesomeIcon icon={faStar}/></li>
                                    <li><FontAwesomeIcon icon={faStar}/></li>

                                </ul>
                                <h1 className='text-[19px]'>{v.membername}</h1>
                        </div>
                    )
                })
            }
           

        </Slider>
    
    
    </>
  )
}

export default TeamSlider