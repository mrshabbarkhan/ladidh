import DialSvg from "../../assets/ui/DialSvg"
import EmailSvg from "../../assets/ui/EmailSvg"

function UserDetails() {
    return (
      <div className="flex justify-between grow">
        <div>
          <h1 className="text-xl font-medium">Robert Joe</h1>
          <span className="flex items-center gap-1">
            <EmailSvg />
            <p className="text-sm text-slate-400">user@gmail.com</p>
          </span>
          <span className="flex items-center gap-1 mt-2">
            <DialSvg />
            <p className="text-sm text-slate-400">1234567890</p>
          </span>
        </div>
          <i className="fa-regular fa-pen-to-square"></i>
      </div>
    );
}

export default UserDetails
