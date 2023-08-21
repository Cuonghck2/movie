import React, { useState } from 'react'


import './style.scss'

const SwitchTabs = ({ data, onTabChange }) => {
    const [selectedTabs, setSelectedTabs] = useState(0);
    const [left, setLeft] = useState(0);

    const activeTabs = (tab, index) => {
        setLeft(index * 100)
        setTimeout(() => {
            setSelectedTabs(index)
        }, 400)
        onTabChange(tab, index)
    }

    return (
        <div className='switchingTabs'>
            <div className="tabItems">
                {data.map((tab, index) => {
                    return <span
                        className={`tabItem ${selectedTabs === index ? "active" : ""}`}
                        key={index}
                        onClick={() => activeTabs(tab, index)}
                    >
                        {tab}
                    </span>
                })}
                <span className="movingBg" style={{ left }} />
            </div>
        </div>
    )
}

export default SwitchTabs