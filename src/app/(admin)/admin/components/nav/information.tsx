import Image from 'next/image'
import AvatarIcon from '@/public/admin/img/avt.png'
import '@admin/styles/nav/information.scss'
export default function Information() {
    return (
        <div className="nav-information">
            <div className="information">
                <a>
                    <Image src={AvatarIcon} alt="avatar" />
                    <h3>Admin</h3>
                </a>
            </div>
        </div>
    )
}
