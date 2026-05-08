import type { RankedItem } from "@/lib/question/calculateScore";
import majorProfilesRaw from "@/data/major/profiles.json";

export interface MajorProfile {
  id: string;
  label: string;
  colorVar: string;
  keywords: string[];
  fits: string[];
  subjects: string[];
  careers: string[];
}

const majorProfiles: MajorProfile[] = majorProfilesRaw.majors as MajorProfile[];

export interface MajorResultItem extends RankedItem {
  label: string;
  colorVar: string;
  keywords: string[];
  fits: string[];
  subjects: string[];
  careers: string[];
}

// major question의 option.major 값은 "infosec" / "design" 등으로 되어 있어서
// profiles.json의 id("infosec", "design" 등)와 매핑이 필요
const MAJOR_ID_MAP: Record<string, string> = {
  infosec: "infosec",
  software: "software",
  "it-management": "it-management",
  design: "design",
};

export function buildMajorResults(ranked: RankedItem[]): MajorResultItem[] {
  return ranked.map((item) => {
    const profileId = MAJOR_ID_MAP[item.id] ?? item.id;
    const profile = majorProfiles.find((p) => p.id === profileId);
    return {
      ...item,
      label: profile?.label ?? item.id,
      colorVar: profile?.colorVar ?? "--sunrin-green",
      keywords: profile?.keywords ?? [],
      fits: profile?.fits ?? [],
      subjects: profile?.subjects ?? [],
      careers: profile?.careers ?? [],
    };
  });
}

// 학과 추천 결과에서 1순위 학과의 동아리 탐색 href
const MAJOR_TO_CLUB_HREF: Record<string, string> = {
  infosec: "/question/club/infosec",
  software: "/question/club/software",
  "it-management": "/question/club/it-management",
  design: "/question/club/design",
};

export function getClubHref(majorId: string): string {
  const profileId = MAJOR_ID_MAP[majorId] ?? majorId;
  return MAJOR_TO_CLUB_HREF[profileId] ?? "/question/club";
}