import React from "react"
import '../styles/style.css'
import tabs from './data'


const App  = () => {
    const { id, title, description } = tabs;
    const [activeId, setActiveId] = React.useState(0)
    const handleToggle = (index) => {
        console.log(index)
        if(activeId === index) {
            return setActiveId("0")
        }
        setActiveId(index)
    };
    return (
        <section style={{padding: 'var(--size-8)'}}>
            <div className="app-container">
                <h1 className="app-title">FAQ</h1>
                <div className="app-tabs">
                    {tabs.map(({ id, title, description }, index) => (
                        <div key={id} className={`tab ` + ((activeId === id) ? "active" : "")}>
                            <input id={id} type="checkbox" name="tabs"/>
                            <label htmlFor="tab-one"   onClick={() => handleToggle(id)}>{title}</label>
                            <div className="tab-content">
                                <p>{description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default App