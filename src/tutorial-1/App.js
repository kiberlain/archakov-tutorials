// App.js =======================================================
import React from "react"
import Profile from '../components/functionalProfile'
import ClassProfile from '../components/classProfile'
function App() {
    return (
        <div style={{padding: 'var(--size-8)'}}>
            <i>Функциональный компонент</i>
            <Profile name="Вася Пупкин" registredAt={new Date(2021, 5, 22)} />
            <br/>
            <br/>
            <br/>
            <i>Классовый компонент</i>
            <ClassProfile name="Вася Пупкин" registredAt={new Date(2021, 5, 22)} />
        </div>
    )
}
export default App