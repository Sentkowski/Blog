import React from "react"
import styles from "../styles/about.module.css"
import PostTitile from "../components/post/post-title.js"
import PostSubtitle from "../components/post/post-subtitle.js"
import PostHeading from "../components/post/post-heading.js"
import TextSegment from "../components/post/text-segment.js"

export default () => (
    <>
        <PostTitile title="What's the fuss about?" />
        <PostSubtitle subtitle="The motivation & the idea" />
        <TextSegment textSegments={["Sometimes a textbook is not enough to clearly demonstrate the rules it describes. That's why our goal is to do what can't be done on paper – we want to let you play around."]} />
        <PostHeading heading='Our rules' />
        <ul className={styles.ruleList}>
            <li key='first'>
                <h4 className={styles.ruleHeading}>Friendly, clickable environment</h4>
                <p className={styles.ruleText}>No ads, no cookies, no analytics – it's just you and the website. Everything here is free. Click without fear.</p>
            </li>
            <li key='second'>
                <h4 className={styles.ruleHeading}>Teach through interaction</h4>
                <p className={styles.ruleText}>We perfectly understand what feelings do overloaded grammar tables bring. That's why we provide a soft introduction to these complex topics. We want to bring grammar to life and let you see how it behaves in whichever context you choose.</p></li>
            <li key='third'>
                <h4 className={styles.ruleHeading}>One step at a time</h4>
                <p className={styles.ruleText}>We create bite-sized lessons through which you can progress at your own pace. Whenever something here seems unclear, the chances are – there is a link with explanation. If not – we are working on it! You can always contact us to suggest a topic that perhaps we have missed.</p></li>
            <li key='fourth'>
                <h4 className={styles.ruleHeading}>Reinforce other sources</h4>
                <p className={styles.ruleText}>There is a reason why dictionaries are so big. Exceptions, advanced rules, all the nuances – not everything can be turned into a short interactive post. That's why we focus on the basics to make the learning curve less intimidating. This approach puts some concepts out of our scope. You shouldn't rely solely on this website.</p></li>
        </ul>
        <PostHeading heading='Why?' />
        <TextSegment textSegments={["It's very hard to find a place that allows to practise grammar in a truly interactive way. Each grammar rule is unique, that's why each requires quite much effort to get properly illustrated.", "Big teaching platforms focus on creating universal interaction schemes, which don't correspond to any specific grammar rules. Language bloggers, on the other hand, are taking textual approach, which doesn't differ much from textbooks.", "Whereas we want to make a creative use of our language and coding skills to create something fresh, helpful and free."]} />
    </>
)