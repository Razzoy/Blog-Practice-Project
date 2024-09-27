import Markdown from "markdown-to-jsx"
import style from '../Post/Post.module.scss'

export function Post({ data }) {
    return (
        <>
            {data?.aboutRallies?.map((item) => {
                return (
                    <article key={item.header}>
                        <h2>{item.header}</h2>
                        <img src={item.picture?.url} />
                        <Markdown>{item.content}</Markdown>
                        <p>{item.releaseDate}</p>
                        <p>{item.slug}</p>
                    </article>
                )
            })}
        </>
    )
}
