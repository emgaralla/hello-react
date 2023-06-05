// import {subLogo, subLogo2} from '../../images'
import subLogo from '../../images/subLogo.svg'
import subLogo2 from  '../../images/subLogo2.svg'


export default function FooterLogo () {
  return (
    <div className="subLogo">
      <img src={subLogo} alt="subLogo" />
      <img src={subLogo2} alt="subLogo2" />
    </div>
  )
}