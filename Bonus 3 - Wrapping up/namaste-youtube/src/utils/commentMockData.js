const commentMockData = [
  {
    id: 1,
    text: "Great video!",
    author: "User1",
    timestamp: "2023-03-01T12:00:00Z",
    replies: [
      {
        id: 1,
        text: "I agree!",
        author: "User2",
        timestamp: "2023-03-01T12:01:00Z",
        replies: [
          {
            id: 1,
            text: "I agree!",
            author: "User2",
            timestamp: "2023-03-01T12:01:00Z",
            replies: [
              {
                id: 1,
                text: "I agree!",
                author: "User2",
                timestamp: "2023-03-01T12:01:00Z",
                replies: [
                  {
                    id: 1,
                    text: "I agree!",
                    author: "User2",
                    timestamp: "2023-03-01T12:01:00Z",
                    replies: [],
                  },
                ],
              },
              {
                id: 2,
                text: "Very informative, thanks!",
                author: "User2",
                timestamp: "2023-03-01T12:05:00Z",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    text: "Very informative, thanks!",
    author: "User2",
    timestamp: "2023-03-01T12:05:00Z",
    replies: [],
  },
  {
    id: 3,
    text: "I learned a lot from this.",
    author: "User3",
    timestamp: "2023-03-01T12:10:00Z",
    replies: [
      {
        id: 1,
        text: "I learned a lot from this.",
        author: "User4",
        timestamp: "2023-03-01T12:11:00Z",
        replies: [],
      },
    ],
  },
];

export default commentMockData;
