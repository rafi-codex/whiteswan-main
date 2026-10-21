import React from "react";
import type { Metadata } from "next";
import ProfileClient from "@/components/profile/profile-client";

export const metadata: Metadata = {
  title: "Our Profile | White Swan Advisors",
  description:
    "The Team Behind Your Raise. Space founders, energy developers and trade business owners get this team, plus the expert advisors we syndicate in for your round.",
};

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-[#14181f] text-white pt-28 sm:pt-36 pb-24 px-4 sm:px-6 lg:px-12">
      <ProfileClient />
    </main>
  );
}
