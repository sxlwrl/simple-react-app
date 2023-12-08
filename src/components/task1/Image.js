import React, {useState} from "react"
import image from "../../images/img.png";

function Image() {
    const [isImageAdded, setIsImageAdded] = useState(true);
    const [isScaled, setIsScaled] = useState(false);
    const [scale, setScale] = useState(1);

    const handleAdd = () => {
        setIsImageAdded(true);
    };

    const handleDelete = () => {
        setIsImageAdded(false);
    };

    const handleZoomIn = () => {
        setScale(scale + 0.2);
        setIsScaled(true);
    };

    const handleZoomOut = () => {
        setScale(scale - 0.2);
        setIsScaled(false);
    };

    const buttonContainerStyle = {
        marginTop: scale > 1 ? `${scale * 5}rem` : `1rem`,
        transition: 'margin 0.3s ease',
    };

    return (
        <div className="image-component">
            {isImageAdded && (
                <div className="img--container">
                    <a href="https://en.wikipedia.org/wiki/Lisbon" className="img-link">
                        <img
                            src={image}
                            alt="picture"
                            className="img"
                            style={{transform: `scale(${scale})`}}
                        />
                    </a>
                </div>
            )}

            <div className="buttons" style={buttonContainerStyle}>
                <button className="add" onClick={handleAdd} disabled={isImageAdded}>Додати</button>
                <button className="zoom-in" onClick={handleZoomIn} disabled={isScaled || !isImageAdded}>Збільшити</button>
                <button className="zoom-out" onClick={handleZoomOut} disabled={!isScaled || !isImageAdded}>Зменшити</button>
                <button className="delete" onClick={handleDelete} disabled={!isImageAdded}>Видалити</button>
            </div>
        </div>
    )
}

export default Image;
