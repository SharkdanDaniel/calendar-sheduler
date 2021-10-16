export interface DateEvent {
  date: Date;
  events?: Match[];
}

export interface Match {
  round: string;
  date: string;
  team1: string;
  team2: string;
  score: Score;
}

interface Score {
  ft: number[];
}