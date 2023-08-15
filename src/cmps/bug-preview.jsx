export function BugPreview({ bug }) {
    
    return <article className="bug-preview">
        <h4>{bug.title}</h4>
        <h1>🐛</h1>
        <p>Severity: <span>{bug.severity}</span></p>
        <p>Description: <span>{bug.description}</span></p>
        {bug.labels.map(l => <p key={l}>{l}</p>)}
    </article>
}