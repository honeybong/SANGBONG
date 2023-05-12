import React, { useState } from "react";
import { useEffect } from "react";

  const InputComponet = props => {
    const { click } = props;
    const [text, setText] = useState();
    const [listText, setListText] = useState([]);
    const [history, setHistory] = useState(JSON.parse(sessionStorage.getItem('history')) ?? []);

    useEffect(() => {
      sessionStorage.setItem('history', JSON.stringify([...history, text]))
      setHistory([...history, text])
    },[click]);

    const onChange = (e) => {
      setText(e.target.value)
    }

    // const onClick = () => {
    //   sessionStorage.setItem('history', JSON.stringify([...history, text]))
    //   setHistory([...history, text])
    // }

    return (
      <>
        <div>
          <input onChange={onChange}></input>
        </div>
        <div>
          {text}
        </div>
        {/* <button onClick={onClick}> 이 버튼누르면 아래 쌓임 인풋이랑 같은 라인</button> */}
          {listText.map((v, i) => {
              return (
                <div key={i}>{v}</div>
              )
            }
          )}
          {history.map((v, i) => {
            return (
              <div key={i} style={{color:'red'}}>{v}</div>
            )
          })}
      </>
    )
  }

export default InputComponet;