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
        <TextSegment textSegments={['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam']} />
        <PictureContainer>
            <CircPicture img={Sentkowski}/>
        </PictureContainer>
        <PostHeading heading='Szymon Sentkowski' identifier='Sentkowski' />
        <TextSegment textSegments={['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam', 'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.']} />
        <PictureContainer>
            <CircPicture img={Sentkowski}/>
        </PictureContainer>
        <PostHeading heading='Szymon Sentkowski' identifier='Sentkowski' />
        <TextSegment textSegments={['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam', 'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.']} />
    </>
)

function PictureContainer(props) {
    return (
        <div className={styles.pictureContainer}>
            {props.children}
        </div>
    )
}