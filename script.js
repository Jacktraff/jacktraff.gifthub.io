function filterData() {
  event.preventDefault();

  // Get the start and end date values from the inputs
  var startdate = document.getElementById("startdate").value;
  var enddate = document.getElementById("enddate").value;

  // Convert the startdate and enddate to Date objects for comparison
  var start = new Date(startdate);
  var end = new Date(enddate);

  // Get all the rows from the table (excluding the header row)
  var table = document.getElementById("pitchTable");
  var rows = table.getElementsByTagName("tr");

  // Loop through the rows starting from the second row (index 1)
  for (var i = 1; i < rows.length; i++) {
      var dateCell = rows[i].getElementsByTagName("td")[1]; // Assuming the date is in the second column
      var rowDate = new Date(dateCell.textContent.trim()); // Convert the date in the cell to a Date object

      // Check if the row's date falls within the start and end date range
      if (rowDate >= start && rowDate <= end) {
          rows[i].style.display = ""; // Show the row if it matches the range
      } else {
          rows[i].style.display = "none"; // Hide the row if it falls outside the range
      }
  }
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
