/**
 * @param {number[][]} logs
 * @param {number} k
 * @return {number[]}
 */
 var findingUsersActiveMinutes = function(logs, k) {
    // 防止userId的太过于稀疏，导致内存太大
    const userLogs = new Map();
    logs.forEach(([userId, execTime]) => {
        if (!userLogs.has(userId)) {
            userLogs.set(userId, new Set());
        }
        userLogs.get(userId).add(execTime);
    })
    
    const result = Array.from({ length: k}).fill(0);
    userLogs.forEach((userLog) => {
        const minute = userLog.size;
        if (minute <= k) {
            result[minute - 1] += 1;
        }
    })
    return result;
};
