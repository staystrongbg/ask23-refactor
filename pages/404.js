import Link from "next/link";
import { Meta } from "../components";

const ErrorPage = () => {
  return (
    <>
      <Meta title="404 page" />
      <p style={{ textAlign: "center" }}>
        This page doesnt exist... <Link href="/">Go home</Link>{" "}
      </p>
    </>
  );
};

export default ErrorPage;
