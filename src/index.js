const { app, BrowserWindow } = require('electron')

const createEnterCDataWindow = () => {
  const win = new BrowserWindow({
    width: 400,
    height: 500,
    minimizable: false,
    resizable: false,
    icon: __dirname + '/frontend/assets/favicon.png'
  })

  win.loadFile('./src/frontend/enterCData.html')
}
const createMainWindow = () => {
  const win = new BrowserWindow({
    width: 1000,
    height: 700,
    minimizable: false,
    resizable: true,
    icon: __dirname + '/frontend/assets/favicon.png'
  })

  win.loadFile('./src/frontend/index.html')
}

app.whenReady().then(() => {
  createMainWindow()
  createEnterCDataWindow()
})