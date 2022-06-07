import React from "react";

export default class ClassTimer extends React.Component {

    state = {
        time: 0
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({time: this.state.time + 1});
        }, 1000)
    }

    render() {
        return (
            <div>
                <h1>Licznik klasowy</h1>
                <p>
                    {this.state.time}
                </p>
            </div>
        )
    }
}