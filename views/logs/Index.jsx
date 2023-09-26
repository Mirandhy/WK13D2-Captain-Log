const React = require("react");

class Index extends React.Component {
    render() {
        const { logs } = this.props
        return (
            <div>
            <h1>List of Log Entry</h1>
                <ul>
                    {
                        logs &&
                        logs.map((log, i) => {

                            return (
                                <li key={i}>
                                    <strong>Log title:</strong>{" "}
                                    {/* Created link from log title to Show page */}
                                    <a href={`/logs/${log._id}`}>
                                        {log.title}
                                    </a>{" "}
                                   <strong>Log entry:</strong>{" "}{log.entry}
                                   <br />
                                    {log.shipIsBroken ?
                                        `The ship is broken`
                                        :
                                        `The ship is not broken`
                                    } 
                                    {/* Created link to Edit log entry */}
                                    <br />
                                    <a href={`/logs/${log._id}/edit`}>Edit log</a>

                                    {/* #4: Created Delete form in index.jsx for log entry */}
                                    <form action={`/logs/${log._id}?_method=DELETE`} method="POST">
                                        <input type="submit" value="DELETE" />
                                    </form>
                                </li>
                            )
                        })
                    }
                </ul>
                <nav>
                    <a href="/logs/new">Go to page: Create A New Log</a>
                </nav>
            </div>
        )
    }
}

module.exports = Index;