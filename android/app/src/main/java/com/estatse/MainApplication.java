package com.estatse;

import android.app.Application;
import com.airbnb.android.react.maps.MapsPackage;
import com.facebook.react.ReactApplication;
import com.azendoo.reactnativesnackbar.SnackbarPackage;
import com.reactnativecommunity.netinfo.NetInfoPackage;
import com.github.wumke.RNExitApp.RNExitAppPackage;
import com.reactnativecommunity.asyncstorage.AsyncStoragePackage;
import com.RNFetchBlob.RNFetchBlobPackage;
import com.imagepicker.ImagePickerPackage;
import com.BV.LinearGradient.LinearGradientPackage;
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.airbnb.android.react.maps.MapsPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new SnackbarPackage(),
            new NetInfoPackage(),
            new RNExitAppPackage(),
            new AsyncStoragePackage(),
            new RNFetchBlobPackage(),
            new ImagePickerPackage(),
            new LinearGradientPackage(),
            new RNGestureHandlerPackage(),
            new VectorIconsPackage(),
            new MapsPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
