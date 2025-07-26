"use client";

import { useEffect, useState } from "react";
import { SiLeetcode, SiCodeforces, SiCodechef } from "react-icons/si";

const CPProfile = () => {
  const [cfRating, setCfRating] = useState<number | null>(null);
  const [lcSolved, setLcSolved] = useState<string>("Fetching...");
  const [ccRating, setCcRating] = useState<string>("Fetching...");

  useEffect(() => {
    // --- Codeforces ---
    fetch("https://codeforces.com/api/user.info?handles=Krishna_Singh27")
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "OK") {
          setCfRating(data.result[0].rating);
        }
      })
      .catch(() => setCfRating(null));

    // --- LeetCode ---
    // Uses leetcode API via proxy + graphql
    fetch("https://leetcode-api-faisalshohag.vercel.app/krishna_singh27")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.totalSolved !== undefined) {
          setLcSolved(`${data.totalSolved} Qs Solved`);
        } else {
          setLcSolved("N/A");
        }
      })
      .catch(() => setLcSolved("N/A"));

    // --- CodeChef ---
    fetch("https://competitive-coding-api.onrender.com/api/codechef/krishnasingh27")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.rating) {
          setCcRating(`${data.rating} Rating`);
        } else {
          setCcRating("N/A");
        }
      })
      .catch(() => setCcRating("N/A"));
  }, []);

  return (
    <div className="mt-8 p-6 bg-muted rounded-lg border border-border/40 text-foreground">
      <h3 className="text-xl font-bold uppercase mb-4">CP PROFILES</h3>
      <ul className="space-y-4">
        <li className="flex items-center gap-3">
          <SiLeetcode className="text-yellow-500" size={24} />
          <a
            href="https://leetcode.com/krishna27singh"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary underline"
          >
            LeetCode – {lcSolved}
          </a>
        </li>
        <li className="flex items-center gap-3">
          <SiCodeforces className="text-blue-500" size={24} />
          <a
            href="https://codeforces.com/profile/Krishna_Singh27"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary underline"
          >
            Codeforces – {cfRating ? `${cfRating} Rating` : "N/A"}
          </a>
        </li>
        <li className="flex items-center gap-3">
          <SiCodechef className="text-orange-500" size={24} />
          <a
            href="https://www.codechef.com/users/krishnasingh27"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary underline"
          >
            CodeChef – {ccRating}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default CPProfile;
