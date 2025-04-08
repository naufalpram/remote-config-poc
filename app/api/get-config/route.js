import { getServerConfig } from "@/lib/firebaseAdmin";

export async function GET() {
    const serverConfig = await getServerConfig();
    return Response.json({ data: serverConfig.getAll() });
}