import { faHome, faTicket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";



export default function Nav() {
  return (
    <nav className="flex justify-between bg-nav p-4 ">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <FontAwesomeIcon icon={faHome} className="icon">
          </FontAwesomeIcon>
        </Link>

        <Link href="/TicketPage/new">
          <FontAwesomeIcon icon={faTicket} className="icon">
          </FontAwesomeIcon>
        </Link>
      </div>
      <div>
        <p className="">
          super email @ gmail.com
        </p>
      </div>
    </nav>
  )
}
