import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const BSPanel = ({ title, children }) => (
  <div className="panel panel-default genre-cloud">
    <div className="panel-heading">
      <h3 className="panel-title">{title}</h3>
    </div>
    <div className="panel-body">{children}</div>
  </div>
);

const GenreCloud = ({ genres }) => (
  <div className="container">
    <div className="row">
      <div className="col-xs-12">
        <BSPanel title="Popular Genres">
          {genres.map((genre, index) => {
            let size = 'btn-xs';
            if (index < 10) {
              size = 'btn-lg';
            } else if (index < 30) {
              size = 'btn-md';
            }
            return (
              <button className={`btn btn-default ${size}`} key={index}>
                {genre}
              </button>
            );
          })}
        </BSPanel>
      </div>
    </div>
  </div>
);

let genres = [
  'Jazz',
  'Top 40',
  'Country',
  'Blues',
  'Easy Listening',
  'Rock',
  'Classical',
  '80s',
  'Chillout',
  'Oldies',
  'Dance',
  'Trance',
  'Reggae',
  'Ambient',
  'Hip Hop',
  'Smooth Jazz',
  '70s',
  'House',
  'Lounge',
  'Metal',
  'Drum And Bass',
  'Meditation',
  'Techno',
  'Heavy Metal',
  'Soul',
  '60s',
  'Pop',
  'Psytrance',
  'Bollywood',
  '90s',
  'Latin',
  '50s',
  'Funk',
  'Rap',
  'Rockabilly',
  'Hindi',
  'Greek',
  'Minimal',
  'Comedy',
  'Alternative',
  'Bluegrass',
  'New Age',
  'Edm',
  'Manele',
  'Reggaeton',
  'Salsa',
  'Swing',
  'Disco',
  'Japanese',
  'Classic Rock',
  'Chill',
  'Electronic',
  'Dancehall',
  'Talk',
  'Rnb',
  'Psychedelic',
  'Dub',
  'Dubstep',
  'Progressive',
  'Hardstyle',
  'Romantic',
  'Indie',
  'Goa',
  'Eurodance',
  'Kizomba',
  'Folk',
  'Hardcore',
  'Celtic',
  'Americana',
  'New Wave',
  'Goth',
  'Electro',
  'Soundtracks',
  'Jungle',
  'Jewish',
  'Opera',
  'Indian',
  'Punk',
  'Downtempo',
  'Garage'
];

ReactDOM.render(
  <GenreCloud genres={genres} />,
  document.querySelector('#root')
);

export { GenreCloud, genres };
