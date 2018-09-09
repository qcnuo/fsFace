'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var qcloud = require('../../packages/wafer2-client-sdk/index.js');
var util = require('../../utils/util.js');
exports.default = Page({
  data: {
    '__code__': {
      readme: ''
    }
  },
  onLoad: function onLoad() {},

  onConfirm: function onConfirm(e) {
    var $dialog = this.selectComponent(".wxc-dialog");
    $dialog.hide();
    console.log("confirm" + e);
  }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4Lnd4cCJdLCJuYW1lcyI6WyJxY2xvdWQiLCJyZXF1aXJlIiwidXRpbCIsImRhdGEiLCJvbkxvYWQiLCJvbkNvbmZpcm0iLCJlIiwiJGRpYWxvZyIsInNlbGVjdENvbXBvbmVudCIsImhpZGUiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBLElBQUlBLFNBQVNDLFFBQVEsMkNBQVIsQ0FBYjtBQUNBLElBQUlDLE9BQU9ELFFBQVEscUJBQVIsQ0FBWDs7QUFVRUUsUUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7QUFJTkMsVUFBTyxrQkFBVSxDQUVoQixDOztBQUdEQyxhQUFVLG1CQUFTQyxDQUFULEVBQVc7QUFDbEIsUUFBSUMsVUFBVSxLQUFLQyxlQUFMLENBQXFCLGFBQXJCLENBQWQ7QUFDQUQsWUFBUUUsSUFBUjtBQUNEQyxZQUFRQyxHQUFSLENBQVksWUFBVUwsQ0FBdEI7QUFDRCIsImZpbGUiOiJpbmRleC53eHAiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcWNsb3VkID0gcmVxdWlyZSgnd2FmZXIyLWNsaWVudC1zZGsvaW5kZXgnKTtcclxudmFyIHV0aWwgPSByZXF1aXJlKCcuLi8uLi91dGlscy91dGlsJyk7XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBjb25maWc6IHtcclxuICAgIHVzaW5nQ29tcG9uZW50czoge1xyXG4gICAgICAnd3hjLW5vdGljZSc6ICdAbWludWkvd3hjLW5vdGljZScsXHJcbiAgICAgICd3eGMtZGlhbG9nJzogJ0BtaW51aS93eGMtZGlhbG9nJyxcclxuICAgICAgJ3d4Yy10b2FzdCc6ICdAbWludWkvd3hjLXRvYXN0JyxcclxuICAgICAgJ3d4Yy11c2VyaGVhZCc6Jy4uLy4uL2NvbXBvbmVudC91c2VyaGVhZCdcclxuICAgIH1cclxuICB9LFxyXG4gIGRhdGE6IHtcclxuICAgXHJcbiAgIFxyXG4gIH0sXHJcbiAgb25Mb2FkOmZ1bmN0aW9uKCl7XHJcbiAgIFxyXG4gIH0sXHJcbiAgXHJcblxyXG4gIG9uQ29uZmlybTpmdW5jdGlvbihlKXtcclxuICAgICB2YXIgJGRpYWxvZyA9IHRoaXMuc2VsZWN0Q29tcG9uZW50KFwiLnd4Yy1kaWFsb2dcIik7XHJcbiAgICAgJGRpYWxvZy5oaWRlKClcclxuICAgIGNvbnNvbGUubG9nKFwiY29uZmlybVwiK2UpO1xyXG4gIH1cclxuICBcclxufSJdfQ==