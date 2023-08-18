import React from 'react'
import '../../App.css'

const Square = ({player,setPlayer,squares,setSquares,squareVal,index}) => {
   console.log(squareVal)
const handleClick = () => {
    if(!squareVal){
        if(player){
            squares.splice(index,1,"X")
            setSquares(squares)
            setPlayer(!player)
        } else {
            squares.splice(index,1,"O")
            setSquares(squares)
            setPlayer(!player)
        }
    }
}
  return (
    <div className='square' onClick={handleClick}>
        {squareVal === "O" ? <img src="https://cdn.discordapp.com/attachments/830137099042816080/984895322184634448/devcircle_1.png"/> : squareVal}
    </div>
  )
}


export default Square