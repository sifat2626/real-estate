import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import PageTitle from "../../components/PageTitle/PageTitle";
import SideNav from "../../shared/SideNav/SideNav";
import ProfileNav from "../../shared/ProfileNav/ProfileNav";

function UpdateProfile() {
  const { user, updateUser, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleUpdateUser = (name, photoURL) => {
    updateUser(name, photoURL)
      .then(() => {
        toast.success("Profile Updated Successfully!");
        navigate("/");
        setUser((prevUser) => {
          return { ...prevUser, displayName: name, photoURL };
        });
      })
      .catch((error) => toast.error(error.message));
  };

  // console.log(user);

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const displayName = e.target.name.value || user.displayName;
    const photoURL = e.target.photo.value || user.photoURL;
    handleUpdateUser(displayName, photoURL);
  };
  return (
    <ProfileNav>
      <div className="mt-12 lg:w-1/2 mx-auto">
        <PageTitle title={"Update Profile"} />
        <p className="text-center mb-8 text-4xl font-semibold font-mon">
          My Profille
        </p>
        <form onSubmit={(e) => handleUpdateProfile(e)}>
          <div className="bg-cozy-green p-4 rounded-3xl">
            <div className="form-control">
              <label className="text-white">Email</label>
              <input
                type="email"
                className="w-full bg-white rounded-lg p-2 mt-2"
                placeholder={user.email || "No Email Found"}
                disabled
              />
            </div>
            <div className="form-control mt-4">
              <label className="text-white">Name</label>
              <input
                type="text"
                name="name"
                className="w-full bg-white rounded-lg p-2 mt-2"
                defaultValue={user.displayName}
              />
            </div>
            <div className="form-control mt-4">
              <label className="text-white">PhotoURL</label>
              <input
                type="text"
                name="photo"
                className="w-full bg-white rounded-lg p-2 mt-2"
                placeholder={user.photoURL}
              />
            </div>
            <div className="text-center mt-4">
              <button className="bg-white font-semibold px-4 py-2 rounded-lg">
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </ProfileNav>
  );
}

export default UpdateProfile;

// setUser((prevUser)=>{
//   return {...prevUser, displayName: name, photoURL:  photo};
// })
