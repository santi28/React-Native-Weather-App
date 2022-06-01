import * as React from 'react'
import Svg, {
  G,
  Circle,
  Path,
  Defs,
  LinearGradient,
  Stop
} from 'react-native-svg'
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function SvgComponent(props) {
  return (
    <Svg
      width={40}
      height={40}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G filter="url(#filter0_d_12_213)">
        <Circle cx={14} cy={14.5} r={13} fill="url(#paint0_linear_12_213)" />
        <G filter="url(#filter1_b_12_213)">
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22.5 29.5H5v-.035c-2.812-.315-5-2.735-5-5.673 0-3.153 2.518-5.709 5.625-5.709.211 0 .42.012.625.035v-.035c0-4.203 3.358-7.611 7.5-7.611 2.896 0 5.41 1.666 6.659 4.105a7.401 7.401 0 012.091-.3c4.142 0 7.5 3.408 7.5 7.612 0 4.203-3.358 7.611-7.5 7.611z"
            fill="url(#paint1_linear_12_213)"
            fillOpacity={0.6}
          />
        </G>
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_12_213"
          x1={1}
          y1={1.5}
          x2={13.0714}
          y2={13.5714}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#FAE26F" />
          <Stop offset={1} stopColor="#F7BC3D" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_12_213"
          x1={7.55208}
          y1={22.1425}
          x2={16.3458}
          y2={32.9741}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#BDE0F5" />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default SvgComponent
