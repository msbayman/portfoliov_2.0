import React from 'react'

const Project_desc = () => {
    return (
        <div className="div_proj flex w-fit ">
            <div className="date_proj text-xl flex item-start px-3 text-[var(--color-accent)] w-fit ">2024 - 2025 </div>
            <div className=" flex flex-col name_and_desec">
                <div className="name">
                    <h1 className="text-xl font-bold">ft_transandence</h1>
                </div>
                <div className="descr"></div>
                Developed a full-stack web app with real-time multiplayer games, chat system, and secure user authentication with 2FA using modern technologies like React, WebSockets, and JWT.

            </div>
        </div>

    )
}

export default Project_desc