import React from "react"
import styles from "../styles/about.module.css"
import PostTitile from "../components/post-title.js"
import PostSubtitle from "../components/post-subtitle.js"
import PostHeading from "../components/post-heading.js"
import TextSegment from "../components/text-segment.js"
import Expandable from "../components/expandable.js"

export default () => (
    <>
        <PostTitile title="What's the fuss about?" />
        <PostSubtitle subtitle="The motivation & the idea" />
        <TextSegment textSegments={['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam']} />
        <PostHeading heading='Our rules' />
        <ul className={styles.ruleList}>
            <li><Expandable summary='Something more than tables' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.' /></li>
            <li><Expandable summary='Keep it simple' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.' /></li>
            <li><Expandable summary='Supplementary resource' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.' /></li>
            <li><Expandable summary='Something more than tables' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.' /></li>
       </ul>
       <PostHeading heading='Why?' />
       <TextSegment textSegments={['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam']} /> 
   </>
)