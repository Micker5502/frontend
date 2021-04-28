import * as signalR from '@microsoft/signalr'

const signal = new signalR.HubConnectionBuilder().configureLogging(signalR.LogLevel.None);

export default signal;