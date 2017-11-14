import moment from 'moment';
moment.locale('zh-cn');

import Pagination from 'rc-pagination/lib/locale/zh_CN';
import DatePicker from '../date-picker/locale/zh_CN';
import TimePicker from '../time-picker/locale/zh_CN';
import Calendar from '../calendar/locale/zh_CN';

export default {
  locale: 'zh-cn',
  Pagination,
  DatePicker,
  TimePicker,
  Calendar,
  List: {
    emptyText: '暂无数据',
  },
  Table: {
    filterTitle: '筛选',
    filterConfirm: '确定',
    filterReset: '重置',
    emptyText: '暂无数据',
    selectAll: '全选当页',
    selectInvert: '反选当页',
  },
  Modal: {
    okText: '确定',
    cancelText: '取消',
    justOkText: '知道了',
  },
  Popconfirm: {
    cancelText: '取消',
    okText: '确定',
  },
  Transfer: {
    titles: ['', ''],
    searchPlaceholder: 'Search',
    notFoundContent: 'Not Found',
  },
  Select: {
    notFoundContent: '无匹配结果',
  },
  Upload: {
    uploading: '文件上传中',
    removeFile: '删除文件',
    uploadError: '上传错误',
    previewFile: '预览文件',
  },
};
