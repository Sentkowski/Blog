import React from "react"
import PageLayout from "../components/page-layout.js"
import PageSidebar from "../components/page-sidebar.js"
import PostContainer from "../components/post-container.js"
import PostFooter from "../components/post-footer.js"

export default (props) => {
    console.log(props.children)
    if (props.location.pathname !== '/Blog/' && props.location.pathname !== '/') {
        return (
            <>
                <PageLayout>
                    <PageSidebar />
                    <PostContainer>
                        {props.children}
                    </PostContainer>
                </PageLayout>
                <PostFooter />
            </>
        )
    } else {
        return props.children;
    }
}