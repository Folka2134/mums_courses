import CourseList from "@/components/shared/CourseList";
import { Button } from "@/components/ui/button";
import { getUserById } from "@/lib/actions/user.actions";
import { auth } from "@clerk/nextjs";
import Link from "next/link";

export default async function Home() {
  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as string;
  const user = await getUserById(userId);

  return (
    <main className="flex min-h-screen flex-col items-center gap-10 p-5">
      {user.admin && (
        <div>
          <h1>Admin function</h1>
          <Link href="/courses/create">
            <Button>Create listing</Button>
          </Link>
        </div>
      )}
      <h1>Testing mongodb + clerk shared user data</h1>
      <CourseList />
    </main>
  );
}
