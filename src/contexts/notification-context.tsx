import { createContext, ReactElement, useState } from 'react'

const NotificationContext = createContext({
  notifications: [],
  total: 0,
  increaseNotification: () => {},
  decreaseNotification: () => {},
})

type Iprops = {
  children: ReactElement
}

export function NotificationProvider({ children }: Iprops): ReactElement {
  const [notifications, setNotifications] = useState([])

  const increaseNotification = (): void => {}

  const decreaseNotification = (): void => {}

  const context = {
    notifications,
    total: notifications.length,
    increaseNotification,
    decreaseNotification,
  }

  return <NotificationContext.Provider value={context}>{children}</NotificationContext.Provider>
}

export default NotificationContext
