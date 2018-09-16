package com.boilerplate;

// import com.facebook.react.ReactActivity;
import android.os.Bundle; // required for onCreate parameter

import com.reactnativenavigation.controllers.SplashActivity;

import com.crashlytics.android.Crashlytics;
import io.fabric.sdk.android.Fabric;

public class MainActivity extends SplashActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        Fabric.with(this, new Crashlytics());
    }
    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    // @Override
    protected String getMainComponentName() {
        return "boilerplate";
    }
}
