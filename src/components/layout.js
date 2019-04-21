import React from "react"
import PageLayout from "../components/post/page-layout.js"
import PageSidebar from "../components/post/page-sidebar.js"
import PostContainer from "../components/post/post-container.js"
import PostFooter from "../components/post/post-footer.js"

export default (props) => {
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