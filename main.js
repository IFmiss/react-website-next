const { app, BrowserWindow, Menu } = require('electron')

function createWindow () {
  const frame = new BrowserWindow({
    width: 1024,
    height: 666,
    webPreferences: {
      nodeIntegration: true
    }
  })

  frame.loadURL('https://www.daiwei.site/next/blog')
}

app.allowRendererProcessReuse = true

const dockMenu = Menu.buildFromTemplate([
  {
    label: 'New Window',
    click () { console.log('New Window') }
  }
])

app.dock.setMenu(dockMenu)

app.whenReady().then(createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // 在 macOS 上，除非用户用 Cmd + Q 确定地退出，
  // 否则绝大部分应用及其菜单栏会保持激活。
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // 在macOS上，当单击dock图标并且没有其他窗口打开时，
  // 通常在应用程序中重新创建一个窗口。
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
