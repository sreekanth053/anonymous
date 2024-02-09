import React, { useState } from 'react';
import './index.css';

const CreatePost = () => {
  const [postTitle, setPostTitle] = useState('');
  const [postDescription, setPostDescription] = useState('');

  // Simulate API call to submit the post
  const submitPostToServer = (postData) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ status: 'success', data: postData });
    }, 1000);
    });
  };

  // Handle form submission
  const handlePostSubmit = async () => {
    try {
      const postData = {
        title: postTitle,
        description: postDescription,
      };

      // Simulate API call
      const response = await submitPostToServer(postData);

      console.log('API Response:', response);
      setPostTitle('');
      setPostDescription('');
    } catch (error) {
      console.error('Error submitting post:', error);
    }
  };

  return (
    <>
      <div className='create-post-container'>
        <div className='names'>
          <h5 className='name'>All Post</h5>
          <h5 className='name'>Commented Post</h5>
          <h5 className='name'>Replied Post</h5>
          <h5 className='name createpost'>
            <span className='plus'>+</span> Create Post
          </h5>
        </div>
        <div className='create-post'>
          <h3 className='create-post-heading'>Create Post</h3>
          <div className='post-describe'>
            <input
              type="text"
              className='title-post'
              placeholder='Post Title...'
              value={postTitle}
              onChange={(e) => setPostTitle(e.target.value)}
            />
            <textarea
              type="text"
              className='describe-post'
              rows={6}
              cols={40}
              placeholder='Describe your post...'
              value={postDescription}
              onChange={(e) => setPostDescription(e.target.value)}
            />
            <button className='custom-button' onClick={handlePostSubmit}>
              Post Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePost;












// import './index.css'

// const CreatePost=()=>{
//     return(
    
//         <>
//         <div className='create-post-container'>
//             <div className='names'>
//                 <h5 className='name'>All Post</h5>
//                 <h5 className='name'>Commented Post</h5>
//                 <h5 className='name'>Replied Post</h5>
//                 <h5 className='name createpost'><span className='plus'>+</span> Create Post</h5>
//             </div>
//             <div className='create-post'>
//                 <h3 className='create-post-heading'>Create Post</h3>
//                 <div className='post-describe'>
//                     <input type="text" className='title-post' placeholder='Post Title...'/>
//                     <textarea type="text" className='describe-post' rows={6} cols={40} placeholder='Describe your post...'/>
//                     <button className='custom-button'>Post Submit</button>
//                 </div>
//             </div>
//         </div>
//         </>
//     )
// }
// export default CreatePost