import { useState } from "react";
import MovieList from "./MovieList";
import Filter from "./Filter";
import "./list.css"
import AddMovie from './AddMovie';

import { Routes, Route } from 'react-router-dom';
import MovieDetail from "./MovieDetail";



function App() {

  // Initial movie data

  const [movies, setMovie] = useState([
    {
      id:"1",
      title: "Jumanji",
      description: "Alan Parrish discovers a mysterious game, propelling him into a fantastical adventure. As he navigates challenges, he unravels its secrets, forging a journey of self-discovery and resilience.",
      rating: "9",
      posterURL: "https://media.services.cinergy.ch/media/box1600/eb7adc1f7fc45358cbd201606bf95c8bcf02f51b.jpg",
      trailer:"https://www.youtube.com/embed/2QKg5SZ_35I?si=DQRMpfyYbhp09F5u"
    },
    {
      id:"2",
      title: "Avatar ",
      description: "Avatar follows Jake Sully, a paraplegic marine, undertaking a secret mission to infiltrate Pandora's Na'vi colony for a valuable ore. The plot unfolds as he navigates the conflict between military interests and the indigenous population.",
      rating: "8",
      posterURL: "https://fr.web.img4.acsta.net/pictures/22/11/02/14/49/4565071.jpg",
      trailer:"https://www.youtube.com/embed/5PSNL1qE6VY?si=Ht1Qump2irsdLrQS"
    },
    {
      id:"3",
      title: "Spider man",
      description: "Teenager Peter Parker gains superpowers after a radioactive spider bite. Devastated by his uncle's murder, Peter becomes a vigilante, vowing to use his abilities for justice and avenging his beloved relative's death.",
      rating: "10",
      posterURL: "https://fr.web.img5.acsta.net/medias/nmedia/00/00/00/33/spiderman.jpg",
      trailer:"https://www.youtube.com/embed/wPosLpgMtTY?si=LnY0wpWmCLjdNNG4" 
    },
    {
      id:"4",
      title: "John Wick",
      description: "In the 2014 film John Wick, directed by Chad Stahelski and written by Derek Kolstad, Keanu Reeves plays the titular character, a retired hitman seeking vengeance, thrust back into a world of lethal action.",
      rating: "9",
      posterURL: "https://fr.web.img5.acsta.net/pictures/14/10/01/10/58/585967.jpg",
      trailer:"https://www.youtube.com/embed/C0BMx-qxsP4?si=HPJDg4sYW7j78aJ2"
    },
    {
      id:"5",
      title: "Fast X",
      description: "Dante chases Dom and family worldwide—Los Angeles to Rome's catacombs, Brazil to London, Antarctica to Portugal. Alliances form, old enemies return.",
      rating: "6.4",
      posterURL: "https://ae01.alicdn.com/kf/S08b11786e2c74d43b63b77d200b5f27fL.jpg_640x640q90.jpg",
      trailer:"https://www.youtube.com/embed/32RAq6JzY-w?si=0j8bE14sNK7zz7XV"
    },
    {
      id:"6",
      title: "Meg 2",
      description: "Join Jason Statham and Wu Jing in a thrilling oceanic adventure, guiding a bold research team on an unprecedented dive into the abyss, unraveling mysteries in the deepest corners of the sea.",
      rating: "7",
      posterURL: "https://m.media-amazon.com/images/M/MV5BMTM2NTU1ZTktNjc4YS00NjNhLWE4NmYtOTM2YjFjOGUzNmYzXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg",
      trailer:"https://www.youtube.com/embed/dG91B3hHyY4?si=iQ-ChDwhwLR3RL5J"
    },
    {
      id:"7",
      title: "Avengers",
      description: "Avengers (Marvel's The Avengers), réalisé par Joss Whedon en 2012, est un film américain de super-héros basé sur l'équipe du même nom de Marvel Comics. Connus comme Les Vengeurs au Québec, c'est une épopée captivante.",
      rating: "8.5",
      posterURL: "https://www.radiofrance.fr/s3/cruiser-production/2019/03/e5c90438-702e-4888-93d7-c00fbd8dbd64/1200x680_3315492.jpg",
      trailer:"https://www.youtube.com/embed/6ZfuNTqbHE8?si=ghUOcqiznkb-RYUp"
    },
    {
      id:"8",
      title: "Aquaman",
      description: "Arthur Curry, aka Aquaman, a superhero of the aquatic realm, chooses the human world. Faced with Atlanteans' warlike desires, he rises to become the ocean's king while dwelling on the surface.",
      rating: "8",
      posterURL: "https://3.bp.blogspot.com/-w0QIC2guQks/W-2tm77Xl5I/AAAAAAAA9O4/nDJ8hQOA3fUpSkyc6JG45tMD6OTs_Z7iACLcBGAs/s640/aqua3.jpg",
      trailer:"https://www.youtube.com/embed/UGc5Tzz19UY?si=OSFDbC-pT513_umS"
    },
  ])

  // State for filtering movies based on title and rating
  const [filter, setFilter] = useState({ title: '', rating: '' });

  // Function to handle changes in filter values
  const handleFilterChange = (key, value) => {
    setFilter({ ...filter, [key]: value });
  };

   // Filtering movies based on title and rating
  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filter.title.toLowerCase()) &&
      (filter.rating === '' || movie.rating.toString().includes(filter.rating))
  );

   // Function to add a new movie to the list
  const handleAddMovie = (newMovie) => {
    setMovie([...movies, newMovie]);
  };


  return (
    <> 
    
      <Filter onFilterChange={handleFilterChange} />

       {/* Define routes for different pages */}
      <Routes>
        <Route path="/" element={<><AddMovie onAddMovie={handleAddMovie} /> <MovieList movies={filteredMovies} /></>} />
        <Route path="/movies/:id" element={ <MovieDetail movies={movies} />} />
      </Routes>
                             
    </>
  );
}
// Exporting the App component as the default export
export default App;
