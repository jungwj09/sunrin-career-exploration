import type { RankedItem } from "@/lib/question/calculateScore";

export interface ClubProfile {
  id: string;
  label: string;
  keywords: string[];
  fits: string[];
  activities: string[];
}

export interface ClubResultItem extends RankedItem {
  label: string;
  keywords: string[];
  fits: string[];
  activities: string[];
}

export function buildClubResults(
  ranked: RankedItem[],
  profiles: ClubProfile[]
): ClubResultItem[] {
  return ranked.map((item) => {
    const profile = profiles.find((p) => p.id === item.id);
    return {
      ...item,
      label: profile?.label ?? item.id,
      keywords: profile?.keywords ?? [],
      fits: profile?.fits ?? [],
      activities: profile?.activities ?? [],
    };
  });
}