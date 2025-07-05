const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 400,
    height: 500,
    minimizable: false,
    resizable: false,
    icon: __dirname + '/frontend/assets/favicon.png'
  })

  win.loadFile('./src/frontend/enterCData.html')
}

app.whenReady().then(() => {
  createWindow()
})