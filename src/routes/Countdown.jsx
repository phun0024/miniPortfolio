import { useState, useEffect } from 'react';

import Row from '../components/Row'
import Col from '../components/Col'

function Countdown () {

    const [daysTimer, setDaysTimer] = useState("00")
    const [hoursTimer, setHoursTimer] = useState("00")
    const [minutesTimer, setMinutesTimer] = useState("00")
    const [secondsTimer, setSecondsTimer] = useState("00")
   
    function countdown () {
        
        const countDate = new Date("Dec 31, 2022 00:00:00").getTime()
        
        let interval = setInterval(() => {
            const now = new Date().getTime()
            const gap = countDate - now
    
            const second = 1000
            const minute = second * 60
            const hour = minute * 60
            const day = hour * 24
    
            const textDay = Math.floor(gap / day)
            const textHour = Math.floor((gap % day) / hour)
            const textMinute = Math.floor((gap % hour) / minute)
            const textSecond = Math.floor((gap % minute) / second)
    
            if (gap < 0) {
                clearInterval(interval.current)
            } else {
                setDaysTimer(textDay)
                setHoursTimer(textHour)
                setMinutesTimer(textMinute)
                setSecondsTimer(textSecond)
            }
        })
    }

    useEffect(() => {
        countdown()
    })



    return (
        <>
            <Row className="countdown d-flex flex-row justify-content-evenly">
                <Col className="container-day">
                    <h3 className='day'>{daysTimer}</h3>
                    <h3>Day</h3>
                </Col>
                <Col className="container-day">
                    <h3>:</h3>
                </Col>
                <Col className="container-hour">
                    <h3 className='hour'>{hoursTimer}</h3>
                    <h3>Hour</h3>
                </Col>
                <Col className="container-day">
                    <h3>:</h3>
                </Col>
                <Col className="container-minute">
                    <h3 className='minute'>{minutesTimer}</h3>
                    <h3>Minute</h3>
                </Col>
                <Col className="container-day">
                    <h3>:</h3>
                </Col>
                <Col className="container-second">
                    <h3 className='second'>{secondsTimer}</h3>
                    <h3>Second</h3>
                </Col>
            </Row>
        </>
    )
}

export default Countdown