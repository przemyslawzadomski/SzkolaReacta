import BlogTile from './BlogTile'

const posts = [
    {
        id: 1,
        title: 'Pilne: Co to był za dzień!',
        intro: 'Tego świat jeszcze nie widział',
    },
    {
        id: 2,
        title: 'Wszyscy zazdroszą Polakom!',
        intro: 'Takiego clickbajtowego tytułu jeszcze nikt nie wymyślił',
    },
    {
        id: 3,
        title: 'Adam Małysz Zgolił wąs',
        intro: 'Po przegranym zakładzie z Piotrem Żyłą nasz mistrz olimpijski zgolił wąsy',
    }
]

const styles = {
    app: {
        display: 'grid',
        grid: '1fr / repeat(3, 400px)',
        justifyContent: 'center',
        gap: '2rem',
    }
}

function App() {
    return (
        <div style={styles.app} className="App">
            {
                posts.map(post => {
                    return <BlogTile key={post.id} title={post.title} intro={post.intro}/>
                })
            }
        </div>
    );
}

export default App;