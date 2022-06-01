import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

const SvgComponent = (props) => (
  <Svg
    width={24}
    height={25}
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M3.5 9.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4 0h7A3 3 0 1 0 13 3.9a1 1 0 1 0 1 1.73 1.09 1.09 0 0 1 .5-.13 1 1 0 1 1 0 2h-7a1 1 0 0 0 0 2Zm-4 4h7a1 1 0 0 0 0-2h-7a1 1 0 0 0 0 2Zm17-4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-2 2h-4a1 1 0 0 0 0 2h4a1 1 0 0 1 0 2 1 1 0 0 0 0 2 3 3 0 0 0 0-6Zm-6 4h-4a1 1 0 0 0 0 2h4a1 1 0 0 1 0 2 1.089 1.089 0 0 1-.5-.13 1 1 0 1 0-1 1.73 3 3 0 1 0 1.5-5.6Zm-8 0h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2Z"
      fill="#000"
    />
  </Svg>
)

export default SvgComponent
