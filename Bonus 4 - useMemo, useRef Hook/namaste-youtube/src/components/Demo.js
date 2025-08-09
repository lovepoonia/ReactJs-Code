import {useState, useMemo} from 'react'
import { nthPrime } from '../utils/helper';

const Demo = () => {
    const [theme, setTheme] = useState('light');
    const [text, setText] = useState('');
    const prime = useMemo(() => nthPrime(text), [text])
  return (
    <div className={'border border-blue-500 w-96 h-96 rounded-lg p-4 ' + (theme==="dark" ? "bg-black text-white" : "bg-white text-black")}>
      <h2>useMemo</h2>
      <div className='flex items-center justify-between mb-4 p-1'>
        <input type="text" className='border border-gray-700 p-2 m-2 rounded-lg w-full text-black' placeholder='Type your message...' value={text} onChange={(e) => setText(e.target.value)} />
        <button className='bg-blue-500 text-white p-2 rounded-lg ' onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>{theme}</button>
      </div>
      <div>
        <h1>Nth Prime: {prime}</h1>
      </div>
    </div>
  )
}

export default Demo
