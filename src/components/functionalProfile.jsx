import React from "react"

const montoToStr = (num) => {
    return num > 12 || num < 1
        ? null
        : 'января,февраля,марта,апреля,мая,июня,июля,августа,сентября,октября,ноября,декабря'.split(',')[
        num - 1
            ];
}

const outputData = (time) => {
    let curDay = time.getUTCDate()
    let curMonth = montoToStr(time.getUTCMonth() + 1)
    let curYear = time.getUTCFullYear()
    let curTime = `${curDay} ${curMonth} ${curYear}`
    return curTime
}

const Profile = (props) => {
    return (
        <div>
            <p style={{fontSize: 'var(--font-size-8)'}}>Привет, <strong style={{fontWeight: '900'}}>{props.name}!</strong></p>
            <p>Дата регистрации: {outputData(props.registredAt)}</p>
        </div>
    )
}

export default Profile