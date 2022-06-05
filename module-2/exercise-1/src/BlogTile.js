import {useState} from "react";

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
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };
    return (
        <div style={styles.news} className="news">
            <h2 style={styles.title} className="title">{props.title}</h2>
            <p className="intro">{props.intro.length > 25 && !expanded ? props.intro.slice(0, 25) + '...' : props.intro}</p>
            <button onClick={toggleExpanded} className="button">Pokaż więcej</button>
        </div>
    )
}