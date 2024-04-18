import Information from "./information";
import NavList from "./navList";
import "../../styles/nav/nav.scss"

export default function Nav() {

    return (
        <div className="nav">
            <Information/>
            <NavList/>
        </div>
    )
}