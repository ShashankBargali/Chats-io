import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [msgs, setMsgs] = useState([])
  const [msgFile, setMsgFile] = useState(0)
  const getMsgs = async () => {
    const data = await fetch('/msg_json/message_3.json')
    const parsedData = await data.json();
    setMsgs(parsedData.messages.reverse())
    setMsgFile(3)
  }
  const get2Msgs = async () => {
    const data2 = await fetch('/msg_json/message_2.json')
    const parsedData2 = await data2.json();
    setMsgs(parsedData2.messages.reverse())
    setMsgFile(2)
  }
  useEffect(() => {
    getMsgs()

  }, [])


  useEffect(() => {
  }, [msgs])

  return (
    <div className="App">
      <div className='chatSect'>
        {msgs.map((ele, count) => {
          let prev = count - 1;
          let suc = count + 1;
          if (prev < 0) {
            prev = 0
          }
          if (!msgs[suc]){
            suc = count
          }
          const date = new Date(ele.timestamp_ms).toDateString();
          const prevDate = new Date(msgs[prev].timestamp_ms).toDateString();
          if (ele.sender_name === 'ð\x9F\x86\x82ð\x9F\x85·ð\x9F\x85°ð\x9F\x86\x82ð\x9F\x85·ð\x9F\x85°ð\x9F\x85½ð\x9F\x85º') {
            return (
              <>
                {date !== prevDate ? <p style={{ color: 'white', fontFamily: 'Ubuntu', marginTop: '30px' }}>{date}</p> : count === 0 ? <p style={{ color: 'white', fontFamily: 'Ubuntu', marginTop: '30px' }}>{date}</p> : ''}
                <div style={{ "display": 'flex', justifyContent: 'start', margin: '-15px 0px', }}>
                  <p className='smsgs' style={{borderTopLeftRadius: `${msgs[prev].sender_name === ele.sender_name ? '2px': ''}`, borderBottomLeftRadius: `${msgs[suc].sender_name === ele.sender_name ? '2px': ''}`}}>{ele.content}
                  </p>

                </div>
              </>
            )
          }
          else {
            return (
              <>
                {date !== prevDate ? <p style={{ color: 'white', fontFamily: 'Ubuntu', marginTop: '30px' }}>{date}</p> : count === 0 ? <p style={{ color: 'white', fontFamily: 'Ubuntu', marginTop: '30px' }}>{date}</p> : ''}
                <div style={{ "display": 'flex', justifyContent: 'end', margin: '-15px 0px' }}>
                  <p className='vmsgs' style={{borderTopRightRadius: `${msgs[prev].sender_name === ele.sender_name ? '2px': ''}`, borderBottomRightRadius: `${msgs[count + 1].sender_name === ele.sender_name ? '2px': ''}`}}>{ele.content}
                  </p>
                </div>
              </>
            )
          }
        })}
        <div className='btnClass'>
          <button onClick={getMsgs} className="openBtn" style={{ backgroundColor: `${msgFile === 3 ? 'rgb(215, 135, 183)' : 'rgb(128, 64, 106)'}` }}>Previous</button>
          <button onClick={get2Msgs} className="openBtn" style={{ backgroundColor: `${msgFile === 2 ? 'rgb(250, 160, 200)' : 'rgb(255, 0, 170)'}` }}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default App;
