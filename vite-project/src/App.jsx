import './App.css'

export const App = (p)=>{
  const prueba = ()=>{
    alert("Me hicieron click")
  };
  return(
    <div className='app'>
      <div className='card' onClick={prueba}>
        <h2>{p.nombre}</h2>
      </div>
    </div>
  );
}

export default App;