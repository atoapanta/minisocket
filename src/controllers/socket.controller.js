export const socketController = (socket) => {
  socket.on("mensaje", (msg) => {
    socket.broadcast.emit("notification", msg);
  });
};
