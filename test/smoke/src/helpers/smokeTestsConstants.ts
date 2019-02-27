// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for details.

export class smokeTestsConstants {
// Default code of android platform version which is being targeted during the tests.
// 9 = Android Pie
public static defaultTargetAndroidPlatformVersion = "9";
// Default target emulator name "emulator-" + port
public static defaultTargetAndroidDeviceName = "emulator-5554";
// Timeout for smoke tests setup
public static smokeTestSetupAwaitTimeout = 10 * 60 * 1000;
// Timeout for emulator boot
public static emulatorLoadTimeout = 90 * 1000;
// Timeout for Spectron to wait for UI elements response to interaction
public static spectronElementResponseTimeout = 30 * 1000;
// Timeout for enabling Remote JS Debugging while testing RN app
public static enableRemoteJSTimeout = 30 * 1000;
// Timeout for Android app to build and to install
public static androidAppBuildAndInstallTimeout = 100 * 1000;
}