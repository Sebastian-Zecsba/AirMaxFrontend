import MainNavAdmin from "../../components/ui/MainNavAdmin";
import ToastNotification from "../../components/ui/ToastNotification";

export default function layout({children}: Readonly<{ children: React.ReactNode;}>) {
  return (
    <div>
        <MainNavAdmin />
        {children}
        <ToastNotification />
    </div>
  )
}
