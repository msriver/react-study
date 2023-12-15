import {useState} from 'react'

const App01 = () => {

  const [msg, setMsg] = useState("");

  return (
    <div>
      <input type='text' value={msg} onChange={(e) => setMsg(e.target.value)}></input>

      <br />
      <span>input: {msg}</span>
    </div>
  )
}

export default App01