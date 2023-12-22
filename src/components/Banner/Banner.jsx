
export default function Banner(){

    return(
        <>
            <div className="solving_container__banner">
                <div className="solving_container__banner__flex">
                    <div className="solving_container__banner__message">Hi! I am Ben, your virtual assistant. How can I
                        make
                        your day better?
                    </div>
                    <div className="solving_container__banner__cancel">X</div>
                </div>
                <div><img src="../../../public/human.png" alt="human" className="solving_container__banner__image"/></div>
            </div>
        </>
    )
}