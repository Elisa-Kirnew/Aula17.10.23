import minhaImagem from './img/Paisagem-1.jpg'
import NoticiaComponente from './componentes/NoticiaComponentes';
import './App.css';

function App() {
  return (
    <div className="App">
     <h1> Olha só que legal </h1>
     <NoticiaComponente
     titulo="Essa é a Noticia bombastica"
    imagem={minhaImagem}
     alt="Imagem de uma paisagem"
    descricao="AAAAAAAAAAAAAAAAAAAAA"
    categoria="Desastre"     
     
     />
    </div>
  );
}

export default App;
