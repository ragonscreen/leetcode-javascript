# 3961. Maximize Sum of Device Ratings

## Analysis

The global minimum across all units cannot be eliminated. It must rest in one of the devices.
Therefore, one device should be selected as the "dump device", the device where all other devices
dump their minimums.

Since each device can dump their minimum unit at most once, the final contribution of each device is
their second minimum.

The device with the smallest contribution should be selected as the dump device.

The result is therefore the sum of the second minimums of all but the dump device, and the global
minimum.

To prevent overcounting, we must track the global second minimum, this is the second minimum of the
dump device, which should not be considered in our final count.

---
