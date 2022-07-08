import React from "react";
import Movie from "./movie";

export default class MovieList extends React.Component {
    render() {

        let movies = [
            {
                title: "Alien",
                image: "https://i.pinimg.com/originals/fe/61/13/fe6113725f63bc021f5283e4bae5128d.jpg",
                plot: "In deep space, the crew of the commercial starship Nostromo is awakened from their cryo-sleep capsules halfway through their journey home to investigate a distress call from an alien vessel. The terror begins when the crew encounters a nest of eggs inside the alien ship. An organism from inside an egg leaps out and attaches itself to one of the crew, causing him to fall into a coma.",
                reviews: []
            },
            {
                title: "2001",
                image: "https://miro.medium.com/max/840/1*oGtJQ6pcuEZMo9A1SEUAJA.jpeg",
                plot: "An imposing black structure provides a connection between the past and the future in this enigmatic adaptation of a short story by revered sci-fi author Arthur C. Clarke. When Dr. Dave Bowman (Keir Dullea) and other astronauts are sent on a mysterious mission, their ship's computer system, HAL, begins to display increasingly strange behavior, leading up to a tense showdown between man and machine that results in a mind-bending trek through space and time.",
                reviews: []
            },
            {
                title: "Sphere",
                image: "https://media-cache.cinematerial.com/p/500x/bx8cklim/sphere-movie-poster.jpg?v=1456169811",
                plot: "When psychologist Norman Goodman (Dustin Hoffman) wrote a report for the government on how to deal with extraterrestrial life forces, he didn't expect his recommendations to be used. Now that a secret government agency is investigating what may be an alien spaceship that has been discovered partially buried on the floor of the Pacific Ocean, Norman finds that the plan he outlined is being put into effect and that the team he named in his report has been assembled.",
                reviews: []
            },
            {
                title: "Below",
                image: "https://m.media-amazon.com/images/M/MV5BNTUxOGY0MTMtOWNkZS00NThlLWIzZDktMWJmMjQ4N2IyNWY4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
                plot: "The submarine U.S.S. Manta had a perfect record until the mysterious death of its captain. The next-in-command, Lt. Richard Brice (Bruce Greenwood) is determined to steer his disheartened crew back to safety. But after three battle survivors board the sub, bizarre and frightening things begin to happen. As the tale unfolds, and crew members begin to disappear, Ensign Douglas O'Dell (Matthew Davis) must piece together the puzzles of the submarine's past before it is too late to resurface alive.",
                reviews: []
            }
        ]
        let arr;
        arr = movies.map( (movie, index ) => 
            <Movie title={movie.title} plot={movie.plot} reviews={movie.reviews} image={movie.image} key={index} />
        )
        

        return(
            <div>
                { arr }
            </div>
        )
    } 
}