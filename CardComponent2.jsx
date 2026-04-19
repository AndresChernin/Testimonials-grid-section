function CardComponent2({picture,name,graduation,experience,description,className,})
{
  return(
    <article className={`card-part ${className}`}>
        <div className={`autor-part`}>
        <div className={`image-container`}>
        <img src={picture} alt="" className={`img-settings`}/>
       </div>
        <div className={`information-part`}>
          <p className={`name-settings`}>{name}</p>
          <p className={`graduation-settings`}>{graduation}</p>
        </div>

        </div>
        <h3 className={`experience-settings`}>{experience}</h3>
        <p className={`description-settings`}>{description}</p>
        
    </article>
  )
}