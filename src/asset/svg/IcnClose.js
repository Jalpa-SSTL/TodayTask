import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { AppUtil } from "../../util/AppUtil"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width={AppUtil.getWP(3)}
      height={AppUtil.getWP(3)}
      viewBox="0 0 121.31 122.876"
      xmlSpace="preserve"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M90.914 5.296a17.662 17.662 0 0125.154-.068c6.961 6.995 6.991 18.369.068 25.397L85.743 61.452l30.425 30.855c6.866 6.978 6.773 18.28-.208 25.247-6.983 6.964-18.21 6.946-25.074-.031L60.669 86.881 30.395 117.58a17.662 17.662 0 01-25.154.068c-6.961-6.995-6.992-18.369-.068-25.397l30.393-30.827L5.142 30.568c-6.867-6.978-6.773-18.28.208-25.247 6.983-6.963 18.21-6.946 25.074.031l30.217 30.643L90.914 5.296z"
      />
    </Svg>
  )
}

export default SvgComponent
