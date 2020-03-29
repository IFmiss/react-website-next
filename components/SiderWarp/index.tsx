import React, { useRef, useState, useEffect, useImperativeHandle } from 'react'
import classNames from 'classnames'
import { PROJECT_NAME } from '@constance/index'
import './sider-warp.less'
import Menu from './menu.svg'

interface ISiderWarpProps {
  show: boolean;
  type: SiderType;
  hideFn?: () => void;
  showFn?: () => void;
}

interface ISiderWrapRef {
  showComp: () => void;
  hideComp: () => void;
}

type SiderType = 'fixed' | 'auto'

const SiderWarp: React.ForwardRefRenderFunction<ISiderWrapRef, ISiderWarpProps> = (props, ref) => {
  const [show, setShow] = useState<boolean>(props.show)

  const classString = classNames({
    [`${PROJECT_NAME}-comp-sider-warp`]: true,
    [`show`]: show,
    [`${props.type}`]: true
  })

  const hideComp = () => {
    setShow((show) => show = false)
    props.hideFn && props.hideFn()
  }

  const showComp = () => {
    setShow((show) => show = true)
    props.showFn && props.showFn()
  }

  const toggleSiderWarp = () => {
    show ? props.hideFn && props.hideFn() : props.showFn && props.showFn()
    setShow((show) => show = !show)
  }

  const mapRef = useRef(null)

  useImperativeHandle(ref, () => {
    return {
      showComp,
      hideComp
    }
  })

  return (
    <section className={classString} ref={mapRef}>
      <div className='mask' onClick={hideComp}></div>
      <div className='content'>
        <div className="content-switch" onClick={toggleSiderWarp}>
          <Menu className='memu'></Menu>
        </div>
        <div className='wrapper'>
          {props.children}
        </div>
      </div>
    </section>
  )
}

const SiderWarpComponent = React.forwardRef(SiderWarp)

export default SiderWarpComponent as any