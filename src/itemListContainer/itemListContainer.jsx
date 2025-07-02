export const ItemListContainer = (props) => {
  return (
    <main>
      <h2>Lista de Productos</h2>
      <div>
        {props.itemList.map((item) => (
          <div>
            <h3>{item.nombre}</h3>
            <p>Precio: ${item.precio}</p>
          </div>
        ))}
      </div>
    </main>
  )
}
