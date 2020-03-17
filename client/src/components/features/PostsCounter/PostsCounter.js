import React from 'react';

class PostsCounter extends React.Component {

    render() {
        const { amount } = this.props;

        return (
            <div>Posts amount: {amount !== 0 ? amount : "no posts"}</div>
        );
    }

};

export default PostsCounter;