import React, { useState } from 'react';
import "./TaskDetail.css"
import { GiStoneSpear } from "react-icons/gi";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";
import { FcHome } from "react-icons/fc";
import { GoChecklist } from "react-icons/go";
import { BiPlusMedical } from "react-icons/bi";
import { IoSettings } from "react-icons/io5";
import { MdLeaderboard } from "react-icons/md";


const TaskDetailApp = () => {
  const [totalCoins, setTotalCoins] = useState(100);
  const [totalRupees, setTotalRupees] = useState(1000);
  const [tasks, setTasks] = useState([
    { points: 10, text: 'Complete task 1' },
    { points: 20, text: 'Complete task 2' },
    { points: 30, text: 'Complete task 3' },
    { points: 40, text: 'Complete task 4' },
    { points: 50, text: 'Complete task 5' },
    { points: 60, text: 'Complete task 6' },
    { points: 70, text: 'Complete task 7' },
    { points: 80, text: 'Complete task 8' },
    { points: 90, text: 'Complete task 9' },
    { points: 100, text: 'Complete task 10' },
  ]);
  return(
    <>

    {/* main section */}


    <div className="main">
      <div className="task-detail">
        <h2>Task Details</h2>
        <div className="coins"><GiStoneSpear />
        3982</div>
        <div className="money"><RiMoneyRupeeCircleFill />
        2875.00</div>
        <div className="DP"></div>
      </div>

      {/* card for details */}

      <div className="card-div">
{tasks.map((item)=>(
 <div className="card">
   <div className="logo"><RiInstagramFill style={{height:"40px",width:"40px"}} />
   </div>
   <div className='tp-div'>
   <div className="text">{item.text}</div>
   <div className="points">points {item.points}</div>
   </div>
 </div>
))}
</div>

{/* footer */}

<div className="footer">
  <div className="home icon"><FcHome style={{height:"40px" ,width:"40px"}} />  </div>
  <div className="doc icon"><GoChecklist style={{height:"40px" ,width:"40px"}} />
  </div>
  <div className="plus icon"><BiPlusMedical style={{height:"40px" ,width:"40px"}} />
  </div>
  <div className="setings icon"><IoSettings style={{height:"40px" ,width:"40px"}} />
  </div>
  <div className="lboard icon"><MdLeaderboard style={{height:"40px" ,width:"40px"}} />
  </div>
</div>

     
    </div>
    </>
  )

};

export default TaskDetailApp;