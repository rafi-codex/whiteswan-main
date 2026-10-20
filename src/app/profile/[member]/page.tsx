import HeaderTeamMember from "@/components/profile/team-member/header-team-member";
import Member from "@/components/profile/team-member/member";
import teamData from "@/data/team.json";
import { notFound } from "next/navigation";
import React from "react";

const TeamMember = ({ params }: { params: { member: string } }) => {
  const { member } = params;

  const memberData = teamData.find((item) => item.slug == member);

  if (!memberData) {
    return notFound();
  }

  return (
    <main>
      <HeaderTeamMember member={memberData} />
      <Member member={memberData} />
    </main>
  );
};

export default TeamMember;
