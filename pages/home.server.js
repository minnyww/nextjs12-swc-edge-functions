import { Suspense } from "react";
import ContentClient from "../components/content.client";
import ProfileServer from "../components/profile.server";

export default function Home() {
  return (
    <div>
      <h1>Welcome to React Server Components</h1>
      <Suspense fallback={"Loading..."}>
        <ProfileServer />
      </Suspense>
      <ContentClient />
    </div>
  );
}
