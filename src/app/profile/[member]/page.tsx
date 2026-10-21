import { redirect } from "next/navigation";

export default function ProfileMemberPage({
  params,
}: {
  params: { member: string };
}) {
  redirect(`/profile?member=${params.member}`);
}
