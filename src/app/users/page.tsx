import { db } from "@/db";
import { users as usersTable } from "@/db/schema";

export default async function UsersPage() {
  const users = await db.select().from(usersTable);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
