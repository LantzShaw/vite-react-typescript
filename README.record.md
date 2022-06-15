# Record

```sh
# 支持内联javascript表示什么意思

javascriptEnabled: true  
```

```js
// import 'moment/locale/zh-cn' // 引入这个文件依然会有中文
import 'moment/dist/locale/zh-cn' // 应该引入这个文件
```

使用context项目推荐
https://github.com/jeffersonRibeiro/react-shopping-cart/tree/main/src


```tsx
import { FC, memo, ReactElement } from 'react'
import { Button } from 'antd'

interface CardProps {
  title: string
  description?: string
  onEdit?: (title: string) => void
}

const Card: FC<CardProps> = (props): ReactElement => {
  const { title, description, onEdit } = props

  console.log('-----------render-----------')

  const clickHandler = () => {
    onEdit?.(title)
    
    // NOTE: This way can either work
    // onEdit && onEdit(title)
  }

  return (
    <>
      <h2>{title}</h2>
      <p>{description}</p>
      <Button onClick={clickHandler}>...</Button>
    </>
  )
}

export default memo(Card)

```

```js
const screens = {xs: false, sm: true, md: true, lg: true, xl: true, …}

const temp = Object.entries(screens)

// [['xs', false] , ['sm', true] , ['md', true], ['lg', true], ['xxl', false], ['xl', true]]

  console.log('------temp--------', temp)


```

