import "../../styles/styles/modal.scss";

function ModalWindow({type="", close, data})  {
    return (
        <div className={`modal-background ${type && "modal-home"}`} onClick={() => close(0)}>
            <div className="modal-wrapper">
                <h3>{data.title}</h3>
                <div className="modal-info">
                    <p className="date info-item">{data.date}</p>
                    <p className="author info-item">{data.author}</p>
                </div>
                {type === "home" ?
                    <div className="modal-content" style={{color: "black", fontSize: "16px"}}>
                        {data.content.map((line, key) => 
                            <div key={key}>{line.match(/^\d+\./) ? <h4 style={{margin: 0}}>{line}</h4> : <p style={{margin: 0}}>{line}</p>}<br/></div>
                        )}
                    </div>
                    :
                    <p className="modal-content">{data.content}</p>
                }
            </div>
        </div>
        
    );
}

export default ModalWindow;