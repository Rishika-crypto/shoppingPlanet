import React from 'react'
import '../CSS/Notif.css';
export default function Notif() {
  return (
    <div id='main' style={{backgroundColor: "#F7F7F7"}}>
      <div id='div-content2'>
      <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">Notifications</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td scope="row">Ankit Yadav reacted to your post!</td>
        </tr>
        <tr>
          <td scope="row">Hema Sandhu reacted to your post!</td>
        </tr>
        <tr>
          <td scope="row">Kundan Raj reacted to your post!</td>
        </tr>
        <tr>
          <td scope="row">Ankit Sharma reacted to your post!</td>
        </tr>
      </tbody>
    </table>
    </div>
    </div>
  )
}
