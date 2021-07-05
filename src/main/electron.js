const { app, BrowserWindow } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');

// In try catch to silence error from lack of electron-reloader package in production
try {
    require('electron-reloader')(module);
} catch { }

/**
 * creates a new browser window with a preload script and loads index.html file into this window
 * @returns {void}
 */
function createWindow() {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
        height: 600,
        width: 800,
    });

    // and load the index.html of the app.
    if (isDev) mainWindow.loadURL("http://localhost:3000/")
    else mainWindow.loadFile("src/renderer/dist/index.html")

    // Open the DevTools
    if (isDev) mainWindow.webContents.openDevTools();

}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', () => {
    createWindow();

    app.on('activate', () => {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});