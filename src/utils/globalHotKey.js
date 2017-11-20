'use strict'
const hotKey = {
  create: function () {
    let scanPluCodeStr = ''; //
    let scanPluCodeStarTime = 0; //
    let scanPluCodeMaxScanTime = 200; //一次输入条形码的最长时间
    let scanPluCodeMinLength = 6;//条形码最小长度


    return {
      /**
       * scenes 当前的场景名称
       */
      scenes: '',
      /**
       * history 当前队列中的历史场景
       */
      history: [],
      /**
       * 回退到前一个场景，会在队列中删除当前场景
       * @returns {Array}
       */
      back() {
        if (this.history.length === 1) {
          return
        }
        this.history.pop();
        this.scenes = this.history[this.history.length - 1];
        console.info(this)
        return this.history;
      },
      /**
       * 快捷键的设置，来自于数据库中
       */
      keys: {},
      /**
       * 设置快捷键，设置的快捷键均会以"覆盖"的方式保存到 this.keys中
       * @param keys
       * @param scenes
       */
      setKeys(keys, scenes) {
        scenes = scenes || '';
        for (let s in keys) {
          if (keys[s].child) {
            this.setKeys(keys[s].child, s + '.');
            delete keys[s].child
          }
          this.keys[scenes + s] = keys[s]
        }
      },
      /**
       * 注册快捷键
       * @param scenes
       * @param option
       * @returns {boolean}
       */
      register: function (scenes, option) {
        var defaultOption = {
          'key': '',
          'altKey': false,
          'ctrlKey': false,
          'metaKey': false,
          'shiftKey': false,
          'system': false // 表示系统快捷键，不允许用户设置
        };
        try {
          if (!scenes) {
            throw new Error('注册快捷键:缺少参数scenes');
          }
          if (typeof scenes === 'string') {
          } else {
            throw new Error(`参数scenes的类型必须是{string}`);
          }
          if (typeof option === 'object' && toString.apply(option) !== '[object Array]') {
            option = [option];
          }
          if (!this.keys[scenes]) {
            // 还没有注册该场景的,初始化
            this.keys[scenes] = {};
          }

          option.map(function (key) {
            // 因使用 option.name 作为键名，因此name必填
            // 这里做空值判断
            key.name = key.name || '';
            if (key.name.toString() === '') {
              throw new Error(`缺少参数：option.name`);
            }
            key.keyCode = key.keyCode || '';
            if (key.keyCode.toString() === '') {
              throw new Error(`缺少参数：option.key`);
            }
            Object.assign(defaultOption, key)
            this.keys[scenes][defaultOption.name] = defaultOption
            delete this.keys[scenes][defaultOption.name].name
          }.bind(this))
          return true
        } catch (e) {
          throw new Error(`注册快捷键失败==>${e}`);
        } finally {
          defaultOption = null
        }
      },
      /**
       * 监听快捷键
       * @param e
       */
      listener(e) {
        if(this.listenerScanPluCode(e)===false)return false;

        console.info('按下了：', e.key || e.code, e.keyCode);


        let scenes = this.keys[this.scenes];


        if (typeof scenes === 'undefined') {
          scenes = {}
        }
        // 将全局中的配置追加到当前的场景中
        Object.assign(scenes, this.keys['root']);

        // 将system中的配置追加到当前的场景中
        Object.assign(scenes, this.keys['system']);

        if (typeof scenes !== 'object') {
          console.warn('没有快捷键');
          return
        }
        for (let key in scenes) {
          let k = scenes[key];
          let dom = k.dom;
          if (typeof k !== 'object') break;
          if (e.keyCode === k.keyCode && e.altKey === k.altKey
            && e.ctrlKey === k.ctrlKey && e.metaKey === k.metaKey
            && e.shiftKey === k.shiftKey) {
            console.info('有快捷键', this.scenes, k.name);
            if (typeof k.action === 'function') {
              k.action()
            } else {
              if (typeof k.action === 'string') {
                this.trigger('hotKey_' + k.action, dom);
              } else {
                this.trigger('hotKey_' + key, dom);
              }
            }
            e.preventDefault();
            e.stopPropagation()
            break;
          }
        }

        console.groupEnd('键盘监听');
        scenes = null
      },
      setScenes(scenes) {
        this.scenes = scenes
        if (this.history[this.history.length - 1] !== scenes) {
          this.history.push(scenes)
        }
        console.info(this)
        return this.scenes
      },

      /**
       * 监听扫码事件
       * @param e
       */
      listenerScanPluCode(e) {

        if ((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105)) {
          if (e.target.nodeName === 'INPUT') return;
          if (scanPluCodeStarTime === 0 || new Date().getTime() - scanPluCodeStarTime > scanPluCodeMaxScanTime) {

            scanPluCodeStr = '';
            scanPluCodeStarTime = new Date().getTime();
          }

          if (new Date().getTime() - scanPluCodeStarTime < scanPluCodeMaxScanTime) {
            // console.info('当前耗时:' + (new Date().getTime() - parseFloat(scanPluCodeStarTime)));
            scanPluCodeStr += e.key || String(e.code).replace('Digit','');
          }
        }

        if (e.keyCode === 13 && scanPluCodeStr !== '' && scanPluCodeStr.length >= scanPluCodeMinLength) {
          let dom = '';
          switch (this.scenes) {
            case "收银台":
              dom = '.page-cashier';
              break;
            case "结账":
              dom = '.page-payment';
              break;
          }

          this.trigger('扫条形码', {code: scanPluCodeStr}, dom);

          console.info('event 扫条形码', scanPluCodeStr, dom);
          // console.info('正确的条形码是:' + scanPluCodeStr);
          // console.info('耗费时间:' + (new Date().getTime() - parseFloat(scanPluCodeStarTime)));
          scanPluCodeStr = '';
          scanPluCodeStarTime = 0;
          e.preventDefault();
          e.stopPropagation();
          return false
        }else{
          return true
        }
      },
      /**
       * 抛出原生的自定义事件，在合适的时候，应该调用 off方法移除事件，防止内存溢出
       * @param event 事件名称
       * @param params 事件所带的数据
       * @param select 要抛出事件的DOM选择器
       */
      trigger(event, params, select) {
        console.group('trigger event:'+event)
        let dom;
        if (typeof params === 'string') {
          select = params
          params = null
        }
        if (typeof select === 'object') {
          throw new Error('trigger 方法中的参数 select 类型不能是 object');
        }
        dom = document.querySelectorAll(select || 'body');

        if (dom.length ===0) {
          console.warn(`找不到DOM对象:${select},停止了事件${event}的抛出`);
          return;
        }

        let e = document.createEvent('HTMLEvents');
        e.initEvent(event, true, true);
        if (params) e.params = params;
        dom[0].dispatchEvent(e);
        console.info('抛出事件:场景=' + this.scenes + '，事件名=' + event, 'dom='+(select||'body'));
        console.info(this)
        console.groupEnd()
      },
      /**
       * 监听dom事件
       * @param type
       * @param callback
       * @param select  要监听的DOM选择器
       */
      on(type, callback, select) {
        let dom = document.querySelectorAll(select || 'body');
        if (dom.length === 0) {
          console.error(`找不到DOM对象:${select},事件${type}绑定失败`);
          return;
        }
        dom[0].addEventListener(type, callback, true);
        console.info('注册事件：' + type)
        //dom.on(type, callback)

      },
      /**
       * 移除指定DOM上的事件
       * @param type
       * @param callback
       * @param select
       */
      off(type, callback,select) {
        let dom = document.querySelectorAll(select || 'body');
        if (dom.length === 0) {
          console.warn(`找不到DOM对象:${select}`);
          return;
        }
        dom[0].removeEventListener(type,callback,true)
      }
    }

  }

}
export {hotKey}
