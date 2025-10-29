import axiosClient from "./axiosClient";

// Set `useMock = true` to use fake data for testing
const useMock = true;

const dashboardApi = {
  getStats: () => {
    if (useMock) {
      return new Promise((resolve) =>
        setTimeout(
          () =>
            resolve({
              data: {
                totalUsers: 1245,
                completedTasks: 842,
                pendingTasks: 122,
              },
            }),
          500
        )
      );
    }
    return axiosClient.get("/dashboard/stats");
  },

  getTrends: () => {
    if (useMock) {
      return new Promise((resolve) =>
        setTimeout(
          () =>
            resolve({
              data: [
                { day: "Mon", tasks: 5 },
                { day: "Tue", tasks: 8 },
                { day: "Wed", tasks: 3 },
                { day: "Thu", tasks: 10 },
                { day: "Fri", tasks: 7 },
              ],
            }),
          500
        )
      );
    }
    return axiosClient.get("/dashboard/trends");
  },
};

export default dashboardApi;
