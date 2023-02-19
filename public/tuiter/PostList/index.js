import posts from './posts.js';
import PostItem from "./PostItem.js";
const PostList = () => {
    return (`
    <div>
    ${
        posts.map(post => {
            return (PostItem(post));
        }).join('')
    }
    </div>
    `);
}

export default PostList;