const parser = new DOMParser();
const xmlString = `
    <list>
        <student>
            <name lang="en">
                <first>Ivan</first>
                <second>Ivanov</second>
            </name>
            <age>35</age>
            <prof>teacher</prof>
        </student>
        <student>
            <name lang="ru">
                <first>Петр</first>
                <second>Петров</second>
            </name>
            <age>58</age>
            <prof>driver</prof>
        </student>
    </list>
`;
const xmlDOM = parser.parseFromString(xmlString, 'text/xml'); 
const studentsNode = xmlDOM.querySelectorAll('student');
const results = {
    list: [

    ]
}
studentsNode.forEach(studentNode => {
    const firstNameNode = studentNode.querySelector('first');
    const secondNameNode = studentNode.querySelector('second');
    const ageNode = studentNode.querySelector('age');
    const profNode = studentNode.querySelector('prof');
    const langNode = studentNode.querySelector('name').getAttribute('lang');
    const result = {
        name: `${firstNameNode.textContent} ${secondNameNode.textContent}`,
        age : ageNode.textContent,
        prof : profNode.textContent,
        lang: langNode,
    }
    results.list.push(result)

})
console.log('results', results)
 



