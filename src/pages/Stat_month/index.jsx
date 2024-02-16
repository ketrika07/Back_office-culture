// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
// import Form from 'react-bootstrap/Form';
// import './style.css';

// const ChatApp = () => {
//   const users = [
//     {
//       name: 'Vincent Porter',
//       status: 'offline',
//       avatar: 'https://bootdey.com/img/Content/avatar/avatar1.png',
//       lastSeen: 'left  7 mins ago'
//     },
//     // ... Add more users as needed
//   ];

//   const messages = [
//     {
//       sender: 'Me',
//       content: 'Hi Aiden, how are you? How is the project coming along?',
//       timestamp: '10:10 AM, Today',
//       avatar: 'https://bootdey.com/img/Content/avatar/avatar7.png'
//     },
//     // ... Add more messages as needed
//   ];

//   return (
//     <div className="container">
//       <div className="row clearfix">
//         <div className="col-lg-12">
//           <div className="card chat-app">
//             <div id="plist" className="people-list">
//               <div className="input-group">
//                 <div className="input-group-prepend">
//                   <span className="input-group-text"><i className="fa fa-search"></i></span>
//                 </div>
//                 <input type="text" className="form-control" placeholder="Search..." />
//               </div>
//               <ul className="list-unstyled chat-list mt-2 mb-0">
//                 {users.map((user, index) => (
//                   <li key={index} className={`clearfix ${user.status === 'online' ? 'active' : ''}`}>
//                     <img src={user.avatar} alt="avatar" />
//                     <div className="about">
//                       <div className="name">{user.name}</div>
//                       <div className="status">
//                         <i className={`fa fa-circle ${user.status}`}></i> {user.lastSeen}
//                       </div>
//                     </div>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <div className="chat">
//               <div className="chat-header clearfix">
//                 <div className="row">
//                   <div className="col-lg-6">
//                     <a href="#" data-toggle="modal" data-target="#view_info">
//                       <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="avatar" />
//                     </a>
//                     <div className="chat-about">
//                       <h6 className="m-b-0">Aiden Chavez</h6>
//                       <small>Last seen:  2 hours ago</small>
//                     </div>
//                   </div>
//                   <div className="col-lg-6 hidden-sm text-right">
//                     <a href="#" className="btn btn-outline-secondary"><i className="fa fa-camera"></i></a>
//                     <a href="#" className="btn btn-outline-primary"><i className="fa fa-image"></i></a>
//                     <a href="#" className="btn btn-outline-info"><i className="fa fa-cogs"></i></a>
//                     <a href="#" className="btn btn-outline-warning"><i className="fa fa-question"></i></a>
//                   </div>
//                 </div>
//               </div>
//               <div className="chat-history">
//                 <ul className="m-b-0">
//                   {messages.map((message, index) => (
//                     <li key={index} className={`clearfix ${message.sender === 'Me' ? 'float-right' : ''}`}>
//                       <div className={`message-data ${message.sender === 'Me' ? 'text-right' : ''}`}>
//                         <span className="message-data-time">{message.timestamp}</span>
//                         {message.sender !== 'Me' && <img src={message.avatar} alt="avatar" />}
//                       </div>
//                       <div className={`message ${message.sender === 'Me' ? 'other-message float-right' : 'my-message'}`}>{message.content}</div>
//                     </li>
//                    ))}
//                 </ul>
//               </div>
//               <div className="chat-message clearfix">
//                 <div className="input-group mb-0">
//                   <div className="input-group-prepend">
//                     <span className="input-group-text"><i className="fa fa-send"></i></span>
//                   </div>
//                   <input type="text" className="form-control" placeholder="Enter text here..." />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChatApp;
