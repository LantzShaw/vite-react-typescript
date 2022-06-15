import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import zhCN from 'antd/lib/locale/zh_CN'
import { ConfigProvider } from 'antd'
import moment from 'moment'
import 'moment/dist/locale/zh-cn'
import 'antd/dist/antd.less'

import App from './App'
import { NotificationProvider } from '@/contexts/notification-context'

moment.locale('zh-cn')

const container = document.getElementById('root') as Element

const root = ReactDOM.createRoot(container)

const element = (
  <React.StrictMode>
    <NotificationProvider>
      <ConfigProvider locale={zhCN}>
        <Router>
          <App />
        </Router>
      </ConfigProvider>
    </NotificationProvider>
  </React.StrictMode>
)

root.render(element)
