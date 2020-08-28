import React, { useState, useEffect } from 'react'

import {
  Wrapper,
  Items,
  Item,
  Arrow,
  Pager
} from './styles'

export const Gallery = ({
  className,
  images = [
    "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic10.jpg",
    "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic5.jpg",
    "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic14.jpg",
    "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic1.jpg",
    "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic4.jpg"
  ]
}) => {
  const [current, setCurrent] = useState(0)
  const [prev, setPrev] = useState(0)
  const [next, setNext] = useState(0)

  const surroundings = () => {
    if (current === 0) {
      setPrev(images.length - 1)
      setNext(1)
    } else if (current === images.length - 1) {
      setPrev(images.length - 2)
      setNext(0)
    } else {
      setPrev(current - 1)
      setNext(current + 1)
    }
  }

  useEffect(surroundings, [])

  const to = {
    next: () => {
      setCurrent(cur => {
        if(cur < images.length - 1)
          return cur + 1
        return 0
      })
    },
    prev: () => {
      setCurrent(cur => {
        if(cur === 0)
          return images.length - 1
        return cur - 1
      })
    }
  }

  return (
    <Wrapper className={className}>
      <Arrow left onClick={to.prev} />
      <Arrow right onClick={to.next} />
      <Items>
        <Item photo={images[prev]} />
        <Item photo={images[current]} />
        <Item photo={images[next]} />
      </Items>
      <Pager current={current}>
        {images.map(img => <li key={img} />)}
      </Pager>
    </Wrapper>
  )
}
