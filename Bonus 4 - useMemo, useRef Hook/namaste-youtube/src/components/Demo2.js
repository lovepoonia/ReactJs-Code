import { useRef, useState } from "react"

const Demo2 = () => {
    let x = 0;
    const [y, setY] = useState(0);
    const z = useRef(0);
  return (
    <div className='border border-blue-500 w-96 h-96 rounded-lg p-4 ml-4'>
      <h1>useRef</h1>
        <div className='flex items-center justify-between mb-4 p-1'>
            <h2>let x: {x}</h2>
            <button className='bg-blue-500 text-white p-2 rounded-lg' onClick={() => x++}>Increment</button>
        </div>
        <div className='flex items-center justify-between mb-4 p-1'>
            <h2>State x: {y}</h2>
            <button className='bg-blue-500 text-white p-2 rounded-lg' onClick={() => setY(y + 1)}>Increment</button>
        </div>
        <div className='flex items-center justify-between mb-4 p-1'>
            <h2>Ref z: {z.current}</h2>
            <button className='bg-blue-500 text-white p-2 rounded-lg' onClick={() => z.current++}>Increment</button>
        </div>
    </div>
  )
}

export default Demo2
