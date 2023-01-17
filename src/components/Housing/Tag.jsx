import '../../styles/Housing/tag.css'

export default function Tag ({tagname}) {
    return (
        <div className='tag-container'>
            {
                tagname.map((value, index) => {
                    return <div key={value.toString() + index.toString()} className="tag">{value}</div>
                })
            }
        </div>
    )
}