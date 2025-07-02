const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: __dirname + '/frontend/assets/favicon.png'
  })

  win.loadFile('./src/frontend/index.html')
}

app.whenReady().then(() => {
  createWindow()
})