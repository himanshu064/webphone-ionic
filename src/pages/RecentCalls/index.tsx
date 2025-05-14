import { SafeAreaProvider } from "@/providers";
import { CallStatus } from "@/services/recent-calls/types";

// Mock data
const mockCalls = [
  {
    created_at: "2025-04-11T13:55:07+05:30",
    source_number: "phone15",
    dest_number: "phone1",
    call_stats: "MISSED",
    duration: 2,
  },
  {
    created_at: "2025-04-11T13:54:22+05:30",
    source_number: "phone15",
    dest_number: "phone1",
    call_stats: "MISSED",
    duration: 1,
  },
  {
    created_at: "2025-04-11T13:54:06+05:30",
    source_number: "phone15",
    dest_number: "phone1",
    call_stats: "MISSED",
    duration: 1,
  },
  {
    created_at: "2025-04-11T13:39:24+05:30",
    source_number: "phone15",
    dest_number: "phone1",
    call_stats: "MISSED",
    duration: 1,
  },
  {
    created_at: "2025-04-11T13:37:58+05:30",
    source_number: "phone1",
    dest_number: "phone15",
    call_stats: "ANSWERED",
    duration: 120,
  },
  {
    created_at: "2025-04-11T13:37:52+05:30",
    source_number: "phone15",
    dest_number: "phone2",
    call_stats: "OUTGOING",
    duration: 45,
  },
  {
    created_at: "2025-04-11T13:55:07+05:30",
    source_number: "phone15",
    dest_number: "phone1",
    call_stats: "MISSED",
    duration: 2,
  },
  {
    created_at: "2025-04-11T13:54:22+05:30",
    source_number: "phone15",
    dest_number: "phone1",
    call_stats: "MISSED",
    duration: 1,
  },
  {
    created_at: "2025-04-11T13:54:06+05:30",
    source_number: "phone15",
    dest_number: "phone1",
    call_stats: "MISSED",
    duration: 1,
  },
  {
    created_at: "2025-04-11T13:39:24+05:30",
    source_number: "phone15",
    dest_number: "phone1",
    call_stats: "MISSED",
    duration: 1,
  },
  {
    created_at: "2025-04-11T13:37:58+05:30",
    source_number: "phone1",
    dest_number: "phone15",
    call_stats: "ANSWERED",
    duration: 120,
  },
  {
    created_at: "2025-04-11T13:37:52+05:30",
    source_number: "phone15",
    dest_number: "phone2",
    call_stats: "OUTGOING",
    duration: 45,
  },
  {
    created_at: "2025-04-11T13:55:07+05:30",
    source_number: "phone15",
    dest_number: "phone1",
    call_stats: "MISSED",
    duration: 2,
  },
  {
    created_at: "2025-04-11T13:54:22+05:30",
    source_number: "phone15",
    dest_number: "phone1",
    call_stats: "MISSED",
    duration: 1,
  },
  {
    created_at: "2025-04-11T13:54:06+05:30",
    source_number: "phone15",
    dest_number: "phone1",
    call_stats: "MISSED",
    duration: 1,
  },
  {
    created_at: "2025-04-11T13:39:24+05:30",
    source_number: "phone15",
    dest_number: "phone1",
    call_stats: "MISSED",
    duration: 1,
  },
  {
    created_at: "2025-04-11T13:37:58+05:30",
    source_number: "phone1",
    dest_number: "phone15",
    call_stats: "ANSWERED",
    duration: 120,
  },
  {
    created_at: "2025-04-11T13:37:52+05:30",
    source_number: "phone15",
    dest_number: "phone2",
    call_stats: "OUTGOING",
    duration: 45,
  },
  {
    created_at: "2025-04-11T13:55:07+05:30",
    source_number: "phone15",
    dest_number: "phone1",
    call_stats: "MISSED",
    duration: 2,
  },
  {
    created_at: "2025-04-11T13:54:22+05:30",
    source_number: "phone15",
    dest_number: "phone1",
    call_stats: "MISSED",
    duration: 1,
  },
  {
    created_at: "2025-04-11T13:54:06+05:30",
    source_number: "phone15",
    dest_number: "phone1",
    call_stats: "MISSED",
    duration: 1,
  },
  {
    created_at: "2025-04-11T13:39:24+05:30",
    source_number: "phone15",
    dest_number: "phone1",
    call_stats: "MISSED",
    duration: 1,
  },
  {
    created_at: "2025-04-11T13:37:58+05:30",
    source_number: "phone1",
    dest_number: "phone15",
    call_stats: "ANSWERED",
    duration: 120,
  },
  {
    created_at: "2025-04-11T13:37:52+05:30",
    source_number: "phone15",
    dest_number: "phone2",
    call_stats: "OUTGOING",
    duration: 45,
  },
];

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}

