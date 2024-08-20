import OrderActions from "./OrderActions";
import UserAvatar from "./UserAvatar";
import UserDetails from "./UserDetails";
import UserFooter from "./UserFooter";

function ProfilePage() {
  return (
    <div>
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
    </div>
  );
}

export default ProfilePage;
