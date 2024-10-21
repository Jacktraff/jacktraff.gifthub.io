function filterData() {
  event.preventDefault();
  var startdate = document.getElementById("startdate").value;
  var enddate = document.getElementById("enddate").value;
  alert(startdate);
  alert(enddate);
}
// Fetch the data from the provided URL
fetch('https://compute.samford.edu/zohauth/clients/datajson/1')
    .then(response => response.json())
    .then(data => {
        // Get the table by ID
        const table = document.getElementById('pitchTable');

        // Loop through the fetched data and create table rows
        data.forEach(pitch => {
            const row = document.createElement('tr');

            // Create cells for each data field
            const pitchNoCell = document.createElement('td');
            const link = document.createElement('a');
            link.href = `details.html?id=${pitch.PitchNo}`;
            link.textContent = `Pitch ${pitch.PitchNo}`;
            pitchNoCell.appendChild(link);
            row.appendChild(pitchNoCell);

            const dateCell = document.createElement('td');
            dateCell.textContent = pitch.Date;
            row.appendChild(dateCell);

            const timeCell = document.createElement('td');
            timeCell.textContent = pitch.Time;
            row.appendChild(timeCell);

            const batterCell = document.createElement('td');
            batterCell.textContent = pitch.Batter;
            row.appendChild(batterCell);

            const ballsCell = document.createElement('td');
            ballsCell.textContent = pitch.Balls;
            row.appendChild(ballsCell);

            const strikesCell = document.createElement('td');
            strikesCell.textContent = pitch.Strikes;
            row.appendChild(strikesCell);

            const outsCell = document.createElement('td');
            outsCell.textContent = pitch.Outs;
            row.appendChild(outsCell);

            const pitchCallCell = document.createElement('td');
            pitchCallCell.textContent = pitch.PitchCall;
            row.appendChild(pitchCallCell);

            const korBBCell = document.createElement('td');
            korBBCell.textContent = pitch.KorBB || '';
            row.appendChild(korBBCell);

            const relSpeedCell = document.createElement('td');
            relSpeedCell.textContent = pitch.RelSpeed || '';
            row.appendChild(relSpeedCell);

            const spinRateCell = document.createElement('td');
            spinRateCell.textContent = pitch.SpinRate || '';
            row.appendChild(spinRateCell);

            const spinAxisCell = document.createElement('td');
            spinAxisCell.textContent = pitch.SpinAxis || '';
            row.appendChild(spinAxisCell);

            // Append the row to the table
            table.appendChild(row);
        });
    })
    .catch(error => console.error('Error fetching data:', error));
