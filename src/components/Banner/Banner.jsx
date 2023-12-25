import './BannerStyles.scss'
import $ from "jquery";


//a little jQuery for example :)
let bannerMessage = $('.solving_container__banner__flex')
bannerMessage.css('opacity', '0');
$('.solving_container__banner__image').click(function (event){
    event.preventDefault()
    bannerMessage.css('opacity', '0.9');
})
$('.solving_container__banner__cancel').click(function (event){
    event.preventDefault()
    bannerMessage.css('opacity', '0');
})
export default function Banner(){
    return(
        <>
            <div className="solving_container__banner">
                <div className="solving_container__banner__flex">
                    <div className="solving_container__banner__message">
                        Hi! I am Ben, your virtual assistant. How can I make your day better?
                    </div>
                    <div className="solving_container__banner__cancel">X</div>
                </div>
                <div><img src="../../assets/images/human.png" alt="human" className="solving_container__banner__image"/></div>
            </div>
        </>
    )
}