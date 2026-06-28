import * as WebBrowser from "expo-web-browser";
import * as AuthSession from "expo-auth-session";
import { supabase } from "@shared/supabase/client";

WebBrowser.maybeCompleteAuthSession();

export const signInWithGoogle = async () => {
  try {
    const redirectUri = AuthSession.makeRedirectUri();

    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: redirectUri,
      },
    });

    if (error) {
      console.error("OAuth init error:", error.message);
      return { success: false, error };
    }

    if (!data?.url) {
      return {
        success: false,
        error: new Error("No OAuth URL returned"),
      };
    }

    const result = await WebBrowser.openAuthSessionAsync(data.url, redirectUri);

    if (result.type !== "success") {
      return {
        success: false,
        error: new Error("User cancelled login"),
      };
    }

    return { success: true };
  } catch (err) {
    console.error("Login error:", err);
    return {
      success: false,
      error: err,
    };
  }
};
