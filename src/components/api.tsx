
import react from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Url } from 'url';

interface Props {
  url: string;
}

interface Character {
  name: string,
  status:String,
  species:String,
  type:String,
  gender:String,
  origin:String,
  location:{
    name:String,
  },
  image:String,
  episode:String,
  url:Url,
  created:String
}

export default function Personagem({ url }: Props) {
  const [personagem, setPersonagem] = useState<Character | null>(null);
  const lista_personagem: Array<Character | null > = [];

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPersonagem(data));
  },[url]);
  
  lista_personagem.push(personagem);
while(lista_personagem.length<1){
  console.log("...carregando")
}

  return (
    <div>
        {
          lista_personagem.length > 0 ? (
              <ul>
                {
                  lista_personagem.map((p)=>(
                   
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
                }

              </ul>
          ):
          (
            <p>... carregando</p>
          )
        }
    </div>
 
  );
}
