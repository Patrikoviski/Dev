(function () {
    const students = [
        {       name: "John Doe", n1: 8.5, n2: 7.0, n3: 9.0, n4: 6.5},
        {       name: "Jane Smith", n1: 9.0, n2: 8.5, n3: 7.5, n4: 8.0},
        {       name: "Alice Johnson", n1: 6.0, n2: 7.5, n3: 8.0, n4: 6.5},
        {       name: "Bob Brown", n1: 5.5, n2: 6.0, n3: 7.0, n4: 5.5},
        {       name: "Charlie Davis", n1: 8.0, n2: 9.0, n3: 8.5, n4: 7.5},
        {       name: "David Wilson", n1: 7.5, n2: 8.0, n3: 7.0, n4: 8.5},
        {       name: "Emma Thompson", n1: 9.5, n2: 8.0, n3: 9.0, n4: 9.5},
        {       name: "Frank Garcia", n1: 6.5, n2: 7.0, n3: 6.0, n4: 7.5},
        {       name: "Grace Martinez", n1: 8.5, n2: 9.0, n3: 8.0, n4: 9.0},
        {       name: "Hannah Lee", n1: 7.0, n2: 6.5, n3: 7.5, n4: 8.0}
    ]

    students.forEach(student => {
        student.average = window.average(student.n1, student.n2, student.n3, student.n4)
    })

    const html = students.map(student => `
        <tr>
            <td>${student.name}</td>
            <td>${student.n1}</td>
            <td>${student.n2}</td>
            <td>${student.n3}</td>
            <td>${student.n4}</td>
            <td>${student.average}</td>
        </tr>
    `).join('')

    document.querySelector("tbody").innerHTML = html
})()