import  './PlateStyles.scss'
export default function Plate({title,modified,description,image}){
    return(
        <div className='our_works__plate'>
            <p className={`our_works__plate__title-${modified}`}>{title}</p>
            <p className="our_works__plate__description">{description}</p>
            <img src={image} alt="StartupZ" className="our_works__plate__image"/>
            <div className="our_works__plate__button">More</div>
        </div>
    )
}