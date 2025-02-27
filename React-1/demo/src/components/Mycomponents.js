

function Mycomponent() {

    const name = 'Alex'

    function showMessage(){
        return 'This message is from showMessage function'
    }

    return(
        <div>
            <h1>Hello I am {name} {10*200} {showMessage()}</h1>

        </div>
    )
}

export default Mycomponent