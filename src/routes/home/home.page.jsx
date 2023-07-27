import { Directory } from "../../components/Directory/Directory";
import { Outlet } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <Outlet />
      <Directory />
    </>
  );
}
