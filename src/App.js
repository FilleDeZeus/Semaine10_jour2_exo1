import './App.css';
import {Title} from './components/title/title.js'
import {Picture} from './components/picture/picture.js'
import { Info } from './components/info/info.js';
import { Imc } from './components/imc/imc.js';
import { Bouton } from './components/bouton/bouton.js';

function App() {
  let enide ={
    nom: "Enide",
    age:"24 ans",
    taille: "170 cm",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzQnQRzMDbJIChxw221ypYd3j-wWu7oz_mVmIdQTF4&s",
  }
  let aaa = {
    nom: "aaa",
    taille: 1.8,
    poids: 87,
  }
  let bbb = {
    nom : "bbb",
    taille : 1.5,
    poids: 55,
  }
  const Bonjour = () => {
    console.log('Bonjour');
  }
  return (
    <div className="App">
      <Title param1="titre" param2="para"/>
      <Picture param1="./components/picture/public/image.jpeg" param2="https://static.wikia.nocookie.net/disney/images/3/3d/Alice_Through_The_Looking_Glass%21_123.png/revision/latest/scale-to-width-down/250?cb=20160329165103"/>
      <Info nom={enide.nom} age= {enide.age} taille ={enide.taille} src= {enide.src}/>
      <Imc nom = {aaa.nom} taille= {aaa.taille} poids= {aaa.poids}/>
      <Imc nom = {bbb.nom} taille= {bbb.taille} poids= {bbb.poids}/>
      <Bouton type='submit' onClick={Bonjour} click = 'hey click moi dessus'/>
      <Bouton type='submit' click='click'/>
    </div>
  );
}

export default App;
