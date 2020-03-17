import React from 'react';
import { PropTypes } from 'prop-types';
import PostsList from '../PostsList/PostsList';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';

class Posts extends React.Component {

    componentDidMount() {
        const { loadPosts } = this.props;
        loadPosts();
    }

    render() {
        const { posts, request } = this.props;
        console.log(posts)
        console.log(request)

        return (
            <div>
                {(request.pending && <Spinner />) || (request.success === null && <Spinner />)}
                {!request.pending && request.success && posts.length > 0 && <PostsList posts={posts} />}
                {!request.pending && request.error !== null && <Alert variant="error" children={request.error} />}
                {!request.pending && request.success && posts.length === 0 && <Alert variant="info" children="No posts..." />}
            </div>
        );
    }

};

Posts.propTypes = {
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
        })
    ),
    loadPosts: PropTypes.func.isRequired,
};

export default Posts;