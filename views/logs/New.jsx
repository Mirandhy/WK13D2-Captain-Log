const React = require ("react")


class New extends React.Component{
    render( ) {
        return(
            <div>
                <h1>Create New Log</h1>
                <h2>Captain's Log</h2>
                <form action ="/logs" method="POST">
                    Title: <input type="text" name="title" /> <br />
                    Entry: <textarea name="entry" rows="4" cols = "30"/> <br />
                    Is ship broken: <input type="checkbox" name="shipIsBroken" value= "Is ship broken"checked/> <br />
                    <input type="submit" value="Create Log" />
                </form>
            </div>
        )
    }

}


module.exports = New;