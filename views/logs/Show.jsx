const React = require("react");

class Show extends React.Component {
    render ( ){
        const { title, entry, shipIsBroken } = this.props.log
        return ( 
            <div>
                <h1>Show Page of {title}</h1>
                The {title}
                <p>Log Entry: {entry}</p>
                <p>
                <strong>Ship Status:</strong> {
                    shipIsBroken ?
                    "The ship is broken!"
                    :
                    "The ship is not broken"
                }
                </p>
                <nav>
                    <a href="/logs">Return to Index Page</a>
                </nav>
            </div>
        )
    }
}

module.exports = Show;