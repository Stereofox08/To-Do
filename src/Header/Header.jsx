import React from "react";
function Header()
{
    return (
        <header className="container__header">
            <div className="container__header-menu">Все задачи</div>
            <div className="container__header-menu">Законченные</div>
            <div className="container__header-menu">Не законченные</div>
            <button className="container__header-menu">Добавить задачу</button>
        </header>
    );
};
export default Header;
