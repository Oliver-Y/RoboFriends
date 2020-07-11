import React from 'react';
import Card from './Card';


const CardList = (props) =>{
  const map = props.robots.map((item,n) => {
    return <Card key = {n} id = {props.robots[n].id} name = {props.robots[n].name} email = {props.robots[n].email}/>;

  })
    return(
      <div>
        {map};
      </div>
    )
}

export default CardList;
