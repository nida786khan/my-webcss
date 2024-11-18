import React from 'react'

const Watches = () => {


const watchData = [
  {id: 1,name:'Seiko',image:'03.png',price: '$250',description:'A classic watch with a classic design.'},
  {id: 2,name:'Breiting',image:'04.png',price: '$250',description:'A classic watch with a classic design.'},
  {id: 3,name:'TAG Hever',image:'03.png',price: '$250',description:'A classic watch with a classic design.'},
  {id: 4,name:'Patek Philippe',image:'04.png',price: '$250',description:'A classic watch with a classic design.'},
  {id: 5,name:'Omega',image:'03.png',price: '$250',description:'A classic watch with a classic design.'},
  {id: 6,name:'Rolex',image:'04.png',price: '$250',description:'A classic watch with a classic design.'},
]


  return (
    <div>
      <div className='watches'>
        {watchData.map((watch)=>(
          <div key={watch.id}className='watch-card'>
          <img src={watch.image}alt={watch.name} />
          <h3>{watch.name}</h3>
          <p>{watch.description}</p>
          <div>${watch.price}</div>
         <button>Add To Card</button>
     </div>
    ))}
    </div>
    </div>
  )
}

export default Watches 