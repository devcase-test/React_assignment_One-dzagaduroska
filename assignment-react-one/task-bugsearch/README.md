> Sytac Bugsearch Task

# Sytac.io test assignment

## Introduction

## Project setup

During the last sprint, your team picked up a task. The task had the following requirements:

```markdown
A lot of the data we have contains long sequences of identical numbers.
We could reduce the payloads we send if we expressed it differently.

This is an example of data we currently send: 22225555558888222

Instead of sending the full payload, we could instead send the count of each number.
Instead of sending '2222', we can express it as '42', because '2222' is a sequence of four twos.

The example data above would therefore be compressed as follows:

-   2222 is 42 (Four twos)
-   555555 is 65 (Six fives)
-   8888 is 48 (Four eights)
-   222 is 32 (Three twos)

The function would be expected to return 42654832

If the input of the function can't be decomposed, then the function should return the string 'wrong input'.
```

`
Unfortunately, your team has been a bit too eager and merged the code whilst it still contained bugs.

## Requirements

Please modify the function in "compressNumbers.ts" to satisfy the requirements above.
You can run the unit tests with `npm run test` to help you validate your code.
