import data from '../data.json'; 
import Card from './Card';

export const CardList = () => {
  return (
    <div className='text-white m-20'>
      <div className='flex justify-center flex-wrap'>
        {data.categories.map(category=>(
            <Card key={category.id} {...category}/>
        ))}
    </div>
    </div>
    
  )
}

export default CardList
