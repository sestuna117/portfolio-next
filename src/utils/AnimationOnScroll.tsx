"use client"

import { InView } from "react-intersection-observer"

interface AnimationOnScrollProps {
  children: React.ReactNode
  classNameInView: string
}

export default function AnimationOnScroll({children, classNameInView}: AnimationOnScrollProps) {
  return (
    <InView triggerOnce threshold={1}>
      {({ inView, ref, entry }) => (
        <div
          ref={ref}
          className={inView ? classNameInView : "opacity-0"}
        >
          {children}
        </div>
      )}
    </InView>
  )
}