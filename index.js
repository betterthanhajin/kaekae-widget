const { app, BrowserWindow, ipcMain } = require("electron/main");

const path = require("node:path");
// const updateApp = require("update-electron-app")();
const createWindow = () => {
  const win = new BrowserWindow({
    width: 1000,
    height: 600,
    transparent: true,
    frame: false,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });
  win.setAlwaysOnTop(true, "screen");
  win.loadFile("index.html");
};
app.whenReady().then(() => {
  createWindow();
});
