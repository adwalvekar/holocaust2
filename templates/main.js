
const {app, BrowserWindow} = require('electron')
 
let win

function createWindow () {
 
  win = new BrowserWindow({width: 900, height: 650})
  win.loadURL(`http://127.0.0.1:5000/`)
  win.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow)