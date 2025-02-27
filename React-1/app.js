
let greet = React.createElement('div', { id: 'parent' },
    React.createElement('div', { id: 'child' },
        [
            React.createElement('h1', { id: 'content' }, 'Hello from React'),
            React.createElement('h2', { id: 'content2' }, 'Hello from React Heading2')
        ]
    ))

console.log(greet);


let root = ReactDOM.createRoot(document.getElementById('root'))

root.render(greet)
