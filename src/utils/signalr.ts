import signalR from "@aspnet/signalr";

const signal = new signalR.HubConnectionBuilder()
    .withUrl('http://localhost:52970/lchub/signalr', {})
    .build();
    
export default signal;