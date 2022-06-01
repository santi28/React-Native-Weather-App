import * as React from 'react'
import Svg, { Circle, Path, Defs, LinearGradient, Stop } from 'react-native-svg'

function SvgComponent(props) {
  return (
    <Svg
      width={30}
      height={28}
      viewBox="0 0 30 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Circle cx={14} cy={13} r={13} fill="url(#paint0_linear_217_114)" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.5 28H5v-.035c-2.812-.315-5-2.735-5-5.674 0-3.152 2.518-5.708 5.625-5.708.211 0 .42.012.625.035v-.035c0-4.203 3.358-7.611 7.5-7.611 2.896 0 5.41 1.666 6.659 4.105a7.405 7.405 0 012.091-.3c4.142 0 7.5 3.408 7.5 7.612 0 4.203-3.358 7.61-7.5 7.61z"
        fill="url(#paint1_linear_217_114)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_217_114"
          x1={1}
          y1={0}
          x2={13.0714}
          y2={12.0714}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#FAE26F" />
          <Stop offset={1} stopColor="#F7BC3D" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_217_114"
          x1={7.55208}
          y1={20.6425}
          x2={16.3458}
          y2={31.4741}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#BDE0F5" />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default SvgComponent
