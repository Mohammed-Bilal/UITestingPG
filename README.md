# UI Test Automation Playground - Test Automation Solution

This repository contains the automation test suite for the **UI Test Automation Playground** application. The tests are implemented using **TypeScript** and **Playwright**.

## Automated Test Scenarios

The following scenarios are automated:

- **Overlapped Element**
- **AJAX Data**
- **Visibility**
- **Dynamic Table**
- **Sample App**
- **Text Input**
- **Progress Bar**

## Prerequisites

Before running the tests, ensure you have the following installed on your system:

- **Node.js** (v14 or above)
- **npm** (comes with Node.js)

## Setup Instructions

### Step 1: Clone the UI Test Automation Playground Repository

Before running the tests, you need to have the **UI Test Automation Playground** running locally. Follow these steps:

`git clone https://github.com/inflectra/ui-test-automation-playground.git`

Follow the instructions in the `README.md` file of the cloned project to set up and run the application locally.

### Step 2: Set Up the Project
You have two options to set up the project:

Option A:Using the Zipped File
1. Download and extract the provided zip file to your local machine.
2. Navigate to the extracted folder.

Option B: Cloning from GitHub

Clone the repository using the command:
`git clone https://github.com/Mohammed-Bilal/UITestingPG.git`
Follow the instructions in the `README.md` file of the cloned project to set up 

### Step 3: Open the Project in an IDE

For the best development experience, open the extracted folder in your favorite IDE (e.g., Visual Studio Code, IntelliJ, etc.). This will provide you with features like syntax highlighting, code navigation, and integrated terminal.

### Step 4: Install Dependencies for this project

Install the project dependencies using npm:

`npm install`

## Running the Tests

This test suite supports both **local** and **production** environments, and tests can be executed in **headed** and **headless** modes.

### For Local Environment:

Headed Mode Local:

`npm run test:local:headed`

Headless Mode Local:

`npm run test:local`

### For Production Environment:

Headed Mode Prod:

`npm run test:prod:headed`

Headless Mode Prod:

`npm run test:prod`

## Test Scenarios

The following scenarios have been automated in this suite:

- **Overlapped Element**: Ensures the input fields can be accessed even when overlapped.
- **AJAX Data**: Waits for asynchronous data load and validates the label text after loading.
- **Visibility**: Verifies the visibility of various elements after interacting with the "Hide" button.
- **Dynamic Table**: Verifies the CPU usage of Chrome in the dynamic table.
- **Sample App**: Tests the user login scenario and validates the welcome message.
- **Text Input**: Changes the button label and verifies the updated text.
- **Progress Bar**: Ensures the progress bar reaches 75% and then stops.

## Folder Structure

- `tests/`: Contains all the test cases, each file corresponding to a specific feature.
- `pages/`: Contains the page object models (POM) for better code reuse.
- `fixtures/`: Holds any test data used during test execution.
- `playwright.config.ts`: Configuration file for Playwright setup.
- `package.json`: Contains the project metadata and dependencies.

## Conclusion

This test automation suite is designed to be flexible, maintainable, and scalable using **Playwright** and **TypeScript**. If you encounter any issues or have questions, feel free to reach out.
