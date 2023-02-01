import Link from "next/link";
import { useRouter } from "next/router";

export default function Asidebar() {
  const router = useRouter();
  const signOutBtn = () => {
    console.log("INSIDE");
    localStorage.removeItem("janz_medical_login_token");
    localStorage.removeItem("janz_medical_user");
    router.push("/");
  };
  return (
    <>
      <aside className="left-aside">
        <div className="d-flex justify-content-center pt-4">
          <h2>Good Evening Janz</h2>
        </div>
        <ul>
          <li>
            <Link href={"my_order"} className="nav-link">
              <span>
                <svg className="icon">
                  <use href="#icon_kart"></use>
                </svg>
              </span>
              <strong>My Order</strong>
            </Link>
          </li>
          <hr />
          <li>
            <Link href={"subscription"} className="nav-link">
              <span>
                <svg className="icon">
                  <use href="#icon_subscription"></use>
                </svg>
              </span>
              <strong>Subscriptions</strong>
            </Link>
          </li>
          <hr />
          <li>
            <Link href={""} className="nav-link">
              <span>
                <svg className="icon">
                  <use href="#icon_user"></use>
                </svg>
              </span>
              <strong>Account Setting</strong>
            </Link>
          </li>
          <li>
            <Link href={"profile_details"} className="nav-link">
              <strong className="small">Profile Details</strong>
            </Link>
          </li>
          <li>
            <Link href={"insurance_details"} className="nav-link">
              <strong className="small">Insurance Details</strong>
            </Link>
          </li>
          <hr />
          <li>
            <div className="nav-link d-flex justify-content-between">
              <div className="d-flex  align-item-center">
                <div className="logout">
                  <span>
                    <svg className="icon">
                      <use href="#icon_signout"></use>
                    </svg>
                  </span>
                </div>
                <strong onClick={signOutBtn}>Sign Out</strong>
              </div>
              <svg className="icon">
                <use href="#icon_arrow"></use>
              </svg>
            </div>
          </li>
        </ul>
      </aside>
    </>
  );
}
