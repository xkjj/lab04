const moviesdata = [
    'The Shawshank Redemption',
    'The Godfather',
    'The Godfather: Part II',
    'The Dark Knight',
    'Pulp Fiction',
    'LOTR: The Return of the King',
    'Interstella',
    'Spirted Away',
    'Aliens',
    'Taxi Driver',
    'Whiplash',
    'Memento',
    'Alien',
    'Blade Runner 2049',
    'WALL·E',
    'The Dark Knight Rises'
];

const titleSearch = (title) => {

    let search = moviesdata.includes(title);

    if (search) {
        return `I want to search for the following movie ${title}
            ...Found movie`;
    } else {
        return `I want to search for the following movie ${title}
            ...No movie with that name on system`;
    }

};

//console.log(titleSearch('The Godfather'));

const titleSearchForEach = (title) => {

    let lc_title = title.toLowerCase();

    let searchResults=[];

    moviesdata.forEach((movieTitle) => {
        let lc_movieTitle = movieTitle.toLowerCase();

        if (lc_movieTitle.includes(lc_title)) {
            searchResults.push(movieTitle);
        }

    });

    return searchResults;

};

//let search = titleSearchForEach("the");
//console.table(search);

const movies = [
    {title: 'The Shawshank Redemption', year: 1994, director: 'Frank Darabont'},
    {title: 'The Godfather', year: 1972, director: 'Francis Ford Coppola'},
    {title: 'The Godfather: Part II', year: 1974, director: 'Francis Ford Coppola'},
    {title: 'The Dark Knight', year: 2008, director: 'Christopher Nolan'},
    {title: 'Pulp Fiction', year: 1994, director: 'Quentin Tarantino'},
    {title: 'LOTR: The Return of the King', year: 2003, director: 'Peter Jackson'},
    {title: 'Interstellar', year: 2014, director: 'Christopher Nolan'},
    {title: 'Whiplash', year: 2014, director: 'Damien Chazelle'},
    {title: 'The Lion King', year: 1994, director: 'Roger Allers'},
    {title: 'Alien', year: 1979, director: 'Ridley Scott'},
    {title: 'Blade Runner 2049', year: 2017, director: 'Denis Villeneuve'},
    {title: 'WALL·E', year: 2008,  director: 'Andrew Stanton'},
    {title: 'The Dark Knight Rises', year: 2012, director: 'Christopher Nolan'}
  ];

  
const titleSearchComplex = (dataTitle) => {

    let lc_title = dataTitle.toLowerCase();
    let searchResults = [];
  
    movies.forEach((movieT) => {
      let lc_movieTitle = movieT.title.toLowerCase();  
  
      if (lc_movieTitle.includes(lc_title)) {
       searchResults.push(movieT);
      }
    });
  
    return searchResults;
  };


  const yearBeforeSearch = (dataYear) => {
    let movieYear = dataYear.toString();
    let yearSearch = [];

    movies.forEach((movieY) => {
        let yearBefore = movieY.year

        if(yearBefore <= movieYear) {
            yearSearch.push(movieY);
        }
    });

    return yearSearch;
  };
  
  console.table(titleSearchComplex("king"));
  console.table(yearBeforeSearch("2000"));