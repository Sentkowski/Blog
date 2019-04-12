import React from "react"
import styles from "../styles/authors.module.css"
import PostTitile from "../components/post-title.js"
import PostSubtitle from "../components/post-subtitle.js"
import PostHeading from "../components/post-heading.js"
import TextSegment from "../components/text-segment.js"
import CircPicture from "../components/rect-picture.js"
import Sentkowski from "../../static/ja.png"

export default () => (
    <>
        <PostTitile title="Just the two of us" />
        <PostSubtitle subtitle="Trying to make things better" />
        <TextSegment textSegments={["We are both specializing in different fields. This unique combination of skills gave birth to the idea of Grammechs."]} />
        <PostHeading heading='Camille Poilane' identifier='Poilane' />
        <TextSegment textSegments={['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam', 'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.']} />
        <PostHeading heading='Szymon Sentkowski' identifier='Sentkowski' />
        <PictureContainer>
            <CircPicture img={Sentkowski}/>
        </PictureContainer>
        <TextSegment textSegments={["I'm a 21 years old student of practical linguistics and copywriting, currently preparing to start a coding career.", "If something doesn't work on this website – I'm the one to blame, as I'm responsible for the technical stuff here. I'm also designing posts and interactions.", "I love to create (especially when the effects turn out to be useful to other people!), so I decided to start this project with Camille. It's not a secret that I'm still learning though, so I would be extremely grateful for any suggestions regarding the website dropped on our mail."]} />
    </>
)

function PictureContainer(props) {
    return (
        <div className={styles.pictureContainer}>
            {props.children}
        </div>
    )
}