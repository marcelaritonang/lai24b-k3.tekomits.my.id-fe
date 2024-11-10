// src/services/historyService.ts
export interface LinkHistory {
    id: number;
    shortLink: string;
    originalLink: string;
    qrCode: string;
    status: string;
    date: string;
}

export async function fetchLinkHistory(): Promise<LinkHistory[]> {
    // Simulating an API call with mock data
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    id: 1,
                    shortLink: "https://lynx.com/Bn41aCOInxj",
                    originalLink: "https://www.youtube.com/watch?v=8J7ZmH0lXuk",
                    qrCode: "/static/qr-code-1.png",
                    status: "Inactive",
                    date: "Oct - 08 - 2024",
                },
                {
                    id: 2,
                    shortLink: "https://lynx.com/Bn41aCOInxj",
                    originalLink: "https://unsplash.com/photos/2KjNwOzFfVQ",
                    qrCode: "/static/qr-code-2.png",
                    status: "Active",
                    date: "Sep - 18 - 2024",
                },
                // Add more mock data if needed
            ]);
        }, 1000); // Simulate network delay
    });
}
