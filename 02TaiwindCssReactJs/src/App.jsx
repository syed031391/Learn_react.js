import Card from "./Card"

function App() {
  let placeToVist = {
    place1: {
       place : "murree",
       infio : "Murree is a very popular and beautiful place. its located near the islambd at about 1 0r 1.5 hour diver ",
     },
    
    place2 : {
       place : "Naran",
       infio : "Murree is a very popular and beautiful place. its located near the islambd at about 1 0r 1.5 hour diver "
     },
   
   place3 : {
       place : "Hunza",
       infio : "Murree is a very popular and beautiful place. its located near the islambd at about 1 0r 1.5 hour diver "
     }
   }
  return (
    <>
     <h1>this is waqar shah</h1>
     <Card name={placeToVist.place1.place} infio ={placeToVist.place1.infio}/>
     <Card name={placeToVist.place2.place} infio ={placeToVist.place2.infio}/>
     <Card name={placeToVist.place3.place} infio ={placeToVist.place3.infio}/>
     <Card/>
    </>
  )
}

export default App
