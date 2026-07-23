# 1840. Maximum Building Height

## Analysis

Sort restrictions by index (x position), then normalize them by propagating forwards and backwards. For instance, a restriction of 500 at position 8 will never be reached. Track valid restrictions at each position, then try to get as close to it as possible, by calculating the difference between `dx` (delta index) and `dy` (delta height) at each stage. Track the maximum building height in the process.

---
