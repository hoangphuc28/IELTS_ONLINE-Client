import Information from "./information";
import NavList from "./navList";
import "@admin/styles/nav/nav.scss"

export default function Nav() {

    return (
        <div className="nav">
            <Information/>
            <NavList/>
        </div>
    )
}