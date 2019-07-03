const { app, BrowserWindow } = require("electron");
const url = require("url");
const path = require("path");

let window = undefined;

/** don't show the app in the dock */
app.dock.hide();
app.on("ready", () => {
  createWindow();
});

/** quit the app when the window is closed */
app.on("window-all-closed", () => {
  app.quit();
});

/** utils functions */
const createWindow = () => {
  window = new BrowserWindow({
    width: 800,
    height: 600,
    show: false,
    fullscreenable: false,
    resizable: false
  });
  window.loadURL(
    url.format({
      pathname: path.join(__dirname, "index.html"),
      protocol: "file:",
      slashes: true
    })
  );
};
