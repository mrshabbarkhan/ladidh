import DialSvg from "../../assets/ui/DialSvg"
import EmailSvg from "../../assets/ui/EmailSvg"

function UserDetails({ user }) {
  const {name, email, number} = user
    return (
      <div className="flex justify-between grow">
        <div>
          <h1 className="text-xl font-medium">{name}</h1>
          <span className="flex items-center gap-1">
            <EmailSvg />
            <p className="text-sm text-slate-400">{email}</p>
          </span>
          <span className="flex items-center gap-1 mt-2">
            <DialSvg />
            <p className="text-sm text-slate-400">{number}</p>
          </span>
        </div>
          <i className="fa-regular fa-pen-to-square"></i>
      </div>
    );
}

export default UserDetails
