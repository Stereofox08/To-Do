import React ,{useState} from 'react';
import s from './Item.module.css';


function Item() {
    const [isDragging, setIsDragging] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setOffset({
            x: e.clientX - position.x,
            y: e.clientY - position.y,
        });
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (isDragging) {
            setPosition({
                x: e.clientX - offset.x,
                y: e.clientY - offset.y,
            });
        }
    }
        return (<div
            style={{ position: 'absolute', left: position.x, top: position.y }}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
        >

            <div className={s.Task}>
                <div className={s.Task__header}>
                    <div className={s.Task__headerElement}>
                        Delete
                    </div>
                    <div className={s.Task__headerElement}>
                        Complite
                    </div>
                </div>
            </div>
        </div>)
    }

    export default Item;
