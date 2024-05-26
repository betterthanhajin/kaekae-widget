const { app, BrowserWindow, ipcMain } = require("electron/main");
const { download } = require("electron-dl");
const path = require("node:path");
// const updateApp = require("update-electron-app")();
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    transparent: true,
    frame: false,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });
  // window.loadURL(`file://${__dirname}/index.html`);
  // ipcMain.on("download", (event, info) => {
  //   download(BrowserWindow.getFocusedWindow(), info.url, info.properties).then(
  //     (dl) => window.webContents.send("download complete", dl.getSavePath())
  //   );
  // });
  win.setAlwaysOnTop(true, "screen");
  win.loadFile("index.html");
};
app.whenReady().then(() => {
  createWindow();
});
