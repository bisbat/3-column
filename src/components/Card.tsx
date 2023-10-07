
type category ={
    id:number
    type:string
    icon:string
    description:string
    ctaLink:string
    color:string
}



const Card = (category:category) => {
  
  return (
    <div className="w-64">
      <div className="p-14" style={{background:category.color}}>
        <img src={category.icon} alt="" /><br />
        <h2 className="text-left font-bold text-xl font-Shoulders">{category.type.toUpperCase()}</h2><br />
        <p className="text-left mb-10 font-normal font-Lexend">{category.description}</p><br />
        <button className="bg-white px-4 py-2 rounded-lg text-black font-Lexend "><a href={category.ctaLink} className="">Learn more</a></button>
        
        
    </div>
    </div>
    
  )
}



export default Card