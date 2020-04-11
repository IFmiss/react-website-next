import React, { useRef, useState, useEffect, useImperativeHandle, ReactElement, useMemo } from 'react'
import classNames from 'classnames'
import { PROJECT_NAME } from '@constance/index'
import './sider-warp.less'
import Menu from './menu.svg'
import {
  isAppleDevice
} from '@utils/utils'
import { addClass, removeClass } from '@root/utils/utils'

interface ISiderWarpProps {
  show: boolean;
  type: SiderPosition;
  name: string | ReactElement;
  hideFn?: () => void;
  showFn?: () => void;
}

interface ISiderWrapRef {
  showComp: () => void;
  hideComp: () => void;
}

type SiderType = 'fixed' | 'auto'

type SiderPosition = 'right' | 'left' | 'bottom'

const SiderWarp: React.ForwardRefRenderFunction<ISiderWrapRef, ISiderWarpProps> = (props, ref) => {
  const siderRef = useRef<HTMLElement>(null)
  const { name = '菜单', type = 'right' } = props
  const [show, setShow] = useState<boolean>(props.show || true)

  const classString = classNames({
    [`${PROJECT_NAME}-comp-sider-warp`]: true,
    [`show`]: show,
    [`${type}`]: true
  })
  
  const classWrap = classNames({
    [`${PROJECT_NAME}-comp-sider-warp`]: true
  })

  useEffect(() => {
    if (show) {
      addClass(document.getElementById('dw-next-container') as HTMLElement, `sider-warp-${type}`)
    } else {
      removeClass(document.getElementById('dw-next-container') as HTMLElement, `sider-warp-${type}`)
    }
  }, [show])

  useEffect(() => {
    if (isAppleDevice() && siderRef.current) {
      addClass(siderRef.current, 'blur')
    }
  }, [])

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

  useImperativeHandle(ref, () => {
    return {
      showComp,
      hideComp
    }
  })

  return (
    <section className={classString} ref={siderRef}>
      <div className={`${classWrap}-mask`} onClick={hideComp}></div>
      <div className={`${classWrap}-content`}>
        <div className={`${classWrap}-content-title`}>{
          name
        }</div>
        <div className={`${classWrap}-content-wrapper`}>
          {/* {props.children} */}
          asdasdasd
        </div>
      </div>
    </section>
  )
}

const SiderWarpComponent = React.forwardRef(SiderWarp)

export default SiderWarpComponent as any