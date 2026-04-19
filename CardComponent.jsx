function CardComponent({title,description,className,picture})
{
  return(
    <article className={`card-part ${className}`}>
        <h3 className={`title-settings`}>{title}</h3>
        <p className={`description-settings`}>{description}</p>
        <div className="img-placement">
        <img src={picture} alt="" className={`img-settings`}/>
        </div>
    </article>
  )
}