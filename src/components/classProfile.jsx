import React from "react"

class ClassProfile extends React.Component {

    montoToStr(num){
        return num > 12 || num < 1
            ? null
            : 'января,февраля,марта,апреля,мая,июня,июля,августа,сентября,октября,ноября,декабря'.split(',')[
            num - 1
                ];
    }
    outputData(time){
        let curDay = time.getUTCDate()
        let curMonth = this.montoToStr(time.getUTCMonth() + 1)
        let curYear = time.getUTCFullYear()
        let curTime = `${curDay} ${curMonth} ${curYear}`
        return curTime
    }
    constructor(props) {
        super(props);
        this.state = {
            ...props
        }
        this.state.registrationData = this.outputData(this.props.registredAt)
    }
    render() {
        return (
            <div>
                <p style={{fontSize: 'var(--font-size-8)'}}>
                    Привет, <strong style={{fontWeight: '900'}}>{this.state.name}!</strong>
                </p>
                <p>Дата регистрации: {this.state.registrationData}</p>
            </div>
        )
    }
}


export default ClassProfile