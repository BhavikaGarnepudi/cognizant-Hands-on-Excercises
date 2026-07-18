import React from 'react';

function ListofPlayers() {

    const players = [
        { name: "Virat Kohli", score: 95 },
        { name: "Rohit Sharma", score: 88 },
        { name: "Shubman Gill", score: 76 },
        { name: "KL Rahul", score: 69 },
        { name: "Hardik Pandya", score: 82 },
        { name: "Ravindra Jadeja", score: 71 },
        { name: "Rishabh Pant", score: 65 },
        { name: "Suryakumar Yadav", score: 91 },
        { name: "Jasprit Bumrah", score: 54 },
        { name: "Mohammed Siraj", score: 60 },
        { name: "Kuldeep Yadav", score: 73 }
    ];

    // Filter players with scores below 70
    const lowScorePlayers = players.filter(player => player.score < 70);

    return (
        <div>
            <h2>List of Players</h2>

            <table border="1" cellPadding="8">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Score</th>
                    </tr>
                </thead>

                <tbody>
                    {players.map((player, index) => (
                        <tr key={index}>
                            <td>{player.name}</td>
                            <td>{player.score}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <br />

            <h2>Players with Score Below 70</h2>

            <table border="1" cellPadding="8">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Score</th>
                    </tr>
                </thead>

                <tbody>
                    {lowScorePlayers.map((player, index) => (
                        <tr key={index}>
                            <td>{player.name}</td>
                            <td>{player.score}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ListofPlayers;