function formatDuration(seconds: number) {
  if (seconds < 60) {
    return `${seconds} sec`;
  }

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
}

export const RecentCalls = () => {
  const getCallIcon = (status: CallStatus) => {
    switch (status) {
      case "MISSED":
        return (
          <div className="text-red-500 flex items-center justify-center w-10 h-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="7 13 12 18 17 13"></polyline>
              <polyline points="7 6 12 11 17 6"></polyline>
            </svg>
          </div>
        );
      case "OUTGOING":
        return (
          <div className="text-blue-500 flex items-center justify-center w-10 h-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="7 11 12 6 17 11"></polyline>
              <polyline points="7 17 12 12 17 17"></polyline>
            </svg>
          </div>
        );
      case "ANSWERED":
        return (
          <div className="text-green-500 flex items-center justify-center w-10 h-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </div>
        );
      default:
        return (
          <div className="text-gray-500 flex items-center justify-center w-10 h-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </div>
        );
    }
  };

  return (
    <SafeAreaProvider>
      <div className="flex flex-col h-screen max-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-sm py-4">
          <div className="text-center">
            <h1 className="text-xl font-medium">Recent Calls</h1>
          </div>
        </div>

        {/* Call list */}
        <div className="flex-1 overflow-y-auto">
          {mockCalls.map((call, index) => {
            const isOutgoing = call.source_number === "phone15";
            const displayNumber = isOutgoing
              ? call.dest_number
              : call.source_number;

            return (
              <div
                key={index}
                className={`flex items-center p-4 border-b border-gray-200 bg-white ${
                  call.call_stats === "MISSED" ? "bg-red-50" : ""
                }`}
              >
                {getCallIcon(call.call_stats as CallStatus)}

                <div className="flex-1 min-w-0 ml-3">
                  <div className="flex justify-between items-baseline">
                    <p
                      className={`text-lg font-medium truncate ${
                        call.call_stats === "MISSED"
                          ? "text-red-500"
                          : "text-gray-800"
                      }`}
                    >
                      {displayNumber}
                    </p>
                    <span className="text-xs text-gray-500 ml-2">
                      {formatDate(call.created_at)}
                    </span>
                  </div>

                  <div className="flex justify-between items-center mt-1">
                    <span className="text-sm text-gray-500">
                      {call.call_stats === "MISSED"
                        ? "Missed Call"
                        : formatDuration(call.duration)}
                    </span>
                    <span className="text-xs text-gray-400">
                      {isOutgoing ? "Outgoing" : "Incoming"}
                    </span>
                  </div>
                </div>

                <button className="ml-4 p-2 rounded-full text-blue-500 hover:bg-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </button>
              </div>
            );
          })}

          {mockCalls.length === 0 && (
            <div className="flex flex-col items-center justify-center h-64 p-4 text-center">
              <p className="text-gray-500 text-lg">No calls</p>
              <p className="text-gray-400 text-sm mt-2">
                Your recent calls will appear here
              </p>
            </div>
          )}
        </div>

        {/* Floating action button */}
        <div className="fixed bottom-6 right-6">
          <button className="h-14 w-14 rounded-full bg-blue-500 text-white shadow-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </button>
        </div>
      </div>
    </SafeAreaProvider>
  );
};
