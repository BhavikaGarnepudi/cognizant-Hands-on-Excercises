import React from 'react';

function IndianPlayers() {

    const players = [
        "Virat Kohli",
        "Rohit Sharma",
        "Shubman Gill",
        "KL Rahul",
        "Hardik Pandya",
        "Ravindra Jadeja"
    ];

    // Destructuring
    const [odd1, even1, odd2, even2, odd3, even3] = players;

    const T20Players = [
        "Virat Kohli",
        "Rohit Sharma",
        "Suryakumar Yadav"
    ];

    const RanjiTrophyPlayers = [
        "Cheteshwar Pujara",
        "Hanuma Vihari",
        "Mayank Agarwal"
    ];

    // Merge Arrays
    const mergedPlayers = [...T20Players, ...RanjiTrophyPlayers];

    return (
        <div>

            <h2>Odd Team Players</h2>
            <ul>
                <li>{odd1}</li>
                <li>{odd2}</li>
                <li>{odd3}</li>
            </ul>

            <h2>Even Team Players</h2>
            <ul>
                <li>{even1}</li>
                <li>{even2}</li>
                <li>{even3}</li>
            </ul>

            <h2>Merged Players</h2>
            <ul>
                {mergedPlayers.map((player, index) => (
                    <li key={index}>{player}</li>
                ))}
            </ul>

        </div>
    );
}

export default IndianPlayers;