import React from "react"

function NewsDetail ({ detail }) {
    return (
        <div className="detail">
            <h2>{detail.title}</h2>
            <div>
                {
                detail.content.map((item, index) =>
                item.startsWith("http") ? (<img key={index} src={item} alt="image"/>
                ) : (
                    <p key={index}>{item}</p>
                )
                )}
            </div>
        </div>
    )
}

export default NewsDetail