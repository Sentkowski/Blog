import React from "react"
import PostContainer from "../components/post-container.js"
import PostTitile from "../components/post-title.js"
import PostSubtitle from "../components/post-subtitle.js"
import ContentList from "../components/content-list.js"
import PostHeading from "../components/post-heading.js"

let dummy = [
    'Introduction',
    'Rules',
    [
        'La',
        'Le',
        "L'",
        'Les'
    ],
    'Examples',
    'Exercises'
]

export default () => (
    <PostContainer>
        <PostTitile title='French definite articles' />
        <PostSubtitle subtitle="La, le, les, l'" />
        <ContentList content={dummy} />
        <PostHeading heading='La, le, les, l’ = the' />
    </PostContainer>
)