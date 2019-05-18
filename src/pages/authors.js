import React from "react"
import styles from "../styles/authors.module.css"
import PostTitile from "../components/post/post-title.js"
import PostSubtitle from "../components/post/post-subtitle.js"
import PostHeading from "../components/post/post-heading.js"
import TextSegment from "../components/post/text-segment.js"
import CircPicture from "../components/aesthetics/rect-picture.js"
import Sentkowski from "../../static/ja.png"

export default () => (
    <>
        <PostTitile title="Just the two of us" />
        <PostSubtitle subtitle="Trying to make things better" />
        <TextSegment textSegments={["We are both specializing in different fields. This unique combination of skills gave birth to the idea of Grammechs."]} />
        <PostHeading heading='Camille Poilane' identifier='Poilane' />
        <TextSegment textSegments={["Hi, I'm from France and I recently turned 21. I study English and French as a Foreign Language.", "I love my language and am eager to share it worldwide (ambitious, isn’t it?). While learning how to teach French to non natives, I also give English lessons to school girls in my spare time.", "I am fond of teaching and hope to create a sphere where everyone feels free to learn in their own time. That's why I'm making sure everything you learn here is correct and illustrated with interesting examples."]} />
        <PostHeading heading='Szymon Sentkowski' identifier='Sentkowski' />
        <PictureContainer>
            <CircPicture alt='A picutre of Szymon Sentkowski.' img={Sentkowski}/>
        </PictureContainer>
        <TextSegment textSegments={["I'm a 21 years old Polish student of practical linguistics and copywriting, currently preparing to start a coding career.", "If something doesn't work on this website – I'm the one to blame, as I'm responsible for the technical stuff here. I'm also designing posts and interactions.", "I love to create (especially when the effects turn out to be useful to other people!), so I decided to start this project with Camille. It's not a secret that I'm still learning though, so I would be extremely grateful for any suggestions regarding the website dropped on our mail."]} />
    </>
)

function PictureContainer(props) {
    return (
        <div className={styles.pictureContainer}>
            {props.children}
        </div>
    )
}