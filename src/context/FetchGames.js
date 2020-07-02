const API_KEY = process.env.RAWG_API_KEY;
const API_URL = 'https://api.rawg.io/api/games?search=';


function Search( {query, setQuery} ){

    // const [query, setQuery] = useState('');
    
    const search = (query) => {
        if (query !== ''){
        try {
            fetch(`${API_URL}${query}`)
                .then(response => response.json())
                .then(data => {
                    setQuery(data);
                    console.log(data);
                    setQuery('');
                })
        } catch (err){
            console.log(err);
            }
        }
    }
}