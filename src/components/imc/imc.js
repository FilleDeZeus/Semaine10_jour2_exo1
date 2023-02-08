import React from 'react'

export const Imc = ({nom,taille,poids}) => {
    let imc = poids/(taille*taille)
  return (
    <div>l'imc de {nom} est de {imc}</div>
  )
}
