import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import apiClient from '../axios/apiClient';
import { flag } from '../data/flag';
import "./Detail.css"

const IMAGE_API = "https://www.themealdb.com/images/ingredients"
const API = "https://www.themealdb.com/images/icons/flags/big/64"

function DetailMeal() {
  const {id} = useParams()

  const [info, setInfo] = useState({})

  const findTitle = flag.find((x) => x.title == info.strArea)

  async function getMealById() {
    try {
      const res = await apiClient.get(`/lookup.php?i=${id}`)
      console.log(res);
      setInfo(res.data.meals[0])
      
    } catch (error) {
      
    }
  }

  useEffect(() => {
    getMealById()
  } , [])

  let array = []

  for(let i = 1; i <= 20; i++) {
    let strName = info["strIngredient"+i]

    if(strName) {
      array.push({name: strName})
    }
  }

  console.log(array);
  


  return (
    <div className='container info'>
      <div className='arrow'>
        <img src="https://www.themealdb.com/images/icons/Arrow-Left.png" alt="" />
        <img src={`${API}/${findTitle?.img}.png`} alt="" />
        <img src="https://www.themealdb.com/images/icons/Arrow-Right.png" alt="" />
      </div>
      <div className='info-content'>
        <div className='info-left'>
          <img src={info.strMealThumb} alt="" />
        </div>
        <div className='info-right'>
          {
            array.map((item, index) => (
              <div  key={index}>
                <img src={`${IMAGE_API}/${item.name}.png`} alt="" />
              </div>
            ))
          }
        </div>
      </div>
      <div className='info-des'></div>
    </div>
  )
}

export default DetailMeal
