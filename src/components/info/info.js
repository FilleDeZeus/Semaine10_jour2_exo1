import React from 'react'

export const Info = ({nom,age,taille,src}) => {
  return (
    <div id="card">
        <p>Nom: {nom}</p>
        <p>Age: {age}</p>
        <p>Taille: {taille}</p>
        <img src={src} alt="" />
    </div>
  )
}