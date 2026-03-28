import "../../styles/styles/modal.scss";

function ModalWindow({close, data})  {
    return (
        <div className="modal-background" onClick={() => close(0)}>
            <div className="modal-wrapper">
                <h3>{data.title}</h3>
                <div className="modal-info">
                    <p className="date info-item">{data.date}</p>
                    <p className="author info-item">{data.author}</p>
                </div>
                <p className="modal-content">{data.content}</p>
            </div>
        </div>
        
    );
}

export default ModalWindow;