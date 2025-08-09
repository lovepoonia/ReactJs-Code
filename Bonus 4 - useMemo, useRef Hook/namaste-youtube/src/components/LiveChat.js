import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector} from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { nameGenerate, generateString } from '../utils/helper';

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((state) => state.chat.messages);
  const [liveChat, setLiveChat] = React.useState([]);

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(addMessage({ name: nameGenerate(), message: generateString(10) }));
    }, 1500);

    return () => clearInterval(timer);
  }, [dispatch]);

  return (
   <div>
     <div className='w-full h-[600px] bg-slate-100 border-purple-500 border p-4 rounded-lg overflow-y-scroll flex flex-col-reverse'>
        {chatMessages.map((msg ,i) =>(
          <ChatMessage key={i} name={msg.name} message={msg.message} />
        ))}
      </div>
      <form className='mt-4 flex' onSubmit={(e) => {
        e.preventDefault();
        dispatch(addMessage({ name: "Love Poonia", message: liveChat }));
        setLiveChat('');
      }}>
        <input type="text" className='border p-2 rounded-l-xl w-full' placeholder='Type your message...' value={liveChat} onChange={(e) => setLiveChat(e.target.value)
        }/>
        <button type="submit" className='bg-blue-500 text-white p-2 rounded-r-xl'>Send</button>
      </form>
    </div>
  )
}

export default LiveChat
