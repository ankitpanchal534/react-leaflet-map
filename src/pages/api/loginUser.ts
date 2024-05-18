import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "./supabaseClient";

export default async function loginUser(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(supabase);
  let { data: users, error } = await supabase
    .from("users")
    .select("*")
    .eq("email", "ankit@panchal.coa");
  res.json({
    status: 200,
    user: users?.[0] ?? "user not found!",
    txt: "Hello World!",
  });
}
