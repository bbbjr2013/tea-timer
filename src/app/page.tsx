import TeaHome from "./teaHome/page";

export default function Home() {
  return (
    <main>
      <h1>Main Page</h1>
      <p>
        Just an indicator that this is the home page and below should be the
        routed TeaHome page
      </p>

      <TeaHome />
    </main>
  );
}
