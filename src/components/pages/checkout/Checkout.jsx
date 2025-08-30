import React from 'react'
import { useState } from 'react'

export const Checkout = () => {

    const [user, setUser] = useState({
        nombre: "",
        telefono: "",
        email: "",
    })

    const handleSubmit = (evento)=>{
        evento.preventDefault();
        console.log(user);
    }

  return (
    <div>
        <h1>Aqui va el formulario del checkout.</h1>
        <form onSubmit={handleSubmit}>
            <input name="nombre" type="text" placeholder="Nombre" onChange={(evento)=>setUser({...user, nombre:evento.target.value})}/>
            <input name="telefono" type="text" placeholder="telefono" onChange={(evento)=>setUser({...user, telefono:evento.target.value})}/>
            <input name="email" type="text" placeholder="email" onChange={(evento)=>setUser({...user, email:evento.target.value})}/>
            <button>Comprar</button>
        </form>
    </div>
  )
}
