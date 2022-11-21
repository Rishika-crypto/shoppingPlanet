import React from 'react'
import '../CSS/Chat.css'

export default function Chat() {
  return (
   <>
  <ol class="chat">
        <li class="other">
              <div class="avatar"><img src="http://i.imgur.com/DY6gND0.png" draggable="false"/></div>
              <div class="msg">
              <p>Hi!</p>
              <p>How can I help you?</p>
                <time>20:17</time>
              </div>
        </li>
        <li class="self">
              <div class="avatar"><img src="http://i.imgur.com/HYcn9xO.png" draggable="false"/></div>
              <div class="msg">
              <p>Hi...</p>
              <p>My laptop is giving me some issues</p>
              <p>The battery is acting up</p>
                <time>20:18</time>
              </div>
        </li>
        <li class="other">
              <div class="avatar"><img src="http://i.imgur.com/DY6gND0.png" draggable="false"/></div>
              <div class="msg">
              <p>I am sorry to hear that...</p>
                <time>20:18</time>
              </div>
        </li>
        <li class="self">
              <div class="avatar"><img src="http://i.imgur.com/HYcn9xO.png" draggable="false"/></div>
              <div class="msg">
              <p>Yes it's been awful</p>
              <time>20:18</time>
              </div>
        </li>
        <li class="other">
              <div class="avatar"><img src="http://i.imgur.com/DY6gND0.png" draggable="false"/></div>
              <div class="msg">
              <p>Since when is the issue persisting?</p>
                <time>20:18</time>
              </div>
        </li>
        <li class="self">
              <div class="avatar"><img src="http://i.imgur.com/HYcn9xO.png" draggable="false"/></div>
              <div class="msg">
              <p>This weekend, my cat climbed on it</p>
                <time>20:19</time>
              </div>
        </li>
        <li class="other">
              <div class="avatar"><img src="http://i.imgur.com/DY6gND0.png" draggable="false"/></div>
              <div class="msg">
              <p>Hmm that may have affected the hardware</p>
                <time>20:20</time>
              </div>
        </li>
  <div></div>
        <li class="self">
              <div class="avatar"><img src="http://i.imgur.com/HYcn9xO.png" draggable="false"/></div>
              <div class="msg">
              <p>What do I do now?</p>
                <time>18:03</time>
              </div>
        </li>
        <li class="other">
              <div class="avatar"><img src="http://i.imgur.com/DY6gND0.png" draggable="false"/></div>
              <div class="msg">
              <p>I advise you not to open the laptop harware yourself</p>
                <time>18:07</time>
              </div>
        </li>
        <li class="self">
              <div class="avatar"><img src="http://i.imgur.com/HYcn9xO.png" draggable="false"/></div>
              <div class="msg">
              <p>Oh ok</p>
                <time>18:08</time>
              </div>
        </li>
        <li class="other">
              <div class="avatar"><img src="http://i.imgur.com/DY6gND0.png" draggable="false"/></div>
              <div class="msg">
              <p>Yes and please come by your nearest store ASAP</p>
                <time>18:08</time>
              </div>
        </li>
        <li class="self">
              <div class="avatar"><img src="http://i.imgur.com/HYcn9xO.png" draggable="false"/></div>
              <div class="msg">
              <p>Ok I will surely</p>
                <time>18:09</time>
              </div>
        </li>
        <li class="other">
              <div class="avatar"><img src="http://i.imgur.com/DY6gND0.png" draggable="false"/></div>
              <div class="msg">
              <p>Thanks for connecting!</p>
                <time>18:08</time>
              </div>
        </li>
  </ol>
  <input class="textarea" type="text" placeholder="Type here!"/><div class="emojis"></div>
   </>
  )
}
