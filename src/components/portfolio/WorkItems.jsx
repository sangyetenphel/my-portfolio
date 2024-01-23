import React from 'react'
import { Link } from 'react-router-dom'

const WorkItems = ({item}) => {
  console.log('item', item)
  return (
    <div className="work__card" key={item.id}>
        <img src={item.image} alt='' className='work__img' />
        <h3 className="work__title">{item.title}</h3>
        <Link to={`/project/${item.id}`} className="work__button">
            View More <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </Link>
    </div>
  )
}

export default WorkItems