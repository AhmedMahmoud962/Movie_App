import React from 'react'
import ImagaNoData from '../assets/nodata.svg'
import './style.css'
const NoData = () => {
  return (
    <div className="no-data-container">
      <img src={ImagaNoData} alt="No Movies" className="no-data-image" />
      <p className="no-data-text">No Movies To Display</p>
    </div>
  )
}

export default NoData
