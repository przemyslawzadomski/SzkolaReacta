import {useState} from "react";

export default function FuncTimer() {
    const [time, setTime] = useState(0);

    setInterval(function () {
        setTime(time + 1);
    }, 1000);

    return (
        <div>
            <h1>Licznik funkcyjny</h1>
            <p>
                {time}
            </p>
        </div>
    )
}