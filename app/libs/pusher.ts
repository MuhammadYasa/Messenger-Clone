import PusherServer from "pusher";
import PusherClient from "pusher-js";

// kenapa di akhiri tanda ! pada koneksinya ?
// karena agar terdeteksi tidak ada typo pada pengetikan
export const pusherServer = new PusherServer({
  appId: process.env.PUSHER_APP_ID!,
  key: process.env.NEXT_PUBLIC_PUSHER_APP_KEY!,
  secret: process.env.PUSHER_SECRET!,
  cluster: process.env.PUSHER_CLUSTER!,
  useTLS: true,
});

export const pusherClient = new PusherClient(
  process.env.NEXT_PUBLIC_PUSHER_APP_KEY!,
  {
    cluster: process.env.PUSHER_CLUSTER!,
  }
);
