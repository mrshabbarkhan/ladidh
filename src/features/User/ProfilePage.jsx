import { useSelector } from "react-redux";
import OrderActions from "./OrderActions";
import UserAvatar from "./UserAvatar";
import UserDetails from "./UserDetails";
import UserFooter from "./UserFooter";
import AuthForm from "../auth/AuthForm";

function ProfilePage() {
  const { isAdmin } = useSelector((state) => state.search);
  return (
    <div>
      {isAdmin ? (
        <>
          <div className="flex gap-5">
            <UserAvatar />
            <UserDetails />
          </div>
          <section className="flex items-center justify-around py-6 rounded-xl my-4 Profile_List">
            <OrderActions />
          </section>
          <section>
            <UserFooter />
          </section>
        </>
      ) : (
        <AuthForm />
      )}
    </div>
  );
}

export default ProfilePage;
