import Guard from "app/guard/ability"
import { Ctx } from "blitz"
import db from "db"

async function getCurrentUser(_ = null, { session }: Ctx) {
  if (!session.userId) return null

  const user = await db.user.findFirst({
    where: { id: session.userId },
    select: { id: true, name: true, email: true, role: true },
  })

  return user
}

export default Guard.authorize("read", "user", getCurrentUser)
