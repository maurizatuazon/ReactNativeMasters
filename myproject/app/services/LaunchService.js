import React from "react";
import { AsyncStorage } from "react-native";

export default class LaunchService {
    static async getLaunchesAsync() {
        let returnValue = JSON.parse("[]");
        try {
            let response = await fetch("https://launchlibrary.net/1.3/launch/");
            if (response.status === 200) {
                let responseJson = await response.json();
                returnValue = responseJson.launches;

                await AsyncStorage.setItem(
                    "@MyAsyncStorage:launchData",
                    JSON.stringify(returnValue)
                );
                return returnValue;
        } else {
            return await getCachedLaunchesAsync();
        }
        } catch (error) {
            return await getCachedLaunchesAsync();
        }
        return returnValue;
    }

    static async getCachedLaunchesAsync() {
        let returnValue = "[]";
        try {
            let storageValue = await AsyncStorage.getItem("@MyAsyncStorage:launchData");
            if (storageValue != null) {
                returnValue = storageValue;
            }
            return JSON.parse(returnValue);
        } catch (error) {
            console.error(error);
        }
        return returnValue;
    }

}