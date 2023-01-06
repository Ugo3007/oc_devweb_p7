import '../../styles/Housing/tag.css'

export default function Tag ({tagname}) {
    return (
        <div className='tag-container'>
            {
                tagname.map((value) => {
                    return <div className="tag">{value}</div>
                })
            }
        </div>
    )
}