(function () {
    const students = [
        {       name: "John Doe", notes: [ 8.5, 7.0, 9.0, 6.5]},
        {       name: "Jane Smith", notes: [ 9.0, 8.5, 7.5, 8.0]},
        {       name: "Alice Johnson", notes: [ 6.0, 7.5, 8.0, 6.5]},
        {       name: "Bob Brown", notes: [ 5.5, 6.0, 7.0, 5.5]},
        {       name: "Charlie Davis", notes: [ 8.0, 9.0, 8.5, 7.5]},
        {       name: "David Wilson", notes: [ 7.5, 8.0, 7.0, 8.5]},
        {       name: "Emma Thompson", notes: [ 9.5, 8.0, 9.0, 9.5]},
        {       name: "Frank Garcia", notes: [ 6.5, 7.0, 6.0, 7.5]},
        {       name: "Grace Martinez", notes: [ 8.5, 9.0, 8.0, 9.0]},
        {       name: "Hannah Lee", notes: [ 7.0, 6.5, 7.5, 8.0]}
    ]

    students.forEach(student => {
        student.average = window.average(...student.notes)
    })

    // Generate table header dynamically
    
    const tableHead = document.getElementById('table-head')
    let headerHtml = '<tr><th>Name</th>'
    const noteCount = students[0].notes.length

    for (let i = 0; i < noteCount; i++) {
        headerHtml += `<th student-note="n${i+1}">Note ${i+1}</th>`
    }

    headerHtml += '<th student-note="average">Average</th></tr>'
    tableHead.innerHTML = headerHtml

    const html = students.map(student => {
        const notesTds = student.notes.map(note => `<td>${note}</td>`).join('');
        let averageContent = student.average;
        if (student.notes.length !== students[0].notes.length) {
            averageContent = 'In Exame';
        }
        const rowStyle = student.average >= 7 ? ' style="background-color: #b6fcb6;"' : '';
        return `
            <tr${rowStyle}>
                <td>${student.name}</td>
                ${notesTds}
                <td>${averageContent}</td>
            </tr>
        `;
    }).join('');

    document.querySelector("tbody").innerHTML = html
})()