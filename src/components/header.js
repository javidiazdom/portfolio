import * as React from "react"
import "../styles/topbar.scss"

const header = () => {
    return (
        <div class = "topbar">
            <div class = "logo">
                <svg width="55" height="46" viewBox="0 0 35 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.6429 13C23.6429 19.9391 18.4279 25.5 12.0714 25.5C5.71495 25.5 0.5 19.9391 0.5 13C0.5 6.0609 5.71495 0.5 12.0714 0.5C18.4279 0.5 23.6429 6.0609 23.6429 13Z" fill="white" stroke="white"/>
                    <circle cx="22" cy="13" r="12.5" fill="black" stroke="white"/>
                    <path d="M19.358 8.2H24.902V14.528C24.902 15.704 24.622 16.6 24.062 17.216C23.502 17.832 22.6947 18.14 21.64 18.14C21.3693 18.14 21.1033 18.1167 20.842 18.07C20.5807 18.0233 20.338 17.9627 20.114 17.888C19.89 17.804 19.694 17.7153 19.526 17.622C19.3673 17.5287 19.2507 17.44 19.176 17.356L19.68 16.432C19.7827 16.4973 19.8947 16.5673 20.016 16.642C20.1467 16.7167 20.2867 16.7913 20.436 16.866C20.5947 16.9313 20.7673 16.9873 20.954 17.034C21.15 17.0807 21.3693 17.104 21.612 17.104C22.312 17.104 22.8393 16.8847 23.194 16.446C23.558 16.0073 23.74 15.298 23.74 14.318V9.236H19.358V8.2Z" fill="white"/>
                </svg>
            </div>
            <div/>
            <div class = "nav home">
                <h4>HOME🏠</h4>
            </div>
            <div class = "nav about">
                <h4>ABOUT📃</h4>
            </div>
            <div class = "nav work">
                <h4>ABOUT📃</h4>
            </div>
            <div class = "nav contact">
                <h4>SAY👋</h4>
            </div>
        </div>
    )
}

export default header;