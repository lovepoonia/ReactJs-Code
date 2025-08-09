import commentMockData from '../utils/commentMockData'
import CommentList from './CommentList'

const CommentContainer = () => {
  return (
    <div className='m-5 p-2'>
      <h1 className='font-bold text-2xl'>Comments:</h1>
      <CommentList comments={commentMockData} />
    </div>
  )
}

export default CommentContainer
