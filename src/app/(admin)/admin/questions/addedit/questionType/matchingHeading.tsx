import Editor from '../_components/editor/editor'

export default function MatchingHeading() {
    return (
        <div>
            matching heading
            <label className="title-label" htmlFor="name">
                Name
            </label>
            <Editor />
        </div>
    )
}
