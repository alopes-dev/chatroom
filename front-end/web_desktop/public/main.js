const { app, BrowserWindow } = require('electron');

const path = require('path');
const url = require('url');
const isDev = require('electron-is-dev');

function createWindows() {
    let mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
    });

    mainWindow.loadURL(
        isDev ?
        'http://localhost:3000' :
        `file://${path.join(__dirname, '../build/index.html')}`
    );
    mainWindow.on('closed', () => (mainWindow = null));
}

app.whenReady().then(createWindows);

app.allowRendererProcessReuse = false;

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindows();
});