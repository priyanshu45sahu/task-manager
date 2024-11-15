# Answers to Technical Questions

## 1. How long did you spend on the coding test?

I spent approximately 12 hours on the coding test, which included time for planning, coding, testing, and debugging.

## 2. What was the most useful feature that was added to the latest version of your chosen language?

In C++20, two very useful features were added: **the `contains` function for associative containers** and **an init-statement in range-based for loops**.

### 1. `contains` Function for Associative Containers

The `contains` function was added to `std::map` and `std::set`, offering a more concise and readable way to check if a key is present in an associative container. Previously, the `find` function was required to achieve this, which was less intuitive. Now, we can directly call `contains` on a `map` or `set` to check for a key’s existence.

#### Example Usage:

````cpp
#include <iostream>
#include <map>
#include <set>

int main() {
    std::map<int, std::string> myMap = {{1, "apple"}, {2, "banana"}, {3, "cherry"}};
    std::set<int> mySet = {1, 2, 3};

    if (myMap.contains(1)) {
        std::cout << "Map contains key 1\n";
    }

    if (mySet.contains(2)) {
        std::cout << "Set contains key 2\n";
    }

    return 0;
}


### 2. Range-Based For Loop with Initialization

In C++20, an init-statement was added to the range-based for loop, allowing initialization of variables within the loop scope. This provides a streamlined way to initialize containers or variables needed within the loop itself, reducing the need for additional setup code.

#### Example Usage:
```cpp
#include <iostream>
#include <vector>

int main() {
    for (std::vector<int> nums = {1, 2, 3, 4, 5}; int num : nums) {
        std::cout << num << " ";
    }
    // Output: 1 2 3 4 5

    return 0;
}
````

## 3. How would you track down a performance issue in production? Have you ever had to do this?

To track down a performance issue in production, I would follow a structured approach:

1. **Monitoring and Logging**: Review application logs and monitoring data to identify high-latency requests or error spikes.
2. **Profiling**: Use profiling tools to examine CPU and memory usage, query performance, and other bottlenecks.
3. **Database Analysis**: Investigate any slow-running queries or heavy database usage that might be affecting performance.
4. **Code Review and Optimization**: Examine relevant sections of code to identify inefficient algorithms or logic.
5. **Load Testing**: Simulate load testing to see if the performance issue can be reproduced under certain conditions.

Yes, I have dealt with production performance issues, primarily by analyzing logs.

## 4. If you had more time, what additional features or improvements would you consider adding to the task management application?

With more time, I would consider adding the following features:

1. **User Authentication and Authorization**: Implement a secure authentication system with role-based access control to manage user permissions.
2. **Multiple Device Support with Database Storage**: To enable multiple device support, I would implement a central database to store user data, allowing seamless access from different devices. This would allow users to manage tasks from any device and ensure that data is synced in real-time.
3. **Task Reminders and Notifications**: Allow users to set reminders or receive notifications for upcoming deadlines.
4. **Subtasks and Dependencies**: Add support for breaking down tasks into subtasks, with dependency tracking to better organize workflows.s
5. **Collaborative Features**: Support for task sharing, commenting, and collaboration, enabling multiple users to work together on projects.

These features would provide a richer and more versatile task management experience for users.
