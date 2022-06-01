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
      d="M10.5 8.5c0-3.49-3.3-5.74-3.44-5.83a1 1 0 0 0-1.12 0C5.8 2.77 2.5 5.05 2.5 8.5a4 4 0 1 0 8 0Zm-4 2a2 2 0 0 1-2-2 5.44 5.44 0 0 1 2-3.72 5.39 5.39 0 0 1 2 3.72 2 2 0 0 1-2 2Zm11.56-7.83a1 1 0 0 0-1.12 0c-.14.1-3.44 2.38-3.44 5.83a4 4 0 1 0 8 0c0-3.49-3.3-5.74-3.44-5.83Zm-.56 7.83a2 2 0 0 1-2-2 5.44 5.44 0 0 1 2-3.72 5.39 5.39 0 0 1 2 3.72 2 2 0 0 1-2 2Zm-4.44 2.17a1 1 0 0 0-1.12 0c-.14.1-3.44 2.38-3.44 5.83a4 4 0 1 0 8 0c0-3.49-3.3-5.74-3.44-5.83Zm-.56 7.83a2 2 0 0 1-2-2 5.44 5.44 0 0 1 2-3.72 5.39 5.39 0 0 1 2 3.72 2 2 0 0 1-2 2Z"
      fill="#000"
    />
  </Svg>
)

export default SvgComponent
