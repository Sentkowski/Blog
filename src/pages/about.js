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
        <TextSegment textSegments={["Sometimes a textbook is not enough to clearly demonstrate the rules it describes. That's why our goal is to do what can't be done on paper – we want to let you play around."]} />
        <PostHeading heading='Our rules' />
        <ul className={styles.ruleList}>
            <li key='first'><Expandable summary='Friendly, clickable environment' text="No ads, no cookies, no analytics – it's just you and the website. Everything here is free. Click without fear." /></li>
            <li key='second'><Expandable summary='Teach through interaction' text="We perfectly understand what feelings do overloaded grammar tables bring. That's why we provide a soft introduction to these complex topics. We want to bring grammar to life and let you see how it behaves in whichever context you choose." /></li>
            <li key='third'><Expandable summary='One step at a time' text="We create bite-sized lessons through which you can progress at your own pace. Whenever something here seems unclear, the chances are – there is a link with explanation. If not – we are working on it! You can always contact us to suggest a topic that perhaps we have missed." /></li>
            <li key='fourth'><Expandable summary='Reinforce other sources' text="There is a reason why dictionaries are so big. Exceptions, advanced rules, all the nuances – not everything can be turned into a short interactive post. That's why we focus on the basics to make the learning curve less intimidating. This approach puts some concepts out of our scope. You shouldn't rely solely on this website." /></li>
       </ul>
       <PostHeading heading='Why?' />
       <TextSegment textSegments={["It's very hard to find a place that allows to practise grammar in a truly interactive way. Each grammar rule is unique, that's why each requires quite much effort to get properly illustrated.", "Big teaching platforms focus on creating universal interaction schemes, which don't correspond to any specific grammar rules. Language bloggers, on the other hand, are taking textual approach, which doesn't differ much from textbooks.", "Whereas we want to make a creative use of our language and coding skills to create something fresh, helpful and free."]} /> 
   </>
)