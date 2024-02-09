import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Dashboard = () => {
  return (
    <>
      <div className='dashboard-container'>
        <div className='dashboard'>
          <div className='names'>
            <h5 className='name allposts'>All Post</h5>
            <h5 className='name'>Commented Post</h5>
            <h5 className='name'>Replied Post</h5>
            {/* Add Link to the "Create Post" page */}
            <Link to="/create-post" className='name createpost'>
              <span className='plus'>+</span> Create Post
            </Link>
          </div>
          <div className='posts'>
            {/* Your existing post content */}
            {/* ... */}
            <h5 className='post-heading'>This is Post Title</h5>
                       <div className='commets-replys'>
                          <p className='comments'>12 Comments</p>
                          <p className='reply'>10 Reply</p>
                        </div>
                    </div>
                    <div className='post'>
                       <h5 className='post-heading'>This is Post Title</h5>
                       <div className='commets-replys'>
                          <p className='comments'>12 Comments</p>
                          <p className='reply'>10 Reply</p>
                        </div>
                    </div>
                    <div className='post'>
                       <h5 className='post-heading'>This is Post Title</h5>
                       <div className='commets-replys'>
                          <p className='comments'>12 Comments</p>
                          <p className='reply'>10 Reply</p>
                        </div>
                    </div>
          </div>
        </div>
    </>
  );
};

export default Dashboard;


// import './index.css'

// const Dashboard=()=>{
//     return(
//         <>
//         <div className='dashboard-container'>
//             <div className='dashboard'>
//                 <div className='names'>
//                     <h5 className='name allposts'>All Post</h5>
//                     <h5 className='name'>Commented Post</h5>
//                     <h5 className='name'>Replied Post</h5>
//                     <h5 className='name createpost'><span className='plus'>+</span> Create Post</h5>
//                 </div>
//                 <div className='posts'>
//                     <h5 className='allpost-heading'>All Post(10)</h5>
//                     <div className='post'>
//                        <h5 className='post-heading'>This is Post Title</h5>
//                        <div className='commets-replys'>
//                           <p className='comments'>12 Comments</p>
//                           <p className='reply'>10 Reply</p>
//                         </div>
//                     </div>
//                     <div className='post'>
                       
//                 </div>
//             </div>
//         </div>
//         </>
//     )
// }
// export default Dashboard