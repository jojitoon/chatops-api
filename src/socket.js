import io from 'socket.io';
// import jwt from 'jsonwebtoken';

export default (server, app) => {
  const socketServer = io(server);

  socketServer.on('connection', (client) => {
    app.client = client;
    console.log('user connected', client.id);
    // client.on('open group', (data) => {
    //   const token = data.token;
    //   let decode;
    //   try {
    //     decode = jwt.decode(token);
    //   } catch (error) {}
    //   if (!decode) {
    //     return;
    //   }
    //   const userId = decode.id;
    //   const groupId = data.groupId;
    //   // Indicate that member has read all messages in the group
    //   unreadMessages[groupId] = unreadMessages[groupId] || {};
    //   unreadMessages[groupId][userId] = unreadMessages[groupId][userId] || 0;
    //   connections[groupId] = connections[groupId] || [];
    //   connections[groupId].push(userId);
    //   client.join(groupId, () => {
    //   });
    // });
    // client.on('postMessage', (data) => {
    //   const groupMembers = data.groupMembers;
    //   const groupId = data.groupId;
    //   const token = data.token;
    //   let decode;
    //   try {
    //     decode = jwt.decode(token);
    //   } catch (error) {}
    //   if (!decode) {
    //     return;
    //   }
    //   const senderId = decode.id;
    //   const groupMemberIds = Object.keys(groupMembers)
    //     .map(groupMember => groupMember);
    //   groupMemberIds.forEach((groupMember) => {
    //     if (groupMember !== senderId) {
    //       unreadMessages[groupId] = unreadMessages[groupId] || {};
    //       unreadMessages[groupId][groupMember] =
    //         unreadMessages[groupId][groupMember] || 0;
    //       unreadMessages[groupId][groupMember] += 1;
    //     }
    //   });
      // app.connections = connections;
    // });

    client.on('disconnect', () => console.log('user disconnected', client.id));
  });
};
