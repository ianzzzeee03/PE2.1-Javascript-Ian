# PE2.1-Javascript-Ian
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Simple Voting System</title>
<style>
    body {
        background: linear-gradient(135deg, #667eea, #764ba2);
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        font-family: Arial, sans-serif;
    }

    .voting-system {
        background: #1e1e2f;
        padding: 25px;
        border-radius: 20px;
        box-shadow: 0 15px 30px rgba(0,0,0,0.4);
        width: 350px;
        color: white;
    }

    h1 {
        text-align: center;
        margin-bottom: 20px;
        font-size: 1.8rem;
    }

    select, input[type="number"], button {
        width: 100%;
        padding: 12px;
        margin: 10px 0;
        border-radius: 10px;
        border: none;
        font-size: 1rem;
    }

    select {
        background: #2e2e4d;
        color: white;
    }

    input[type="number"] {
        background: #2e2e4d;
        color: white;
    }

    button {
        background: #2ec4b6;
        color: black;
        font-weight: bold;
        cursor: pointer;
        transition: 0.2s;
    }

    button:hover {
        background: #5be7d3;
        transform: scale(1.05);
    }

    .results {
        margin-top: 15px;
        background: #000;
        padding: 15px;
        border-radius: 10px;
        color: #0f0;
        min-height: 60px;
    }
</style>
</head>
<body>

<div class="voting-system">
    <h1>Voting System</h1>

    <select id="candidateSelect">
        <option value="">-- Select Candidate --</option>
    </select>

    <input type="number" id="votesInput" placeholder="Number of votes" min="1">

    <button onclick="castVote()">Cast Vote</button>
    <button onclick="displayWinner()">Show Winner</button>

    <div id="results" class="results">Votes will appear here...</div>
</div>

<script>
    // Candidate list
    const candidates = ["Bongbong Marcos", "Manny Pacquiao", "Leni Robredo", "Isko Moreno"];
    const votes = {};

    // Initialize vote counts and dropdown
    const candidateSelect = document.getElementById("candidateSelect");
    candidates.forEach(candidate => {
        votes[candidate] = 0;
        const option = document.createElement("option");
        option.value = candidate;
        option.textContent = candidate;
        candidateSelect.appendChild(option);
    });

    const resultsDiv = document.getElementById("results");

    // Cast a vote function
    function castVote() {
        const candidate = candidateSelect.value;
        const voteCount = parseInt(document.getElementById("votesInput").value);

        if (!candidate) {
            alert("Please select a candidate!");
            return;
        }

        if (!voteCount || voteCount < 1) {
            alert("Please enter a valid number of votes!");
            return;
        }

        votes[candidate] += voteCount;
        resultsDiv.innerHTML = displayVotes();
        document.getElementById("votesInput").value = "";
    }

    // Display all votes
    function displayVotes() {
        let output = "<strong>Current Vote Count:</strong><br>";
        for (const candidate in votes) {
            output += `${candidate}: ${votes[candidate]} votes<br>`;
        }
        return output;
    }

    // Display winner (randomized if tie)
    function displayWinner() {
        let maxVotes = 0;
        let winners = [];

        for (const candidate in votes) {
            if (votes[candidate] > maxVotes) {
                maxVotes = votes[candidate];
                winners = [candidate];
            } else if (votes[candidate] === maxVotes) {
                winners.push(candidate);
            }
        }

        if (maxVotes === 0) {
            resultsDiv.innerHTML = "No votes cast yet!";
            return;
        }

        // Pick random winner if tie
        const winner = winners[Math.floor(Math.random() * winners.length)];
        resultsDiv.innerHTML = `🏆 Winner: ${winner} with ${maxVotes} votes!`;
    }
</script>

</body>
</html>
