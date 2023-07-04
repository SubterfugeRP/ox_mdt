export interface Profile extends ProfileCard {
  notes?: string;
  licenses?: Array<{ label: string; points: number } | string>;
  vehicles?: {
    label: string;
    plate: string;
  }[];
  pastCharges?: {
    label: string;
    count: number;
  }[];
  relatedReports?: {
    title: string;
    author: string;
    date: string;
    id: number;
  }[];
}

export interface ProfileCard {
  firstName: string;
  lastName: string;
  dob: number;
  stateId: number | string;
  image?: string;
}
