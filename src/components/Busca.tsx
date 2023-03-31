import React, { useState, useEffect } from 'react';
import './styles/searchbar.css';

interface Props {
  url: string;
}

interface Character {
  name: string,
  status: string,
  species: string,
  type: string,
  gender: string,
  origin: string,
  location: {
    name: string,
  },
  image: string,
  episode: string,
  url: string,
  created: string
}

export default function Busca() {
  const [busca, setBusca] = useState('');
  const [personagens, setPersonagens] = useState<Array<Character>>([]);
  const [resultados, setResultados] = useState<Array<Character>>([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((data) => {
        setPersonagens(data.results);
      });
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setBusca(value);
  };

  const search = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      const resultados = personagens.filter((p) =>
        p.name.toLowerCase().includes(busca.toLowerCase())
      );
      setResultados(resultados);
    }
  };

  return (
    <div>
      <input
        type='text'
        id='searchbar'
        placeholder='Nome do personagem'
        value={busca}
        onChange={handleChange}
        onKeyDown={search}
      />
      <ul className='characters-list'>
        {resultados.length > 0 ? (
          resultados.map((p) => (
            <div>
             <h3>{p?.name}</h3>
            <img className='personagem' src= {p?.image.toString()} />
            <li>{p?.status}</li>
              <li>{p?.species}</li>
            <li>{p?.created}</li>
            <li>{p?.type}</li>
            <h4>Ultima localização conhecida</h4>
            <p>{p?.location.name}</p>
              <source src={p?.location.name.toString()}/>
            </div>
          ))
        ) : (
          <p>Nenhum resultado encontrado</p>
        )}
      </ul>
    </div>
  );
}

// import react from 'react'
// import {useState} from 'react'
// import { useEffect } from 'react';
// import './styles/searchbar.css'
// import path from 'path';

// interface Props {
//     url: string;
//   }


//   interface Character {
//     name: string,
//     status:String,
//     species:String,
//     type:String,
//     gender:String,
//     origin:String,
//     location:{
//       name:String,
//     },
//     image:String,
//     episode:String,
//     url:String,
//     created:String
//   }
  

// export default function Busca(){
//     const [busca,Setbusca] = useState('')
//     const [character,Setcharacter] = useState<Character | null> (null)

//     const lista_personagem: Array<Character | null > = [];

//     useEffect(()=>{
//         fetch('https://rickandmortyapi.com/api/character')
//         .then((response)=>response.json())
//         .then((data)=>Setcharacter(data))
//         lista_personagem.push(character)
       
//     })

//     const HandleChange = (event:any) => {
//         const value = event.target.value;
//         Setbusca(value);
//         console.log(value)
//     }

//     const Search = (event:any) => {
//         if(event.KeyCode){
          
//         }
//     }
//         return(
//             <div>
//             <input type="text" id='searchbar' placeholder='Nome do personagem' value={busca} onChange={HandleChange}
//             onKeyDown={Search}/>
//             <ul className='lista=personagens'>
//             {
//              lista_personagem.length > 0? (
//                 <ul>
//                     {
//                       lista_personagem.map((p)=>(
//                         p?.name == value ? <li>{p?.name}</li> : 
//                         <p>teste</p>
//                       ))
//                     }
//                 </ul>
//              ) : (
//                 <p>..carregando</p>
//              )
//             }
//             </ul>
//             </div>
//         )} 