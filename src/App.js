import './App.css';
import MovieAdd from './Components/MovieAdd';
import MovieList from './Components/MovieList';
import { useState} from 'react';

function App() {
  const [films,setFilms] = useState([
    {
      title: "Game of thrones",
      description: "Genre : Fantasy",
      posterUrl:
        "https://i.egycdn.com/pic/WmFwZndlY3ZjbWp2dGNtRW1hY2F3ZGZOam16UG1n.jpg",
      rate: "3",
      trailer: "https://www.youtube.com/embed/4o81FTZNfxI"

    },
    {
      title: "Breaking bad",
      description:
        "Genre : Crime",
      posterUrl:
        "https://i.egycdn.com/pic/WmFwZndlY21UWWp2Y3ZjdlJjd1RtbWpQbUVsbUV2dw.jpg",
      rate: "4",
      trailer :"https://www.youtube.com/embed/faqmNf_fZlE"
    },
    {
      title: "hunter x hunter",
      description:
        "Genre : Anime",
      posterUrl:
        "https://i.egycdn.com/pic/WmFwZndlY21UbW12bXZtbW1tRWN2TlRqdmNja05ibWo.jpg",
      rate: "5",
      trailer:"https://www.youtube.com/embed/gh-vFtEEd84"
    },
])
const add=(newfilm)=>{
  setFilms([...films,newfilm])
}
  return (
    
    <div className="App">
      <header className="App-header">
      <MovieList films={films} />
      <MovieAdd  add={add}/>
      </header>
    </div>
    );
}

export default App;
