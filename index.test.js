
const {Movie, Crew, Cast} = require('./index')
const {sequelizedb } = require('./db.js');

describe('Movie test cases', () => {
    /**
     * Runs the code prior to all tests
     */

    // initiaize objects

    const movie1 = { name: 'Transporter 2', releaseDate: '2005-05-01', rating: 'PG-13' }
    const cast1 = {name: 'Jason Statham'};
    const cast2 = {name: 'Amber Valletta'};
    const cast3 = {name: 'Jason Flemyng'};

    const crew1 = {name: 'Luc Besson', role: 'Producer'};
    const crew2 = {name: 'Steven Chasman', role: 'Producer'};
    const crew3 = {name: 'Terry Miller', role: 'Executive Producer'};
    
    const movie2 = { name: 'Rush Hour 2', releaseDate: '2001-05-01', rating: 'PG-13' }
    const cast4 = {name: 'Jackie Chan'};
    const cast5 = {name: 'Chris Tucker'};
    const cast6 = {name: 'Alan King'};

    const crew4 = {name: 'Brett Ratner', role: 'Director'};
    
    
    const movie3 = { name: 'Oceans 12', releaseDate: '2004-05-01', rating: 'PG-13' }
    const cast7 = {name: 'George Clooney'}
    const cast8 = {name: 'Brad Pitt'}
    const cast9 = {name: 'Matt Damon'}

    const crew5 = {name: 'Steven Soderbergh', role: 'Director'}
    
        
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelizedb.sync({ force: true });
        

        

    })

    test('can create a movie', async () => {
        const movie = await Movie.create(movie1)
        expect(movie.id).toBe(1)
    })

    
    test('movies have cast', async () => {
        const movie = await Movie.create(movie2)
        const cast = await Cast.create(cast1);
        await movie.addCast(cast);
        const casts = await movie.getCast();
        expect(casts[0].name).toBe('Jason Statham');
    })

    test('movies have crew', async () => {
        const movie = await Movie.create(movie3)
        const crew = await Crew.create(crew1);
        await movie.addCrew(crew);
        const crews = await movie.getCrew();
        expect(crews[0].name).toBe('Luc Besson');
    })

    afterAll(async () => {
        // the 'sync' method will drop tables based on the model class
        // by setting 'force:true' the tables are dropped each time the 
        // test suite is run
        await sequelizedb.drop({ force: true });
        await sequelizedb.close();
        

        

    })

    
    
})