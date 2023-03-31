import { useState } from 'react'
import './App.css'

const xssInputValue = JSON.stringify({ dangerouslySetInnerHTML: { __html: "<div onclick='alert(\"xss\")'>xss</div>" } });

function App() {
  const [props, setProps] = useState<Record<string, any>>({ count: 0 });

  return (
    <div className="App">
      <div>{xssInputValue}</div>
      <input onChange={x => {
        setProps(JSON.parse(x.target.value));
      }}/>
      <div {...props} />
    </div>
  )
}

export default App
