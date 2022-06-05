const styles = {
    news: {
        padding: '2rem',
        borderRadius: '1rem',
        border: '2px solid black',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },

    title: {
        margin: 0,
    }
}

export default function BlogTile(props) {
    return (
        <div style={styles.news} className="news">
            <h2 style={styles.title} className="title">{props.title}</h2>
            <p className="intro">{props.intro}</p>
            <button className="button">Pokaż więcej</button>
        </div>
    )
}