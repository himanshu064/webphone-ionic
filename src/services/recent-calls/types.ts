export type CallStatus = "MISSED" | "ANSWERED" | "OUTGOING" | "REJECTED";

export interface Call {
  created_at: string;
  source_number: string;
  dest_number: string;
  call_stats: CallStatus;
  duration: number;
}

export interface RecentCallsProps {
  calls: Call[];
  onCallClick?: (call: Call) => void;
}

export interface CallItemProps {
  call: Call;
  onClick?: (call: Call) => void;
}
