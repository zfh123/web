'use strict'
/**
 * Created by yfzhu on 2017/7/29.
 */


const frameWork = {
  create() {
    const work = window.nw ? 'nw' : 'browser';
    const nwGui = work ? window.nw : null;
    const win = work === 'nw' ? nwGui.Window.get() : window;
    const obj = {}


    if (work === 'nw') {
      obj.app = {
        show: false,
        focus: false
      }
      win.on('blur', function () {
        console.info('blur');
        obj.app.focus = false
      });
      win.on('focus', function () {
        console.info('focus');
        obj.app.focus = true
      });


      // 设置浏览器的最小字体支持，单位PX
      chrome.fontSettings.setMinimumFontSize({pixelSize: 5});


      window.setInterval(function () {
        if (!nw.process || !nw.process.memoryUsage) return;
        let memory = nw.process.memoryUsage();
        console.info('%cV8分配内存' + bytesToSize(memory.heapTotal), '#e00');
        console.info('%c已使用内存' + bytesToSize(memory.heapUsed), '#e00');
        memory = null;
      }, 10000)

    }
    obj.init = function () {

    }

    obj.exit = function () {
      switch (work) {
        case 'nw':
          nwGui.App.quit();
          break;
        case 'browser':
          alert('请手动退出程序')
          break
      }
    }

    obj.restart = function () {
      switch (work) {
        case 'nw':
          chrome.app.reload()
          break;
        case 'browser':
          alert('请手动重启')
          break
      }
    }
    /**
     * 获取打印机
     * @param callback
     */
    obj.getPrinters = function (callback) {
      switch (work) {
        case 'nw':
          win.getPrinters(callback);
          break;
        default:
          typeof callback === 'function' && callback([{
            printerName: '默认打印机',
            deviceName: 'default',
            printerDescription: '系统默认打印机'
          }]);
      }
    };
    /**
     * 获取串口设备
     * @param callback
     */
    obj.getSerialDevices = function (callback) {
      switch (work) {
        case 'nw':
          chrome.serial.getDevices(callback);
          break;
        default:
          typeof callback === 'function' && callback([
            {path: 'COM1'},
            {path: 'COM2'},
            {path: 'COM3'},
            {path: 'COM4'},
            {path: 'COM5'},
            {path: 'COM6'}
          ]);
      }

    };

    obj.window = {
      on: function (event, callback) {
        switch (work) {
          case 'nw':
            win.on(event, callback);
            break;
          case 'browser':
            $(window).on(event, callback)
            break
        }
      },
      reload: function () {
        switch (work) {
          case 'nw':
            win.reload()
            break;
          case 'browser':
            location.reload()
            break
        }
      },
      reloadIgnoringCache: function () {
        switch (work) {
          case 'nw':
            win.reloadIgnoringCache()
            break;
          case 'browser':
            location.reload()
            break
        }
      },
      min() {
        switch (work) {
          case 'nw':
            win.minimize()
            break;
        }
      },
      maximize() {
        switch (work) {
          case 'nw':
            win.maximize()
            break;
        }
      },
      unmaximize() {
        switch (work) {
          case 'nw':
            win.unmaximize();
            break;
        }
      },
      toggleMax(isMaxed) {
        switch (work) {
          case 'nw':
            if (!isMaxed) {
              win.unmaximize();
            } else {
              win.maximize()
            }
            break;
        }
      },
      isFullscreen() {
        switch (work) {
          case 'nw':
            return win.isFullscreen
            break;
          case 'browser':
            return document.webkitIsFullScreen
            break
        }
      },
      enterFullscreen() {
        switch (work) {
          case 'nw':
            win.enterFullscreen()
            break;
          case 'browser':
            document.documentElement.webkitRequestFullScreen()
            break
        }
        return true;
      },
      leaveFullscreen: function () {
        switch (work) {
          case 'nw':
            win.leaveFullscreen();
            break;
          case 'browser':
            document.webkitCancelFullScreen();
            break
        }
        return true;
      },
      toggleFullscreen: function () {
        switch (work) {
          case 'nw':
            if (obj.window.isFullscreen()) {
              obj.window.leaveFullscreen();
            } else {
              obj.window.enterFullscreen()
            }
            break;
          case 'browser':
            if (document.webkitIsFullScreen) {
              document.webkitCancelFullScreen()
            } else {
              document.documentElement.webkitRequestFullScreen()

            }
            break
        }
        return true;
      },
      isKioskMode() {
        switch (work) {
          case 'nw':
            return win.isKioskMode
            break;
        }
      },
      enterKioskMode() {
        switch (work) {
          case 'nw':
            if (obj.window.isKioskMode()) return;
            win.enterKioskMode()
            break;
        }
        return true
      },
      leaveKioskMode() {
        switch (work) {
          case 'nw':
            win.leaveKioskMode();
            break;
        }
        return true
      },
      toggleKioskMode() {
        switch (work) {

          case 'nw':
            if (obj.window.isKioskMode()) {
              obj.window.leaveKioskMode();
            } else {
              obj.window.enterKioskMode()
            }
            break;
          case 'browser':
            if (document.webkitIsFullScreen) {
              document.webkitCancelFullScreen()
            } else {
              document.documentElement.webkitRequestFullScreen()

            }
            break
        }
        return true
      },
      close() {
        switch (work) {
          case 'nw':
            win.on('close', function () {
              this.hide();
              this.close(true);
            });
            win.close();
            break;
          case 'browser':
            window.location.replace("about:blank");
            window.opener = null;
            window.open("", "_self");
            window.close();
            break
        }

      },
      openExternal(url) {
        // 使用默认浏览器打开网页
        switch (work) {
          case 'nw':
            nw.Shell.openExternal(url);
            break;
          case 'browser':
            window.open(url)
            break
        }
      },
      show() {
        switch (work) {
          case 'nw':
            win.show();
            win.focus();
            break;
          case 'browser':
            window.focus()
            break
        }
      },
      open(url, params, cb) {
        switch (work) {
          case 'nw':
            return nwGui.Window.open(url, params, cb);
            break;
          case 'browser':
            location.replace(url)
            break
        }

      },
      showDevTools() {
        switch (work) {
          case 'nw':
            win.showDevTools();
            break;
        }
      },
      setResizable(bool) {
        switch (work) {
          case 'nw':
            win.setResizable(bool);
            break;
        }
      },
      setMaximumSize(w, h) {
        switch (work) {
          case 'nw':
            win.setMaximumSize(w, h);
            break;
        }
      },
      setMinimumSize(w, h) {
        switch (work) {
          case 'nw':
            win.setMinimumSize(w, h);
            break;
        }
      },
      resizeTo(w, h) {
        switch (work) {
          case 'nw':
            win.resizeTo(w, h);
            break;
        }
      },
      setPosition(pos) {
        switch (work) {
          case 'nw':
            win.setPosition(pos || null);
            break;
        }
      }

    };

    /**
     * 全局快捷键注册
     * 已知问题：刷新网页会导致快捷键的“动作”失效
     * @type {{}}
     */
    obj.globalHotKey = {
      option(options) {
        if (typeof options !== 'object') {
          console.error('err')
        }
        var tempOption = {
          key: options.key,
          active: function () {
            obj.app.focus && typeof options.active == 'function' && options.active()

          },
          failed: function () {
            obj.app.focus && typeof options.failed == 'function' && options.failed()
          }
        };
        return tempOption
      },
      register(option) {
        if (work === 'nw') {
          var option = this.option({
            key: "A",
            active: function () {
              console.log("Global desktop keyboard shortcut: " + this.key + " active.");
            },
            failed: function (msg) {
              console.log(msg);
            }
          });

          var shortcut = new nw.Shortcut(option);

          nw.App.registerGlobalHotKey(shortcut);
          //
          // shortcut.on('active', function () {
          //   console.log("123 " + this.key + " active.");
          // });
          //
          // shortcut.on('failed', function (msg) {
          //   console.log(msg);
          // });
        }

      },
      unregister(key) {
        if (!key) {
          return
        }
        var option = this.option({
          key: key
        });
        var shortcut = new nw.Shortcut(option);
        nw.App.unregisterGlobalHotKey(shortcut);
      }
    }


    // 内存监控
    window.bytesToSize = function (bytes) {
      if (bytes === 0) return '0 B';
      let k = 1024;
      let sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
      let i = Math.floor(Math.log(bytes) / Math.log(k));
      return (bytes / Math.pow(k, i)).toFixed(2) + ' ' + sizes[i];
    }

    return obj
  }
}
export {frameWork}
