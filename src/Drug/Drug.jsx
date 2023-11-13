// TaskListComponent.js
import React, { useState } from 'react';

const TaskListComponent = () => {
    const [isDragging, setIsDragging] = useState(false);
    const [offsetX, setOffsetX] = useState(0);
    const [offsetY, setOffsetY] = useState(0);

    const handleMouseDown = (e) => {
        setIsDragging(true);

        const rect = e.target.getBoundingClientRect();
        setOffsetX(e.clientX - rect.left);
        setOffsetY(e.clientY - rect.top);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;

        const x = e.clientX - offsetX;
        const y = e.clientY - offsetY;

        const draggableElement = document.querySelector('.container__block');
        draggableElement.style.left = `${x}px`;
        draggableElement.style.top = `${y}px`;
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const duplicateElement = () => {
        const originalElement = document.querySelector('.container__block');
        const clone = originalElement.cloneNode(true);

        const newBlock = "container__block" + Math.random().toString(16).slice(2);
        clone.classList.add(newBlock);

        document.body.appendChild(clone);
    };

    // Attach mouse event listeners to the document
    React.useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging]);

    return (
        <main className="container">

            <div className="container__block" onMouseDown={handleMouseDown}>
                <div className="container__block-header">
                    <div className="container__block-header--menu">Удалить</div>
                    <div className="container__block-header--menu">Закончено</div>
                </div>
            </div>
        </main>
    );
};

export default TaskListComponent;
